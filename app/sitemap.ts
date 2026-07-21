import type { MetadataRoute } from "next";
import {
  getKnowledgeArticles,
  getNewsList,
} from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.pwslab.jp";

  const [knowledgeArticles, newsList] = await Promise.all([
    getKnowledgeArticles(),
    getNewsList(),
  ]);

  // 固定ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 知見の個別記事
  const knowledgePages: MetadataRoute.Sitemap = knowledgeArticles.map(
    (article) => ({
      url: `${baseUrl}/knowledge/${article.slug}`,
      lastModified: article.updatedDate || article.publishDate
        ? new Date(article.updatedDate || article.publishDate)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // お知らせの個別記事
  const newsPages: MetadataRoute.Sitemap = newsList.map((news) => ({
    url: `${baseUrl}/news/${news.slug}`,
    lastModified: news.publishDate
      ? new Date(news.publishDate)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...knowledgePages, ...newsPages];
}
