import { getSiteBanners } from "@/lib/notion-banners";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    return Response.json(await getSiteBanners(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
