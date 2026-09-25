import Pagination from "@/components/Pagination";
import { paginate } from "@/lib/pagination";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getNewsList } from "@/lib/notion";
import "@/styles/news.css";

export const dynamic = "force-dynamic";

function formatDate(date: string) {
  if (!date) return "";
  return date.replaceAll("-", ".");
}

export default async function NewsPage({ searchParams }: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const newsList = await getNewsList();
  const pagination = paginate(newsList, (await searchParams).page);

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

          <div className="p-news__list c-pagination-target" id="article-list">
            {newsList.length > 0 ? (
              pagination.items.map((news) => (
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
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} basePath="/news" />
        </div>
      </section>
    </main>
  );
}
