import SiteBanners from "@/components/SiteBanners";
import { getSiteBanners } from "@/lib/notion-banners";
export default async function SiteBannerArea() {
  // Banner outages must not prevent articles from rendering.
  const banners = await getSiteBanners().catch(() => []);
  return <SiteBanners initial={banners} initialTime={Date.now()} />;
}
