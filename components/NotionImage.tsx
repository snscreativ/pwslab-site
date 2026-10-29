"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; alt: string; refreshUrl?: string; expiresAt?: string; loading?: "lazy" | "eager" };

// Signed URLs may change while the underlying Notion file stays the same.
function imageIdentity(src: string, expiresAt: string) {
  if (!expiresAt) return src;
  try { const url = new URL(src); return url.origin + url.pathname; }
  catch { return src; }
}

export default function NotionImage({ src, alt, refreshUrl, expiresAt = "", loading }: Props) {
  const identity = imageIdentity(src, expiresAt);
  return <ImageResource key={identity} src={src} alt={alt} refreshUrl={refreshUrl} loading={loading} />;
}

function ImageResource({ src, alt, refreshUrl, loading }: Props) {
  // Keep an already displayed image even when Notion renews its URL.
  const [url, setUrl] = useState(src);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const retried = useRef(false);
  const pending = useRef(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => controller.current?.abort(), []);

  const recover = async () => {
    if (pending.current) return;
    if (!refreshUrl || retried.current) { setFailed(true); return; }
    retried.current = true;
    pending.current = true;
    const request = new AbortController();
    controller.current = request;
    try {
      const response = await fetch(refreshUrl, { cache: "no-store", signal: request.signal });
      if (!response.ok) throw new Error("Image refresh failed");
      const next = await response.json();
      if (!next.url) throw new Error("No image");
      if (!request.signal.aborted) {
        setUrl(next.url);
        setAttempt(1);
      }
    } catch {
      if (!request.signal.aborted) setFailed(true);
    } finally { pending.current = false; }
  };

  if (failed) return <span role="img" aria-label={alt || "画像を読み込めませんでした"}>画像を読み込めませんでした</span>;
  return <img key={attempt} src={url} alt={alt} loading={loading} onError={recover} />;
}
