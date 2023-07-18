import Appbar from "@/sections/Appbar";
import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { SocialBar } from "@/components/SocialBar";
import Footer from "@/sections/Footer";
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
      <head>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData()}
          key="structured-data"
        />
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
