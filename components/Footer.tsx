import Link from "next/link";

export default function Footer() {
  return (
    <footer className="l-footer">
      <nav className="l-footer__nav" aria-label="フッターナビゲーション">
        <Link href="/#company">会社概要</Link>
        <Link href="/privacy">プライバシーポリシー</Link>
      </nav>
      <p className="l-footer__copyright">© 2026 PwS inc. All rights reserved.</p>
    </footer>
  );
}
