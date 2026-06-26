const { google } = require('googleapis');
const { Resend } = require('resend');

const requiredFields = [
  'GOOGLE_PRIVATE_KEY',
  'GOOGLE_CLIENT_EMAIL',
  'GOOGLE_SHEET_ID',
  'RESEND_API_KEY',
  'FROM_EMAIL',
  'TO_EMAIL'
];

function normalizePrivateKey(key = '') {
  return key.replace(/\\n/g, '\n');
}

function isValidEmail(email = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(body) {
  const errors = [];
  if (!body.name) errors.push('お名前を入力してください。');
  if (!body.company) errors.push('会社名を入力してください。');
  if (!body.email) errors.push('メールアドレスを入力してください。');
  if (body.email && !isValidEmail(body.email)) errors.push('正しいメールアドレス形式で入力してください。');
  if (!Array.isArray(body.consultation) || body.consultation.length === 0) errors.push('ご相談内容を1つ以上選択してください。');
  if (body.privacy !== true) errors.push('個人情報の取り扱いへの同意が必要です。');
  return errors;
}

function text(value) {
  if (Array.isArray(value)) return value.join('\n');
  return value ? String(value) : '';
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const missing = requiredFields.filter((name) => !process.env[name]);
  if (missing.length) {
    return res.status(500).json({ message: `環境変数が不足しています: ${missing.join(', ')}` });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const payload = {
    name: text(body.name).trim(),
    company: text(body.company).trim(),
    email: text(body.email).trim(),
    consultation: Array.isArray(body.consultation) ? body.consultation.map(text).filter(Boolean) : [],
    message: text(body.message).trim(),
    position: text(body.position).trim(),
    phone: text(body.phone).trim(),
    privacy: body.privacy === true
  };

  const errors = validate(payload);
  if (errors.length) {
    return res.status(400).json({ message: errors.join('\n') });
  }

  const submittedAt = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const consultationText = payload.consultation.join('\n');
  const privacyText = payload.privacy ? '同意します' : '未同意';

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: process.env.GOOGLE_SHEET_RANGE || 'シート1!A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          submittedAt,
          payload.name,
          payload.company,
          payload.email,
          consultationText,
          payload.message,
          payload.position,
          payload.phone,
          privacyText
        ]]
      }
    });

    const adminBody = `PwSサイトよりお問い合わせがありました。\n\nお名前：${payload.name}\n会社名：${payload.company}\nメールアドレス：${payload.email}\n役職：${payload.position}\n電話番号：${payload.phone}\n\nご相談内容：\n${consultationText}\n\nその他：\n${payload.message}\n\n個人情報の取り扱い同意：${privacyText}\n\n送信日時：${submittedAt}`;

    const replyBody = `この度はPwSへお問い合わせいただきありがとうございます。\n\n以下の内容でお問い合わせを受け付けました。\n\n担当者が内容を確認のうえ、ご連絡いたします。\nまずは現在のお困りごとを整理しながら、一緒に最適な進め方を考えさせていただきます。\n\n━━━━━━━━━━━━━━\n送信内容\n━━━━━━━━━━━━━━\n\nお名前：${payload.name}\n\n会社名：${payload.company}\n\nメールアドレス：${payload.email}\n\n役職：${payload.position}\n\n電話番号：${payload.phone}\n\nご相談内容：\n${consultationText}\n\nその他：\n${payload.message}\n\n※本メールは自動送信です。`;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `【お問い合わせ】${payload.name}様（PwSサイト）`,
      text: adminBody,
      replyTo: payload.email
    });

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: payload.email,
      subject: 'お問い合わせありがとうございます',
      text: replyBody
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: '送信処理に失敗しました。時間をおいて再度お試しください。' });
  }
};
