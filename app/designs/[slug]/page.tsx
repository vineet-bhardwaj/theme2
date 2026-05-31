import Link from "next/link";
import { notFound } from "next/navigation";
import { designs, getDesign } from "@/lib/designs";

// Only the registered designs are valid routes; any other slug 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const design = getDesign(params.slug);
  return { title: design ? `${design.title} · Design Loader` : "Design" };
}

export default function DesignViewer({
  params,
}: {
  params: { slug: string };
}) {
  const design = getDesign(params.slug);
  if (!design) notFound();

  return (
    <div className="viewer">
      <div className="viewer-bar">
        <div className="container">
          <div className="viewer-meta">
            <strong>{design.title}</strong>
            <span className="tag">{design.source}</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              className="btn ghost"
              href={design.file}
              target="_blank"
              rel="noreferrer"
            >
              Open raw ↗
            </a>
            <Link className="btn" href="/">
              ← All designs
            </Link>
          </div>
        </div>
      </div>
      <iframe className="viewer-frame" src={design.file} title={design.title} />
    </div>
  );
}
