import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="l-header">
      <Link href="/" className="l-header__logo" aria-label="PwS トップへ">
        <Logo />
      </Link>

      <nav className="l-header__nav" aria-label="グローバルナビゲーション">
        <Link href="/#services">サービス</Link>
        <Link href="/#philosophy">アプローチ</Link>
        <Link href="/#diagnosis">AI診断</Link>
        <Link href="/knowledge">知見</Link>
        <Link href="/#company">企業情報</Link>
      </nav>

      <div className="l-header__actions">
        <Link href="/contact" className="c-button c-button--header">
          お問い合わせ <span className="c-icon-arrow">↗</span>
        </Link>
      </div>
    </header>
  );
}
