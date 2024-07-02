import { blogDefBanner } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const blogs: any[] = data?.data;
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-6 rounded-xl border-main p-5"
          >
            {/* image box  */}
            <div className="mb-3">
              <Image
                width={300}
                height={65}
                alt={blog.title}
                src={blog.banner || blogDefBanner}
                className="w-full rounded-xl group-hover:opacity-60"
              />
            </div>

            {/* text box  */}
            <div className="">
              <button className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm">
                {/* {blog.stack} */} tags will be here
              </button>
              <h1 className="text-2xl text-slate-100 my-2">{blog.title}</h1>
              <p className="text-sm">{blog.shortDesc}</p>
            </div>

            {/* links */}
            {/* <div> */}
            <Link href={`/blogs/${blog?._id}`}>
              <div className="text-sky-700 mt-2">
                <h1>Read More ➡</h1>
              </div>
            </Link>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
