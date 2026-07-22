// app/layout.tsx
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/components.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pwslab.jp"),
  title: {
    default:
      "株式会社PwS｜人とAIの協働組織設計・業務可視化｜Human Driven Design",
    template: "%s｜株式会社PwS", //ブラウザタブのタイトル表示、各ページのtitleを編集
  },
  description:
    "株式会社PwSは、AIをツールではなく「組織構成員」として機能させる設計原則、Human Driven Design（HDD）を提唱。業務を可視化・標準化し、人とAIの役割・判断・責任を設計することで、持続的に拡張できる人とAIの協働組織づくりを支援します。",
  openGraph: {
    siteName: "株式会社PwS",
    type: "website",
    locale: "ja_JP",
    url: "https://www.pwslab.jp",
    title: "株式会社PwS｜人とAIの協働組織設計・業務可視化｜Human Driven Design",
    description:
      "株式会社PwSは、AIをツールではなく「組織構成員」として機能させる設計原則、Human Driven Design（HDD）を提唱。業務を可視化・標準化し、人とAIの役割・判断・責任を設計することで、持続的に拡張できる人とAIの協働組織づくりを支援します。",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "株式会社PwS",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社PwS｜人とAIの協働組織設計・業務可視化｜Human Driven Design",
    description:
      "株式会社PwSは、AIをツールではなく「組織構成員」として機能させる設計原則、Human Driven Design（HDD）を提唱。業務を可視化・標準化し、人とAIの役割・判断・責任を設計することで、持続的に拡張できる人とAIの協働組織づくりを支援します。",
    images: ["/images/ogp.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
