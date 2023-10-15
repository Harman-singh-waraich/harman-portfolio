import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import siteMetadata from "@/utils/siteMetaData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const blog: Blog = await getData(params.slug);
  return {
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
      url: siteMetadata.siteUrl + "blogs/" + params.slug,
      siteName: siteMetadata.title,
      pubishedTime: blog.createdOn,
      images: [siteMetadata.siteUrl + "images/" + blog.thumbnail + ".png"],
      authors: [siteMetadata.author],
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.subtitle,
        images: [siteMetadata.siteUrl + "images/" + blog.thumbnail + ".png"],
      },
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug } = params;

  const blogContent: Blog = await getData(slug);

  return (
    <div className="min-h-screen py-20 md:py-28 min-w-full px-4 md:px-16 lg:px-24 ">
      <Link href={"/#blogs"}>
        <div className="flex flex-row justify-start items-center cursor-pointer pb-5">
          <div className=" hover:-translate-x-1 ">
            <Image
              src={"/images/back-arrow.svg"}
              alt="back-arrow"
              width={25}
              height={20}
            />
          </div>
          <div className="text-gray-400 text-sm lg:text-xl px-2 hover:translate-x-1">
            Back
          </div>
        </div>
      </Link>

      <div className="text-xl md:text-3xl font-bold text-pink-400">
        {blogContent?.title}
      </div>

      {/* about author */}
      <div className="flex flex-row items-end py-5">
        <div className=" rounded-full overflow-hidden ">
          <Image src={"/images/favicon.png"} alt="TC" width={50} height={50} />
        </div>
        <div className=" flex flex-col justify-start items-start pb-1">
          <div className="text-gray-400 text-xs px-2">
            Harmeet Singh | Fullstack Blockchain Developer
          </div>
          <div className="text-gray-400 text-xs  px-2">
            {blogContent.createdOn} | 4 min read
          </div>
        </div>
      </div>
      {/* <div className=" w-96 h-96  box-border">
        <Image
          src={blogContent.image}
          alt="Thubmnail"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div> */}
      {/* content */}
      <Markdown className="prose prose-sm  prose-invert md:prose-base min-w-full">
        {blogContent.content}
      </Markdown>
    </div>
  );
}

const getData = async (slug: string) => {
  const fileContent = fs.readFileSync(`src/assets/blogs/${slug}.md`, "utf8");
  const matterContent = matter(fileContent);
  return {
    title: matterContent.data.title,
    subtitle: matterContent.data.subtitle,
    createdOn: matterContent.data.date,
    content: matterContent.content,
    thumbnail: slug,
    slug: slug,
  } as Blog;
};

export async function generateStaticParams() {
  const folder = "src/assets/blogs";
  const files = fs.readdirSync(folder).filter((file) => file.endsWith(".md"));

  return files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}
