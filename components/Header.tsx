"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="l-header">
      <Link
        href="/"
        className="l-header__logo"
        aria-label="PwS トップへ"
        onClick={closeMenu}
      >
        <Logo />
      </Link>

      <nav className="l-header__nav" aria-label="グローバルナビゲーション">
        <Link href="/#services">サービス</Link>
        <Link href="/#philosophy">アプローチ</Link>
        <Link href="/#diagnosis">AI診断</Link>
        <Link href="/#company">企業情報</Link>
        <Link href="/knowledge">知見</Link>
        <Link href="/news">お知らせ</Link>
      </nav>

      <div className="l-header__actions">
        <Link href="/contact" className="c-button c-button--header">
          お問い合わせ <span className="c-icon-arrow">↗</span>
        </Link>
      </div>

      <button
        type="button"
        className={`l-header__menu-button ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="メニューを開閉する"
        aria-expanded={isOpen}
        aria-controls="sp-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="sp-menu"
        className={`l-header__sp-menu ${isOpen ? "is-open" : ""}`}
      >
        <nav
          className="l-header__sp-nav"
          aria-label="スマートフォンナビゲーション"
        >
          <Link href="/#services" onClick={closeMenu}>
            サービス
          </Link>
          <Link href="/#philosophy" onClick={closeMenu}>
            アプローチ
          </Link>
          <Link href="/#diagnosis" onClick={closeMenu}>
            AI診断
          </Link>
          <Link href="/#company" onClick={closeMenu}>
            企業情報
          </Link>
          <Link href="/knowledge" onClick={closeMenu}>
            知見
          </Link>
          <Link href="/news" onClick={closeMenu}>
            お知らせ
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            お問い合わせ <span className="c-icon-arrow">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
