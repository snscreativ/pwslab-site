import { Client } from "@notionhq/client";
import { bannerDate, safeImageUrl, type SiteBanner } from "./site-banners";

export async function getSiteBanners(): Promise<SiteBanner[]> {
  const token = process.env.NOTION_TOKEN;
  const source = process.env.NOTION_EVENT_BANNERS_DATA_SOURCE_ID;
  if (!token || !source) return [];
  const notion = new Client({ auth: token, notionVersion: "2025-09-03",
    fetch: (url, options) => fetch(url, { ...options, cache: "no-store" }) });
  const banners: SiteBanner[] = [];
  let cursor: string | undefined;
  do {
    const response = await notion.dataSources.query({ data_source_id: source,
      filter: { property: "Enabled", checkbox: { equals: true } },
      page_size: 100, start_cursor: cursor });
    for (const page of response.results) {
      if (!("properties" in page)) continue;
      const p: any = page.properties;
      const file = p.ImageFile?.files?.[0];
      const imageUrl = p.ImageUrl?.url || file?.file?.url || file?.external?.url || "";
      const linkUrl = p.LinkUrl?.url || "";
      if (!safeImageUrl(imageUrl) || !/^https?:\/\//i.test(linkUrl)) continue;
      try {
        banners.push({ id: page.id,
          title: (p.Title?.title || []).map((t: any) => t.plain_text || "").join(""),
          imageUrl, linkUrl, expiresAt: p.ImageUrl?.url ? "" : file?.file?.expiry_time || "",
          startsAt: bannerDate(p.StartDate?.date?.start),
          endsAt: bannerDate(p.EndDate?.date?.start, true),
          sortOrder: p.SortOrder?.number ?? Number.MAX_SAFE_INTEGER });
      } catch { /* Invalid schedules are not published. */ }
    }
    cursor = response.has_more ? response.next_cursor || undefined : undefined;
  } while (cursor);
  return banners.sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
}
