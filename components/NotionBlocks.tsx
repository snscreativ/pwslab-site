import type { NotionBlock } from "@/lib/notion";

function RichText({ texts }: { texts: any[] }) {
  return texts.map((text, index) => {
    const content = text.plain_text || "";
    const annotations = text.annotations || {};
    let node: React.ReactNode = content;

    if (annotations.code) node = <code>{node}</code>;
    if (annotations.bold) node = <strong>{node}</strong>;
    if (annotations.italic) node = <em>{node}</em>;
    if (annotations.strikethrough) node = <s>{node}</s>;
    if (annotations.underline) node = <u>{node}</u>;

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

function getImageUrl(block: NotionBlock) {
  const image = block.image;
  if (!image) return "";
  if (image.type === "external") return image.external?.url || "";
  if (image.type === "file") return image.file?.url || "";
  return "";
}

function getCaption(block: NotionBlock) {
  return block.image?.caption || [];
}

export default function NotionBlocks({ blocks }: { blocks: NotionBlock[] }) {
  return (
    <div className="p-article__body">
      {blocks.map((block) => {
        const id = block.id;

        switch (block.type) {
          case "paragraph":
            return (
              <p key={id}>
                <RichText texts={block.paragraph.rich_text} />
              </p>
            );

          case "heading_1":
            return (
              <h2 key={id}>
                <RichText texts={block.heading_1.rich_text} />
              </h2>
            );

          case "heading_2":
            return (
              <h2 key={id}>
                <RichText texts={block.heading_2.rich_text} />
              </h2>
            );

          case "heading_3":
            return (
              <h3 key={id}>
                <RichText texts={block.heading_3.rich_text} />
              </h3>
            );

          case "bulleted_list_item":
            return (
              <ul key={id}>
                <li>
                  <RichText texts={block.bulleted_list_item.rich_text} />
                </li>
              </ul>
            );

          case "numbered_list_item":
            return (
              <ol key={id}>
                <li>
                  <RichText texts={block.numbered_list_item.rich_text} />
                </li>
              </ol>
            );

          case "quote":
            return (
              <blockquote key={id}>
                <RichText texts={block.quote.rich_text} />
              </blockquote>
            );

          case "callout":
            return (
              <div className="p-article__callout" key={id}>
                <RichText texts={block.callout.rich_text} />
              </div>
            );

          case "divider":
            return <hr key={id} />;

          case "image": {
            const imageUrl = getImageUrl(block);
            if (!imageUrl) return null;
            return (
              <figure key={id}>
                <img src={imageUrl} alt="" loading="lazy" />
                {getCaption(block).length > 0 && (
                  <figcaption>
                    <RichText texts={getCaption(block)} />
                  </figcaption>
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
