import Image from "next/image";
import { icons } from "@/icons";
import Link from "next/link";

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const projects: any[] = data?.data;
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-6 rounded-xl border-main p-5"
          >
            {/* image box  */}
            <div className="mb-3 ">
              <Image
                width={300}
                height={65}
                alt={project.title}
                src={project.image_url}
                className="w-full rounded-xl group-hover:opacity-60"
              />
            </div>

            {/* text box  */}
            <div className="">
              <button className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm">
                {project.stack}
              </button>
              <h1 className="text-2xl text-slate-100 my-2">{project.title}</h1>
              <p className="text-sm text-justify">
                {project.description.slice(0, 100)}
              </p>
            </div>

            {/* links */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-4 justify-center mt-2">
                <Link
                  href={project.github_client}
                  target="_blank"
                  title="Frontend Code"
                  className="project-link"
                >
                  <icons.social.github size={24} className="" />
                </Link>
                <Link
                  href={project.github_server}
                  target="_blank"
                  title="Backend Code"
                  className="project-link"
                >
                  <icons.social.github size={24} />
                </Link>
                <Link
                  href={project.live_url}
                  target="_blank"
                  title="Live Link"
                  className="project-link"
                >
                  <icons.social.browser size={24} />
                </Link>
              </div>
              <Link href={`/projects/${project?._id}`}>
                <div className="text-sky-500 mt-2 button-main">
                  <h1>See More</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
