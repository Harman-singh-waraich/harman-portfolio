import About from "./sections/about-me/about";
import Blogs from "./sections/blogs/blogs";
import Contact from "./sections/contact/contact";
import Landing from "./sections/landing/landing";
import Skills from "./sections/skills/skills";
import Projects from "./sections/works/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-16 lg:px-24">
      <Landing />
      <About />
      <Skills />
      <Projects />
      {/* @ts-expect-error Async Server Component */}
      <Blogs />
      <Contact />
    </main>
  );
}
