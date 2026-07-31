export function PageHero({ eyebrow, title, highlight, description, image }: { eyebrow: string; title: string; highlight: string; description: string; image?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}<br /><em>{highlight}</em></h1>
        <p>{description}</p>
      </div>
      {image ? <img src={image} alt="" /> : <div className="page-hero-mark" aria-hidden="true">W</div>}
    </section>
  );
}
