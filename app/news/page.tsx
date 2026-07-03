import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getNewsList } from "@/lib/notion";
import "@/styles/news.css";

export const dynamic = "force-dynamic";

function formatDate(date: string) {
  if (!date) return "";
  return date.replaceAll("-", ".");
}

export default async function NewsPage() {
  const newsList = await getNewsList();

  return (
    <main className="p-news">
      <section className="l-section l-section--underpage">
        <div className="l-inner l-inner--narrow">
          <SectionHeading
            label="NEWS"
            title="お知らせ"
            lead="株式会社PwSからのお知らせを掲載しています。"
            as="h1"
          />

          <div className="p-news__list">
            {newsList.length > 0 ? (
              newsList.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.slug}`}
                  className="p-news__item"
                >
                  <time className="p-news__date" dateTime={news.publishDate}>
                    {formatDate(news.publishDate)}
                  </time>

                  <span className="p-news__title">{news.title}</span>
                </Link>
              ))
            ) : (
              <p className="p-news__empty">現在、お知らせはありません。</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
