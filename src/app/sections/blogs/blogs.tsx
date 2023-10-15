import { BlogCard } from "@/components/BlogCard";
import { Blog } from "@/types";
import * as React from "react";
import fs from "fs";
import matter from "gray-matter";

export default async function Blogs() {
  const blogs = await getData();

  return (
    <div id="blogs" className="min-h-fit py-28 min-w-full">
      <div className="flex  flex-col relative min">
        <div>
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-xl md:text-3xl font-bold text-white">
            blogs
          </span>
        </div>
        <div className="text-sm md:text-base text-white py-3">
          {"What i've published?"}
        </div>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog, index: number) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const getData = async () => {
  const folder = "src/assets/blogs";
  const files = fs.readdirSync(folder);
  const posts = files.filter((file) => file.endsWith(".md"));

  const blogs = posts.map((fileName) => {
    const fileContent = fs.readFileSync(`src/assets/blogs/${fileName}`, "utf8");
    const matterContent = matter(fileContent);
    return {
      title: matterContent.data.title,
      subtitle: matterContent.data.subtitle,
      createdOn: matterContent.data.date,
      content: matterContent.data.content,
      thumbnail: fileName.replace(".md", ""),
      slug: fileName.replace(".md", ""),
    } as Blog;
  });
  return blogs as Blog[];
};
