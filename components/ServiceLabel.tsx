type ServiceLabelProps = {
  name: string;
  description: string;
  className?: string;
};

export default function ServiceLabel({
  name,
  description,
  className = "",
}: ServiceLabelProps) {
  return (
    <div className={`c-service-label ${className}`.trim()}>
      <h2 className="c-service-label__title">
        <span className="c-service-label__category">SERVICE</span>
        {name}
      </h2>
      <p className="c-service-label__description">{description}</p>
    </div>
  );
}
