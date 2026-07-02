import type { Metadata } from "next";
import Link from "next/link";
import { getKnowledgeArticles, isNotionReady } from "@/lib/notion";
import "@/styles/knowledge.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "知見",
  description:
    "人とAIの協働、組織設計、業務構造化に関するPwSの知見を紹介します。",
};

function formatDate(date: string) {
  if (!date) return "";
  return date.replaceAll("-", ".");
}

export default async function KnowledgePage() {
  const articles = await getKnowledgeArticles();

  return (
    <main className="p-knowledge">
      <section className="l-section p-knowledge-hero">
        <div className="l-inner">
          <div className="c-section-heading">
            <p className="c-label">KNOWLEDGE</p>
            <h1 className="c-heading-primary">知見</h1>
            <p className="c-section-lead">
              人とAIの協働、組織設計、業務構造化に関するPwSの知見を紹介します。
            </p>
          </div>

          {!isNotionReady() && (
            <div className="c-notice">
              <p>Notion連携の環境変数がまだ設定されていません。</p>
              <p>
                NOTION_TOKEN と NOTION_KNOWLEDGE_DATA_SOURCE_ID を .env.local
                に設定してください。
              </p>
            </div>
          )}

          {isNotionReady() && articles.length === 0 && (
            <div className="c-notice">
              <p>公開中の記事がありません。</p>
              <p>
                Notion DBで Published にチェックが入っているか確認してください。
              </p>
            </div>
          )}

          <div className="p-knowledge-list">
            {articles.map((article) => (
              <article className="c-card p-knowledge-card" key={article.id}>
                <div className="c-card__border p-knowledge-card__border">
                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="p-knowledge-card__link"
                  >
                    {article.eyecatchUrl && (
                      <div className="p-knowledge-card__image">
                        <img src={article.eyecatchUrl} alt="" loading="lazy" />
                      </div>
                    )}
                    <div className="p-knowledge-card__body">
                      {article.publishDate && (
                        <time>{formatDate(article.publishDate)}</time>
                      )}
                      <h2>{article.title}</h2>
                      <div className="c-card__point p-knowledge-card__point"></div>
                      {article.summary && <p>{article.summary}</p>}
                      <span className="p-knowledge-card__more">
                        詳しく見る <span className="c-icon-arrow">↗</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
