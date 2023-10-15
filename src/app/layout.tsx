import Appbar from "@/app/sections/Appbar";
import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { SocialBar } from "@/components/SocialBar";
import Footer from "@/app/sections/Footer";
import siteMetadata from "@/utils/siteMetaData";
import { Metadata } from "next";

// import { addStructuredData } from "@/components/StructuredData";
const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });
require("dotenv").config();

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.headerTitle,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  keywords: "turban coder portfolio blockchain fullstack developer engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData()}
          key="structured-data"
        /> */}

        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg+xml"
          sizes="480x480"
        ></link>
      </head>

      <body className={fira.className}>
        <Appbar />
        <SocialBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
