import Button from "@/components/Button";

export const metadata = {
  title: "お問い合わせありがとうございました"
};

export default function ThanksPage() {
  return (
    <main className="p-thanks">
      <section className="l-section l-section--underpage">
        <div className="l-inner l-inner--narrow">
          <h1 className="c-heading-primary">お問い合わせありがとうございます。</h1>
          <p className="c-text">内容を確認のうえ、担当者よりご連絡いたします。</p>
          <Button href="/">トップへ戻る</Button>
        </div>
      </section>
    </main>
  );
}
