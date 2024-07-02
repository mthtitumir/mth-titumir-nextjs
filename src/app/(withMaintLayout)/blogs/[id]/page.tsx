import { blogDefBanner } from "@/assets";
import Image from "next/image";
import HtmlParser from 'react-html-parser';

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${params?.id}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const blog: any = data?.data;
  return (
    <div>
      <h1 className="text-2xl text-gray-200">{blog.title}</h1>
      <p>by M. T. H. Titumir</p>
      <Image className="rounded my-3" height={500} width={300} alt={blog.shortDesc} src={blog.banner || blogDefBanner} />
      <h1 className="italic my-3">{blog.shortDesc}</h1>
      <h1 className="my-3"><span className="border-b text-lg font-semibold">Summary:</span> {blog.longDesc}</h1>
      <div>{HtmlParser(blog.content)}</div>
    </div>
  );
};

export default SingleBlogPage;
