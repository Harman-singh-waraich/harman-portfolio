import { BlogCard } from "@/components/BlogCard";
import { Blog } from "@/types";
import * as React from "react";
import getConfig from "@/hooks/useConfig";

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
  const { databases, databaseId, collectionId } = getConfig();
  const res = await databases.listDocuments(databaseId, collectionId);

  return res.documents as Blog[];
};
