import { getKnowledgeArticleBySlug, getNewsBySlug, getNotionBlocks } from "@/lib/notion";
import { getSiteBanners } from "@/lib/notion-banners";
import { isBannerActive, safeImageUrl } from "@/lib/site-banners";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const headers = { "Cache-Control": "no-store" };
  try {
    let url = "";
    let expiresAt = "";
    if (q.get("kind") === "banner") {
      const banner = (await getSiteBanners()).find(b => b.id === q.get("id") && isBannerActive(b, Date.now()));
      url = banner?.imageUrl || "";
      expiresAt = banner?.expiresAt || "";
    } else {
      // Resolve a published page by slug first. Never expose arbitrary private block IDs.
      const kind = q.get("kind");
      const slug = q.get("slug") || "";
      const article = kind === "knowledge" ? await getKnowledgeArticleBySlug(slug) : null;
      const page = article || (kind === "news" ? await getNewsBySlug(slug) : null);
      if (page) {
        if (q.get("block")) {
          const block = (await getNotionBlocks(page.id)).find(b => b.id === q.get("block") && b.type === "image");
          url = block?.image?.file?.url || block?.image?.external?.url || "";
          expiresAt = block?.image?.file?.expiry_time || "";
        } else if (article) {
          url = article.eyecatchUrl;
          expiresAt = article.eyecatchExpiresAt;
        }
      }
    }
    if (!url || !safeImageUrl(url)) return Response.json({ error: "Not found" }, { status: 404, headers });
    return Response.json({ url, expiresAt }, { headers });
  } catch {
    return Response.json({ error: "Unavailable" }, { status: 503, headers });
  }
}
