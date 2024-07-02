import Headline from "@/components/dashboard/Headline";

const AllBlogsPage = async () => {
  const res = await fetch("http://localhost:1234/api/v1/blogs");
  const data = await res.json();
  const blogs: any[] = data?.data;
  return (
    <div>
      <Headline text="All Blogs" />
      <div>
        {
          blogs?.map((blog, index) => (
            <div key={index} className="flex gap-5 items-center">
              <h1>{index+1} .</h1>
              <h1>{blog.title}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllBlogsPage