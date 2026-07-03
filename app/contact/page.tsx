import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import "@/styles/contact.css";

export const metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  return (
    <main className="p-contact">
      <section className="p-contact-hero">
        <div className="p-contact-hero__graphic" aria-hidden="true">
          <img src="/images/contact/shape03.png" alt="" />
        </div>
        <div className="l-inner">
          <SectionHeading
            label="CONTACT"
            title="お問い合わせ"
            as="h1"
            lead={"お問い合わせありがとうございます。現在のお困りごとやご相談内容をお聞かせください。 \n内容を確認のうえ、担当者よりご連絡いたします。"}
          />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

