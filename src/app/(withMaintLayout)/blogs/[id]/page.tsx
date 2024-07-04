import { blogDefBanner } from "@/assets";
import { TBlog } from "@/types";
import Head from "next/head";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import HtmlParser from "react-html-parser";

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  // const router = useRouter();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${params?.id}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const blog: TBlog = data?.data;
  return (
    <div className="container mx-auto p-4 border-main rounded-lg">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.shortDesc} />
      </Head>
      <div className="shadow-md rounded-lg p-4">
        <div className="relative w-full h-64">
          <Image
            src={blog.banner || blogDefBanner}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-gray-200">{blog.title}</h1>
        <p className="text-gray-300 mt-2">{blog.shortDesc}</p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Content</h2>
          <p className="text-gray-300 mt-2 whitespace-pre-wrap">
            {blog.content}
          </p>
        </div>
        {blog.longDesc && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-200">
              Long Description
            </h2>
            <p className="text-gray-300 mt-2 whitespace-pre-wrap">
              {blog.longDesc}
            </p>
          </div>
        )}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Tags</h2>
          <div className="flex flex-wrap mt-2">
            {blog?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-sky-700 text-white px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
