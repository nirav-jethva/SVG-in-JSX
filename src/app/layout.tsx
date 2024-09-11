import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG in JSX",
  description: "SVG in JSX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <code>
          <ol>
            {[
              { link: "/1-inline", label: "Inline SVG" },
              { link: "/2-reusable", label: "Reusable Component" },
              { link: "/3-with-img", label: 'w/ <img /> tag' },
              { link: "/4-sprite", label: "w/ SVG sprite" },
            ].map(({ link, label }) => (
              <li key={link}>
                <Link prefetch={false} href={link}>{label}</Link>
              </li>
            ))}
          </ol>
        </code>
        {children}
      </body>
    </html>
  );
}
