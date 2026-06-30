# PwS Next.js

## 目的

- Header / Footer / Logo / Button / SectionHeading / ContactForm をcomponents化
- CSSを `styles/` に分割
- 既存の問い合わせAPIを `app/api/contact/route.ts` に移植
- Notion連携はまだ未実装。今後 `lib/notion.ts` に追加予定

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで以下を確認します。

```txt
http://localhost:3000
http://localhost:3000/contact
http://localhost:3000/privacy
```

## CSS方針

- Tailwind CSSは使わない
- CSS Modulesも使わない
- 通常CSSを `styles/` に分割して管理
- 色とフォントファミリーのみ `:root` のCSS変数で管理
- font-sizeは `--fz-sm` などにせず、各classに `rem` / `clamp()` で直接書く
- 余白も基本は `rem` / `clamp()` を直接書く
- 1pxのborderなどはpxのままでOK

## class名ルール

- `l-`：レイアウト用
  - 例：`l-header`, `l-footer`, `l-section`, `l-inner`
- `c-`：共通コンポーネント用
  - 例：`c-button`, `c-card`, `c-section-heading`
- `p-`：ページ固有用
  - 例：`p-top-hero`, `p-contact-form`
- `js-`：JavaScript操作用。現時点では未使用

## 触ってよい場所

- `components/pages/HomePage.tsx`：トップページの中身
- `components/pages/ContactPage.tsx`：お問い合わせページの中身
- `components/pages/PrivacyPage.tsx`：プライバシーポリシーの中身
- `components/pages/ThanksPage.tsx`：送信完了ページの中身
- `app/**/page.tsx`：Next.jsの入口ファイル。基本は薄く保つ
- `components/Header.tsx`：ヘッダー
- `components/Footer.tsx`：フッター
- `components/ContactForm.tsx`：お問い合わせフォームUI
- `styles/`：CSS調整

## 基本触らない場所

- `app/api/contact/route.ts`：お問い合わせ送信処理
- `lib/notion.ts`：今後Notion連携を入れる場所
- `package.json`：依存関係
- `next.config.js`：Next.js設定

## 環境変数

お問い合わせ送信をローカルで完全に動かす場合、以下の環境変数が必要です。

```txt
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_SHEET_ID
GOOGLE_SHEET_RANGE
RESEND_API_KEY
FROM_EMAIL
TO_EMAIL
```

本番ではVercelのEnvironment Variablesに設定します。

## 次のStep候補

1. ローカルでトップとお問い合わせの表示確認
2. 既存サイトとの見た目差分確認
3. API送信の動作確認
4. Notion連携追加
5. 知見一覧・知見詳細ページ追加

## page.tsx の扱い

Next.js App Routerでは、URLになる各フォルダに `page.tsx` が必要です。
ただし、後続メンバーが編集しやすいように、`app/**/page.tsx` は入口だけにし、実際のページ内容は `components/pages/` に分けています。

```txt
app/contact/page.tsx
→ /contact の入口。基本触らない

components/pages/ContactPage.tsx
→ お問い合わせページの中身。文言や構成を調整する場合はこちら
```

## Notion連携

知見記事は `/knowledge` に一覧、`/knowledge/[slug]` に詳細ページとして表示します。

### 必要な環境変数

`.env.local.example` をコピーして `.env.local` を作成し、以下を設定してください。

```txt
NOTION_TOKEN=
NOTION_KNOWLEDGE_DATA_SOURCE_ID=
```

`NOTION_TOKEN` は絶対に `NEXT_PUBLIC_` を付けないでください。ブラウザ側に公開されてしまうためです。

### Notion DBのプロパティ

以下のプロパティ名で取得します。

```txt
Title: タイトル
Slug: URL用文字列。例 knowledge-001
EyecatchUrl: 外部画像URL
EyecatchFile: Notionにアップロードした画像
Summary: 一覧・description用の概要
SaitoComment: 記事下部の齊藤コメント
Published: 公開チェック
PublishDate: 公開日
UpdatedDate: 更新日
```

本文はNotionページ下部の本文ブロックを取得します。対応している主なブロックは、段落、見出し、箇条書き、番号リスト、引用、コールアウト、区切り線、画像です。

### ローカル確認

環境変数を入れたあと、開発サーバーを再起動してください。

```bash
npm run dev
```

確認URL：

```txt
http://localhost:3000/knowledge
http://localhost:3000/knowledge/設定したslug
```
