import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Design Loader",
  description: "A simple Next.js app that loads designs from Claude Design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
