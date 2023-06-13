import { About } from "@/pages/about-me/about";
import { Contact } from "@/pages/contact/contact";
import { Landing } from "@/pages/landing/landing";
import { Skills } from "@/pages/skills/skills";
import { Projects } from "@/pages/works/projects";
import Image from "next/image";
import { Footer } from "@/pages/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 md:px-24 lg:px-24">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
