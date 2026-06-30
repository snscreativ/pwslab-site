// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/components.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pwslab.jp"),
  title: {
    default: "PwS｜人とAIの協働を設計し、組織を進化させる。",
    template: "%s｜PwS",//ブラウザタブのタイトル表示、各ページのtitleを編集
  },
  description:
    "PwSは、戦略・組織・プロダクトをつなぎ、人とAIがそれぞれの強みを発揮できる仕組みをデザインします。",
  openGraph: {
    siteName: "PwS",
    type: "website",
    locale: "ja_JP",
    url: "https://www.pwslab.jp",
    title: "PwS — 人とAIの協働を設計し、組織を進化させる。",
    description:
      "PwSは、戦略・組織・プロダクトをつなぎ、人とAIがそれぞれの強みを発揮できる仕組みをデザインします。",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "PwS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PwS — 人とAIの協働を設計し、組織を進化させる。",
    description:
      "PwSは、戦略・組織・プロダクトをつなぎ、人とAIがそれぞれの強みを発揮できる仕組みをデザインします。",
    images: ["/images/ogp.png"],
  },
  alternates: {
    canonical: "/",
  },
};

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
      </body>
    </html>
  );
}