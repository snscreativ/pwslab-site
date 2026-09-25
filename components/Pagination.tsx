import Link from "next/link";
import "@/styles/components.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const href = (page: number) =>
    `${basePath}${page === 1 ? "" : `?page=${page}`}#article-list`;

  return (
    <nav className="c-pagination" aria-label="一覧のページ切り替え">
      <div className="c-pagination__previous">
        {currentPage > 1 && (
          <Link
            href={href(currentPage - 1)}
            className="c-pagination__direction"
            aria-label="前のページ"
          >
            <span aria-hidden="true">&lt;</span> Prev
          </Link>
        )}
      </div>
      <ol className="c-pagination__numbers">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span
                className="c-pagination__number c-pagination__number--current"
                aria-current="page"
                aria-label={`${page}ページ目、現在のページ`}
              >
                {page}
              </span>
            ) : (
              <Link
                href={href(page)}
                className="c-pagination__number"
                aria-label={`${page}ページ目へ`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <div className="c-pagination__next">
        {currentPage < totalPages && (
          <Link
            href={href(currentPage + 1)}
            className="c-pagination__direction"
            aria-label="次のページ"
          >
            Next <span aria-hidden="true">&gt;</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
