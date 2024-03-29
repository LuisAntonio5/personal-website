import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons are being rendered before the CSS is loaded:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luís António",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
