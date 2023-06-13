import Appbar from "@/pages/Appbar";
import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { SocialBar } from "@/components/SocialBar";
import { Footer } from "@/pages/Footer";
const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Turban Coder",
  description: "Portfolio of Harmeet Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Appbar />
        <SocialBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
