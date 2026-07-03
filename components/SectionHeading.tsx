type SectionHeadingProps = {
  label: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
};

export default function SectionHeading({ label, title, lead, as = "h2", align = "left" }: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className={`c-section-heading ${align === "center" ? "c-section-heading--center" : ""}`}>
      <p className="c-label">{label}</p>
      <HeadingTag className="c-heading-primary">{title}</HeadingTag>
      {lead && <p className="c-section-heading__lead">{lead}</p>}
    </div>
  );
}
