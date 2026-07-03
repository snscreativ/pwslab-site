import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import NotionBlocks from "@/components/NotionBlocks";
import { getNewsBySlug, getNotionBlocks } from "@/lib/notion";
import "@/styles/news.css";

export const dynamic = "force-dynamic";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string) {
  if (!date) return "";
  return date.replaceAll("-", ".");
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const blocks = await getNotionBlocks(news.id);

  return (
    <main className="p-news-detail">
      <section className="l-section l-section--underpage">
        <div className="l-inner l-inner--narrow">
          <p className="p-news-detail__label">NEWS</p>

          <article className="p-news-detail__article">
            <header className="p-news-detail__header">
              <time className="p-news-detail__date" dateTime={news.publishDate}>
                {formatDate(news.publishDate)}
              </time>

              <h1 className="p-news-detail__title">{news.title}</h1>
            </header>

            <div className="p-news-detail__body">
              <NotionBlocks blocks={blocks} />
            </div>
          </article>

          <div className="p-news-detail__back">
            <Link href="/news" className="c-button c-button--text">
              お知らせ一覧へ戻る <span className="c-icon-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
