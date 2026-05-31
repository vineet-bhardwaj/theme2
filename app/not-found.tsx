import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <div className="empty">
        <h1>Design not found</h1>
        <p>That design isn&apos;t registered.</p>
        <p style={{ marginTop: 24 }}>
          <Link className="btn" href="/">
            ← Back to all designs
          </Link>
        </p>
      </div>
    </main>
  );
}
