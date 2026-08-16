import type { NotionBlock } from "@/lib/notion";
import ProfileSaito from "@/components/ProfileSaito";
import ProfileMatsui from "@/components/ProfileMatsui";

/* =========================
  RichText
========================= */

function RichText({ texts }: { texts: any[] }) {
  return texts.map((text, index) => {
    const content = text.plain_text || "";
    const annotations = text.annotations || {};
    const color = annotations.color || "default";

    let node: React.ReactNode = content;

    if (annotations.code) node = <code>{node}</code>;
    if (annotations.bold) node = <strong>{node}</strong>;
    if (annotations.italic) node = <em>{node}</em>;
    if (annotations.strikethrough) node = <s>{node}</s>;
    if (annotations.underline) node = <u>{node}</u>;

    const classNames: string[] = [];

    if (color !== "default") {
      classNames.push(`is-${color}`);
    }

    if (classNames.length > 0) {
      node = <span className={classNames.join(" ")}>{node}</span>;
    }

    if (text.href) {
      node = (
        <a href={text.href} target="_blank" rel="noopener noreferrer">
          {node}
        </a>
      );
    }

    return <span key={`${content}-${index}`}>{node}</span>;
  });
}

/* =========================
  Image
========================= */

function getImageUrl(block: NotionBlock) {
  const image = block.image;

  if (!image) return "";

  if (image.type === "external") {
    return image.external?.url || "";
  }

  if (image.type === "file") {
    return image.file?.url || "";
  }

  return "";
}

function getCaption(block: NotionBlock) {
  return block.image?.caption || [];
}

/*
  Notion画像キャプションから
  SIZE / ALIGN / LINK を取得
*/

function getImageOptions(block: NotionBlock) {
  const captionTexts = getCaption(block);

  const caption = captionTexts
    .map((text: any) => text.plain_text || "")
    .join("")
    .trim();

  const sizeMatch = caption.match(/SIZE=(small|medium|large)/i);

  const alignMatch = caption.match(/ALIGN=(left|center|right)/i);

  const linkMatch = caption.match(/LINK=(https?:\/\/[^\s|]+)/i);

  return {
    size: sizeMatch ? sizeMatch[1].toLowerCase() : "large",

    align: alignMatch ? alignMatch[1].toLowerCase() : "center",

    link: linkMatch ? linkMatch[1] : "",
  };
}

/* =========================
  Callout helper
========================= */

function getPlainText(texts: any[] = []) {
  return texts
    .map((text) => text.plain_text || "")
    .join("")
    .trim();
}

function removeMarker(texts: any[] = [], marker: string) {
  let markerRemoved = false;

  return texts.map((text) => {
    if (markerRemoved) return text;

    const plainText = text.plain_text || "";

    if (!plainText.includes(marker)) {
      return text;
    }

    markerRemoved = true;

    const newText = plainText.replace(marker, "").replace(/^\s+/, "");

    return {
      ...text,

      plain_text: newText,

      text: text.text
        ? {
            ...text.text,

            content: (text.text.content || "")
              .replace(marker, "")
              .replace(/^\s+/, ""),
          }
        : text.text,
    };
  });
}

/* =========================
  NotionBlocks
========================= */

export default function NotionBlocks({ blocks }: { blocks: NotionBlock[] }) {
  return (
    <div className="c-article-body">
      {blocks.map((block) => {
        const id = block.id;

        switch (block.type) {
          /* Paragraph */

          case "paragraph":
            return (
              <p key={id}>
                <RichText texts={block.paragraph.rich_text} />
              </p>
            );

          /* Heading 1 */

          case "heading_1":
            return (
              <h2 key={id}>
                <RichText texts={block.heading_1.rich_text} />
              </h2>
            );

          /* Heading 2 */

          case "heading_2":
            return (
              <h2 key={id}>
                <RichText texts={block.heading_2.rich_text} />
              </h2>
            );

          /* Heading 3 */

          case "heading_3":
            return (
              <h3 key={id}>
                <RichText texts={block.heading_3.rich_text} />
              </h3>
            );

          /* Bullet */

          case "bulleted_list_item":
            return (
              <ul key={id}>
                <li>
                  <RichText texts={block.bulleted_list_item.rich_text} />
                </li>
              </ul>
            );

          /* Number */

          case "numbered_list_item":
            return (
              <ol key={id}>
                <li>
                  <RichText texts={block.numbered_list_item.rich_text} />
                </li>
              </ol>
            );

          /* Quote */

          case "quote":
            return (
              <blockquote key={id}>
                <RichText texts={block.quote.rich_text} />
              </blockquote>
            );

          /* Callout */

          case "callout": {
            const texts = block.callout.rich_text || [];

            const plainText = getPlainText(texts);

            /* 齊藤プロフィール */

            if (plainText.startsWith("PROFILE_SAITO")) {
              return <ProfileSaito key={id} />;
            }

            /* 松井先生プロフィール */

            if (plainText.startsWith("PROFILE_MATSUI")) {
              return <ProfileMatsui key={id} />;
            }

            /* 齊藤コメント */

            if (plainText.startsWith("COMMENT_SAITO")) {
              const displayTexts = removeMarker(texts, "COMMENT_SAITO");

              return (
                <aside
                  className="p-article__comment"
                  aria-labelledby={`saito-comment-title-${id}`}
                  key={id}
                >
                  <p className="p-article__comment-label">COMMENT</p>

                  <div className="p-article__comment-head">
                    <h2
                      id={`saito-comment-title-${id}`}
                      className="p-article__comment-title"
                    >
                      齊藤コメント
                    </h2>
                  </div>

                  <div className="p-article__comment-text">
                    <RichText texts={displayTexts} />
                  </div>

                  <div className="p-article__comment-profile">
                    <ProfileSaito />
                  </div>
                </aside>
              );
            }

            /* 通常Callout */

            return (
              <div className="c-article-callout" key={id}>
                <RichText texts={texts} />
              </div>
            );
          }

          /* Divider */

          case "divider":
            return <hr key={id} />;

          /* Image */

          case "image": {
            const imageUrl = getImageUrl(block);

            if (!imageUrl) {
              return null;
            }

            const { size, align, link } = getImageOptions(block);

            const image = <img src={imageUrl} alt="" loading="lazy" />;

            return (
              <figure
                key={id}
                className={[
                  "c-article-image",
                  `is-${size}`,
                  `is-${align}`,
                ].join(" ")}
              >
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-article-image-link"
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
