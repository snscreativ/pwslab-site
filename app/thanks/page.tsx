import Button from "@/components/Button";
import "@/styles/thanks.css";

export const metadata = {
  title: "お問い合わせありがとうございました",
};

export default function ThanksPage() {
  return (
    <main className="p-thanks">
      <section className="l-section l-section--underpage">
        <div className="l-inner l-inner--narrow">
          <div className="c-section-heading">
            <p className="c-label">Thank you</p>
            <h1 className="c-heading-primary">
              お問い合わせありがとうございました
            </h1>
          </div>
          <p className="c-text">
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
          <Button href="/">トップへ戻る</Button>
        </div>
        <div className="p-thanks__graphic">
          <img src="/images/thanks/shape02.png" alt="" />
        </div>
      </section>
    </main>
  );
}
