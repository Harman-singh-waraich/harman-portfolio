import Appbar from "@/sections/Appbar";
import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { SocialBar } from "@/components/SocialBar";
import Footer from "@/sections/Footer";
import Head from "next/head";
import Script from "next/script";
import { addStructuredData } from "@/components/StructuredData";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Turban Coder</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData()}
          key="structured-data"
        />
      </Head>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addStructuredData()}
        key="structured-data"
      />
      <body className={fira.className}>
        <Appbar />
        <SocialBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
