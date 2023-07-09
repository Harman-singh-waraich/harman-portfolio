import Appbar from "@/sections/Appbar";
import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { SocialBar } from "@/components/SocialBar";
import Footer from "@/sections/Footer";
import Head from "next/head";
const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Turban Coder",
  description: "Portfolio of Harmeet Singh",
  type: "website",
  url: "https://turbancoder.dev",
  robots: "index, follow",
  keywords: "turban coder portfolio blockchain fullstack developer engineer",
  sitename: "Turban Coder",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: "Turban Coder",
  description: "Portfolio of Harmeet Singh",
  author: [
    {
      "@type": "Person",
      name: "Harmeet Singh",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Turban Coder</title>
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className={fira.className}>
        <Appbar />
        <SocialBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
