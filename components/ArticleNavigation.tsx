import Link from "next/link";
import Button from "@/components/Button";
import { PAGE_SIZE } from "@/lib/pagination";

type ArticleNavigationProps = {
  items: { slug: string; title: string }[];
  currentSlug: string;
  basePath: string;
};

// itemsは一覧と同じ公開日の降順。Prevが新しい側、Nextが古い側。
export default function ArticleNavigation({
  items,
  currentSlug,
  basePath,
}: ArticleNavigationProps) {
  const index = items.findIndex((item) => item.slug === currentSlug);
  const previous = index > 0 ? items[index - 1] : undefined;
  const next = index >= 0 ? items[index + 1] : undefined;
  const listPage = index >= 0 ? Math.floor(index / PAGE_SIZE) + 1 : 1;
  const listHref = `${basePath}${listPage > 1 ? `?page=${listPage}` : ""}#article-list`;

  return (
    <nav className="c-article-navigation" aria-label="記事の移動">
      <div className="c-article-navigation__previous">
        {previous && (
          <Link
            href={`${basePath}/${previous.slug}`}
            className="c-article-navigation__link"
            aria-label={`前の記事：${previous.title}`}
          >
            <span className="c-article-navigation__arrow" aria-hidden="true">
              &lt;
            </span>{" "}
            Prev
          </Link>
        )}
      </div>
      <Button href={listHref}>一覧に戻る</Button>
      <div className="c-article-navigation__next">
        {next && (
          <Link
            href={`${basePath}/${next.slug}`}
            className="c-article-navigation__link"
            aria-label={`次の記事：${next.title}`}
          >
            Next{" "}
            <span className="c-article-navigation__arrow" aria-hidden="true">
              {" "}
              &gt;
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
