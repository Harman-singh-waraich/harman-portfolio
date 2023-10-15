import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="md:w-80 border border-white flex flex-col justify-start items-start">
      <div className="w-full min-h-[160px] relative">
        <Image
          className="object-contain"
          src={`/images/${blog.thumbnail}.png`}
          fill={true}
          alt="thumbnail"
        />
      </div>

      {/* title */}
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className="text-white text-lg md:text-2xl px-2 py-2">
        {" "}
        {blog.title}
      </div>

      <div className="text-gray-400 text-sm md:text-base px-2 py-1">
        {blog.subtitle}
      </div>

      <div className=" flex flex-row items-center self-baseline py-2">
        <Link href={`/blogs/${blog.slug}`}>
          <button className="border border-pink-400 p-1 text-white hover:scale-105  hover:bg-pink-400 hover:bg-opacity-10 transition-colors m-2">
            {"Read more <~>"}
          </button>
        </Link>
      </div>
    </div>
  );
};
