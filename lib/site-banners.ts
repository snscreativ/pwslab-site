

export type SiteBanner = {
  id: string; title: string; imageUrl: string; expiresAt: string;
  linkUrl: string; startsAt: number | null; endsAt: number | null; sortOrder: number;
};

// Date-only values cover the whole Japanese calendar day; end is exclusive.
export function bannerDate(value: string | undefined, end = false): number | null {
  if (!value) return null;
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const timestamp = Date.parse(dateOnly ? `${value}T00:00:00+09:00` : value);
  if (!Number.isFinite(timestamp)) throw new Error("Invalid banner date");
  return timestamp + (dateOnly && end ? 86400000 : 0);
}

export function safeImageUrl(value: string): boolean {
  return /^https?:\/\//i.test(value) || /^\/(?![\/\\])/.test(value);
}

export function isBannerActive(banner: SiteBanner, now: number) {
  return (banner.startsAt === null || now >= banner.startsAt) &&
    (banner.endsAt === null || now < banner.endsAt);
}

