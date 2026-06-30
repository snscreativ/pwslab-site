import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NotionBlocks from "@/components/NotionBlocks";
import {
  getKnowledgeArticleBySlug,
  getNotionBlocks,
  isNotionReady,
} from "@/lib/notion";
import "@/styles/knowledge.css";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  if (!date) return "";
  return date.replaceAll("-", ".");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getKnowledgeArticleBySlug(slug);

  if (!article) {
    return {
      title: "知見記事",
    };
  }

  return {
    title: `${article.title} — PwS`,
    description: article.summary || "PwSの知見記事です。",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  if (!isNotionReady()) {
    return (
      <main className="p-article">
        <section className="l-section">
          <div className="l-inner l-inner--narrow">
            <div className="c-notice">
              <p>Notion連携の環境変数がまだ設定されていません。</p>
              <p>
                NOTION_TOKEN と NOTION_KNOWLEDGE_DATA_SOURCE_ID を .env.local
                に設定してください。
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const article = await getKnowledgeArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const blocks = await getNotionBlocks(article.id);

  return (
    <main className="p-article">
      <article className="l-section">
        <div className="l-inner l-inner--narrow">
          <header className="p-article__header">
            <p className="c-label">KNOWLEDGE</p>
            <h1>{article.title}</h1>

            <div className="p-article__meta">
              {article.publishDate && (
                <time>公開日：{formatDate(article.publishDate)}</time>
              )}
              {article.updatedDate && (
                <time>更新日：{formatDate(article.updatedDate)}</time>
              )}
            </div>

            {article.summary && (
              <p className="p-article__summary">{article.summary}</p>
            )}
          </header>

          {article.eyecatchUrl && (
            <figure className="p-article__eyecatch">
              <img src={article.eyecatchUrl} alt="" />
            </figure>
          )}

          <NotionBlocks blocks={blocks} />

          {article.saitoComment && (
            <aside
              className="p-article__comment"
              aria-labelledby="saito-comment-title"
            >
              <p className="p-article__comment-label">Comment</p>
              <div className="p-article__comment-head">
                <h2
                  id="saito-comment-title"
                  className="p-article__comment-title"
                >
                  齊藤コメント
                </h2>
              </div>

              <p className="p-article__comment-text">{article.saitoComment}</p>
            </aside>
          )}
        </div>
      </article>
      <div className="p-article__back">
        <Link href="/knowledge" className="c-button c-button--text">
          知見一覧へ戻る <span className="c-icon-arrow">↗</span>
        </Link>
      </div>
    </main>
  );
}
