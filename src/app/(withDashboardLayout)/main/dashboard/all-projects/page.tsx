import Headline from "@/components/dashboard/Headline";

const AllProjects = async () => {
  const res = await fetch("http://localhost:1234/api/v1/projects");
  const data = await res.json();
  const projects: any[] = data?.data;
  return (
    <div>
      <Headline text="All Blogs" />
      <div>
        {projects?.map((project, index) => (
          <div key={index} className="flex gap-5 items-center">
            <h1>{index + 1} .</h1>
            <h1>{project.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
