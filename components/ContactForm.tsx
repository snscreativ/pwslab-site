"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

type FormPayload = {
  name: string;
  company: string;
  email: string;
  consultation: string[];
  message: string;
  position: string;
  phone: string;
  privacy: boolean;
};

const consultationOptions = [
  "AI活用や働き方を見直したいが、何から始めればよいか相談したい",
  "AIを導入したが、うまく活用できていない",
  "業務がブラックボックス化・属人化している",
  "組織や役割分担を見直したい",
  "人手不足・採用に課題がある",
  "PwSのサービスについて詳しく知りたい",
  "協業・セミナー登壇について相談したい",
  "その他",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const router = useRouter();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const payload: FormPayload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      consultation: formData.getAll("consultation").map(String),
      message: String(formData.get("message") || "").trim(),
      position: String(formData.get("position") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      privacy: formData.get("privacy") === "同意します",
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.name) nextErrors.name = "お名前を入力してください。";
    if (!payload.company) nextErrors.company = "会社名を入力してください。";
    if (!payload.email) nextErrors.email = "メールアドレスを入力してください。";
    else if (!isValidEmail(payload.email))
      nextErrors.email = "正しいメールアドレス形式で入力してください。";
    if (!payload.consultation.length)
      nextErrors.consultation = "ご相談内容を1つ以上選択してください。";
    if (!payload.privacy)
      nextErrors.privacy = "個人情報の取り扱いへの同意が必要です。";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSending(true);
    setStatus("送信中です。");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "送信に失敗しました。");
      router.push("/thanks");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "送信に失敗しました。時間をおいて再度お試しください。",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="p-contact-form c-card" onSubmit={handleSubmit} noValidate>
      <div className="c-card__border">
        <div className="p-contact-form__grid">
          <div className="p-contact-form__field">
            <label htmlFor="name">
              お名前 <span>必須</span>
            </label>
            <input type="text" id="name" name="name" autoComplete="name" />
            <p className="p-contact-form__error">{errors.name}</p>
          </div>
          <div className="p-contact-form__field">
            <label htmlFor="company">
              会社名 <span>必須</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
            />
            <p className="p-contact-form__error">{errors.company}</p>
          </div>
          <div className="p-contact-form__field p-contact-form__field--full">
            <label htmlFor="email">
              メールアドレス <span>必須</span>
            </label>
            <input type="email" id="email" name="email" autoComplete="email" />
            <p className="p-contact-form__error">{errors.email}</p>
          </div>
        </div>

        <fieldset className="p-contact-form__field p-contact-form__checkboxes">
          <legend>
            ご相談内容（複数選択可） <span>必須</span>
          </legend>
          {consultationOptions.map((option) => (
            <label key={option}>
              <input type="checkbox" name="consultation" value={option} />
              {option}
            </label>
          ))}
          <p className="p-contact-form__error">{errors.consultation}</p>
        </fieldset>

        <div className="p-contact-form__field">
          <label htmlFor="message">その他（自由記述）</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="「その他」を選択された方は、ご自由にご記入ください。"
          />
        </div>

        <div className="p-contact-form__grid">
          <div className="p-contact-form__field">
            <label htmlFor="position">役職</label>
            <input
              type="text"
              id="position"
              name="position"
              autoComplete="organization-title"
            />
          </div>
          <div className="p-contact-form__field">
            <label htmlFor="phone">電話番号</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" />
          </div>
        </div>

        <fieldset className="p-contact-form__field p-contact-form__privacy">
          <legend>
            <a
              href="/privacy"
              className="p-privacy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              個人情報の取り扱いについて
            </a>{" "}
            <span>必須</span>
          </legend>
          <label>
            <input type="checkbox" name="privacy" value="同意します" />
            個人情報の取り扱いに同意します。
          </label>
          <p className="p-contact-form__error">{errors.privacy}</p>
        </fieldset>

        <div className="p-contact-form__submit">
          <button
            type="submit"
            className="c-button c-button--submit"
            disabled={isSending}
          >
            送信する <span className="c-icon-arrow">↗</span>
          </button>
          <p
            className="p-contact-form__status"
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </div>
      </div>
    </form>
  );
}
