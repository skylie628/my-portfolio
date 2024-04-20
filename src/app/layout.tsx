//components
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khuong Dinh Portfolio",
  description: "A portfolio of Khuong Dinh",
  authors: [{ name: "khuongdinhvinh@gmail.com" }],
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
    title: "Khuong Dinh Portfolio",
    siteName: "Khuong Dinh Portfolio",
    description: "A portfolio of Khuong Dinh",
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
