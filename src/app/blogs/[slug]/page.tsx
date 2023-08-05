import getConfig from "@/hooks/useConfig";
import { Blog } from "@/types";
import { Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";

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
            {`${new Date(blogContent.$createdAt).toLocaleDateString()}`} | 4 min
            read
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
      <div
        className="prose min-w-full bg-[#282c34]"
        dangerouslySetInnerHTML={{ __html: blogContent.content }}
      ></div>
    </div>
  );
}

const getData = async (slug: string) => {
  const { databases, databaseId, collectionId } = getConfig();
  const res = await databases.listDocuments(databaseId, collectionId, [
    Query.equal("slug", slug),
  ]);

  return res.documents[0] as Blog;
};

export async function generateStaticParams() {
  const { databases, databaseId, collectionId } = getConfig();
  const posts = await databases.listDocuments(databaseId, collectionId);

  return posts.documents.map((post) => ({
    slug: post.slug,
  }));
}
