//components
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.SITE_DESCRIPTION,
  authors: [{ name: process.env.AUTHOR }],
  keywords: [
    "IT Blog",
    "Frontend",
    "React",
    "Khuong Dinh",
    "Wilson",
    "Nextjs",
    "Javascript",
  ],
  openGraph: {
    title: process.env.TITLE,
    siteName: process.env.SITENAME,
    description: process.env.SITE_DESCRIPTION,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
