import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} className="c-button c-button--text">
      {children} <span className="c-icon-arrow">↗</span>
    </Link>
  );
}
