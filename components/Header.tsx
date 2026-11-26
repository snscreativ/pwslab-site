"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const unlockScroll = useRef<(() => void) | null>(null);

  const closeMenu = () => {
    // リンク先への移動より先に、元のスクロール状態へ戻す。
    unlockScroll.current?.();
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const root = document.documentElement;
    const header = headerRef.current;
    const headerTransform = header?.style.transform ?? "";
    const x = window.scrollX;
    const y = window.scrollY;
    const properties = ["position", "top", "left", "width", "overflow"];
    const saved = properties.map((name) => ({
      name,
      value: body.style.getPropertyValue(name),
      priority: body.style.getPropertyPriority(name),
    }));
    const rootOverflow = root.style.getPropertyValue("overflow");
    const rootOverflowPriority = root.style.getPropertyPriority("overflow");

    // iOSでも背面を動かさないよう、表示位置を保持したまま本文を固定する。
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = `-${x}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    // 本文固定でstickyヘッダーが画面外へ移動しないよう位置を補正する。
    if (header) header.style.transform = `translateY(${y}px)`;

    const restore = () => {
      if (unlockScroll.current !== restore) return;
      saved.forEach(({ name, value, priority }) => {
        if (value) body.style.setProperty(name, value, priority);
        else body.style.removeProperty(name);
      });
      if (rootOverflow)
        root.style.setProperty("overflow", rootOverflow, rootOverflowPriority);
      else root.style.removeProperty("overflow");
      if (header) {
        if (headerTransform) header.style.transform = headerTransform;
        else header.style.removeProperty("transform");
      }
      window.scrollTo({ left: x, top: y, behavior: "instant" });
      unlockScroll.current = null;
    };
    unlockScroll.current = restore;

    // PC幅へ切り替えた場合も、非表示のメニューがスクロールを止めないようにする。
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (desktop.matches) {
        restore();
        setIsOpen(false);
      }
    };
    desktop.addEventListener("change", onResize);
    onResize();
    return () => {
      desktop.removeEventListener("change", onResize);
      restore();
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="l-header">
      <Link
        href="/"
        className="l-header__logo"
        aria-label="PwS トップへ"
        onClick={closeMenu}
      >
        <Logo />
      </Link>

      <nav className="l-header__nav" aria-label="グローバルナビゲーション">
        <div className="l-header__nav-item l-header__nav-item--services">
          <Link href="/#services">サービス</Link>
          <div className="l-header__submenu" aria-label="サービスメニュー">
            <div className="l-header__submenu-inner">
              <p className="l-header__submenu-label">
                <span>SERVICES</span>
                サービス
              </p>
              <div className="l-header__submenu-grid">
                <a href="/service/rtr">
                  <span className="l-header__submenu-copy">
                    <span className="l-header__submenu-title">RTR</span>
                    <span className="l-header__submenu-description">
                      人と人のあいだを見つめる組織マネジメントサイクル
                    </span>
                  </span>
                  <span className="l-header__submenu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href="/service/finance">
                  <span className="l-header__submenu-copy">
                    <span className="l-header__submenu-title">財務経理部</span>
                    <span className="l-header__submenu-description">
                      Protein × Siliconでつくる財務経理チーム
                    </span>
                  </span>
                  <span className="l-header__submenu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href="/service/marketing">
                  <span className="l-header__submenu-copy">
                    <span className="l-header__submenu-title">
                      マーケティング部
                    </span>
                    <span className="l-header__submenu-description">
                      Protein × Siliconでつくるマーケティングチーム
                    </span>
                  </span>
                  <span className="l-header__submenu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href="/service/pw1">
                  <span className="l-header__submenu-copy">
                    <span className="l-header__submenu-title">Pw1</span>
                    <span className="l-header__submenu-description">
                      Protein × Siliconでつくる会計事務所
                    </span>
                  </span>
                  <span className="l-header__submenu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

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
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
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
          <p className="l-header__sp-ttl">サービス一覧</p>
          <a
            href="/service/rtr"
            onClick={closeMenu}
            className="l-header__sp-sub-link"
          >
            RTR
          </a>

          <a
            href="/service/finance"
            onClick={closeMenu}
            className="l-header__sp-sub-link"
          >
            財務経理部 Silicon Worker チーム
          </a>

          <a
            href="/service/marketing"
            onClick={closeMenu}
            className="l-header__sp-sub-link"
          >
            マーケティング部 Silicon Worker チーム
          </a>

          <a
            href="/service/pw1"
            onClick={closeMenu}
            className="l-header__sp-sub-link"
          >
            Pw1 会計事務所
          </a>

          <p className="l-header__sp-ttl">コンテンツ</p>
          <Link href="/#services" onClick={closeMenu}>
            サービスについて
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
            お問い合わせ <span className="c-icon-arrow">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
