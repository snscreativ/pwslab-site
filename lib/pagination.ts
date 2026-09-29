export const PAGE_SIZE = 9;

export function paginate<T>(items: T[], value?: string | string[]) {
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const parsed = typeof value === "string" && /^[1-9]\d*$/.test(value) ? Number(value) : 1;
  const currentPage = Math.min(Number.isSafeInteger(parsed) ? parsed : 1, Math.max(1, totalPages));
  return {
    currentPage,
    totalPages,
    items: items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
  };
}
