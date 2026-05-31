import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theme Loader",
  description: "A simple Next.js app that loads designs from theme.",
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
