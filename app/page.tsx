import Link from "next/link";
import { designs } from "@/lib/designs";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="brand">
            Theme <span>Loader</span>
          </div>
          <div className="tag">Next.js · App Router</div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Designs from theme</h1>
          <p>
            Each card below is a self-contained design loaded into this app.
            Open one to view it full-screen. The original HTML, styles, and
            images render with full fidelity.
          </p>
        </section>

        <h2 className="section-title">Available designs</h2>

        {designs.length === 0 ? (
          <div className="empty">No designs registered yet.</div>
        ) : (
          <div className="grid">
            {designs.map((d) => (
              <article className="card" key={d.slug}>
                <Link
                  href={`/designs/${d.slug}`}
                  className="card-preview"
                  aria-label={`Open ${d.title}`}
                >
                  <iframe
                    src={d.file}
                    title={`${d.title} preview`}
                    tabIndex={-1}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </Link>
                <div className="card-body">
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <div className="card-foot">
                    <span className="pill">{d.source}</span>
                    <Link className="btn" href={`/designs/${d.slug}`}>
                      Open design →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
