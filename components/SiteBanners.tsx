"use client";
import { useEffect, useState } from "react";
import NotionImage from "@/components/NotionImage";
import { isBannerActive, type SiteBanner } from "@/lib/site-banners";
import "@/styles/site-banners.css";

export default function SiteBanners({ initial, initialTime }: { initial: SiteBanner[]; initialTime: number }) {
  const [banners, setBanners] = useState(initial);
  const [now, setNow] = useState(initialTime);
  useEffect(() => {
    const controller = new AbortController();
    let pending = false;
    let lastChecked = Date.now();
    const update = async () => {
      setNow(Date.now());
      if (document.visibilityState !== "visible" || pending || Date.now() - lastChecked < 60000) return;
      lastChecked = Date.now();
      pending = true;
      try {
        const response = await fetch("/api/site-banners", { cache: "no-store", signal: controller.signal });
        if (response.ok) setBanners(await response.json());
      } catch { /* Keep known schedules during temporary network failures. */ }
      finally { pending = false; }
    };
    const poll = window.setInterval(update, 60000);
    document.addEventListener("visibilitychange", update);
    return () => { controller.abort(); clearInterval(poll); document.removeEventListener("visibilitychange", update); };
  }, []);
  useEffect(() => {
    const boundary = banners.flatMap(b => [b.startsAt, b.endsAt]).filter((t): t is number => t !== null && t > now).sort((a,b) => a-b)[0];
    if (boundary === undefined) return;
    const timer = window.setTimeout(() => setNow(Date.now()), Math.min(2147483647, Math.max(0, boundary - Date.now())));
    return () => clearTimeout(timer);
  }, [banners, now]);
  const visible = banners.filter(b => isBannerActive(b, now));
  if (!visible.length) return null;
  return <div className="c-site-banners">{visible.map(b => <a key={b.id} href={b.linkUrl}>
    <NotionImage src={b.imageUrl} alt={b.title} expiresAt={b.expiresAt} loading="lazy"
      refreshUrl={`/api/notion-image?kind=banner&id=${encodeURIComponent(b.id)}`} />
  </a>)}</div>;
}
