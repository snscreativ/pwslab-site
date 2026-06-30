import { Client } from "@notionhq/client";

export type NotionArticle = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  saitoComment: string;
  eyecatchUrl: string;
  publishDate: string;
  updatedDate: string;
};

export type NotionBlock = any;

const notionVersion = "2025-09-03";

function getNotionClient() {
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;
  return new Client({ auth: token, notionVersion });
}

function getDataSourceId() {
  return process.env.NOTION_KNOWLEDGE_DATA_SOURCE_ID || process.env.NOTION_KNOWLEDGE_DATABASE_ID || "";
}

export function isNotionReady() {
  return Boolean(process.env.NOTION_TOKEN && (process.env.NOTION_KNOWLEDGE_DATA_SOURCE_ID || process.env.NOTION_KNOWLEDGE_DATABASE_ID));
}

function plainText(richText: any[] = []) {
  return richText.map((text) => text.plain_text || "").join("");
}

function getTitle(properties: any, key: string) {
  const property = properties?.[key];
  if (!property) return "";
  if (property.type === "title") return plainText(property.title);
  if (property.type === "rich_text") return plainText(property.rich_text);
  return "";
}

function getRichText(properties: any, key: string) {
  const property = properties?.[key];
  if (!property) return "";
  if (property.type === "rich_text") return plainText(property.rich_text);
  if (property.type === "title") return plainText(property.title);
  return "";
}

function getCheckbox(properties: any, key: string) {
  const property = properties?.[key];
  return property?.type === "checkbox" ? Boolean(property.checkbox) : false;
}

function getDate(properties: any, key: string) {
  const property = properties?.[key];
  if (property?.type !== "date") return "";
  return property.date?.start || "";
}

function getUrl(properties: any, key: string) {
  const property = properties?.[key];
  if (!property) return "";
  if (property.type === "url") return property.url || "";
  if (property.type === "rich_text") return plainText(property.rich_text);
  return "";
}

function getFileUrl(properties: any, key: string) {
  const property = properties?.[key];
  if (property?.type !== "files") return "";
  const file = property.files?.[0];
  if (!file) return "";
  if (file.type === "external") return file.external?.url || "";
  if (file.type === "file") return file.file?.url || "";
  return "";
}

function mapArticle(page: any): NotionArticle {
  const properties = page.properties || {};
  const eyecatchUrl = getUrl(properties, "EyecatchUrl") || getFileUrl(properties, "EyecatchFile");

  return {
    id: page.id,
    title: getTitle(properties, "Title") || "無題",
    slug: getRichText(properties, "Slug"),
    summary: getRichText(properties, "Summary"),
    saitoComment: getRichText(properties, "SaitoComment"),
    eyecatchUrl,
    publishDate: getDate(properties, "PublishDate"),
    updatedDate: getDate(properties, "UpdatedDate"),
  };
}

export async function getKnowledgeArticles(): Promise<NotionArticle[]> {
  const notion = getNotionClient();
  const dataSourceId = getDataSourceId();
  if (!notion || !dataSourceId) return [];

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "PublishDate",
        direction: "descending",
      },
    ],
  });

  return response.results
    .map(mapArticle)
    .filter((article) => article.slug);
}

export async function getKnowledgeArticleBySlug(slug: string): Promise<NotionArticle | null> {
  const notion = getNotionClient();
  const dataSourceId = getDataSourceId();
  if (!notion || !dataSourceId) return null;

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: { equals: true },
        },
        {
          property: "Slug",
          rich_text: { equals: slug },
        },
      ],
    },
    page_size: 1,
  });

  const page = response.results[0];
  return page ? mapArticle(page) : null;
}

export async function getNotionBlocks(blockId: string): Promise<NotionBlock[]> {
  const notion = getNotionClient();
  if (!notion) return [];

  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor || undefined : undefined;
  } while (cursor);

  return blocks;
}
