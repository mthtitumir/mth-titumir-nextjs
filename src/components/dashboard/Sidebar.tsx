"use client";
import Link from "next/link";
import { icons } from "@/icons";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const sidebarData = [
    {
      icon: icons.dashboard.blogs,
      name: "All Blogs",
      path: "/main/dashboard/all-blogs",
    },
    {
      icon: icons.dashboard.projects,
      name: "All Projects",
      path: "/main/dashboard/all-projects",
    },
    {
      icon: icons.dashboard.newBlog,
      name: "New Blog",
      path: "/main/dashboard/add-new-blog",
    },
    {
      icon: icons.dashboard.newProject,
      name: "New Project",
      path: "/main/dashboard/add-new-project",
    },
    {
      icon: icons.dashboard.home,
      name: "Go Home",
      path: "/",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="hidden lg:block lg:col-span-2 bg-[#0A192F] rounded-lg p-8 border-main h-[calc(100vh-64px)] sticky top-12 z-50">
      <div>
        <h1 className="text-center text-xl text-white ">M. T. H. TITUMIR</h1>
      </div>
      <div className="h-px bg-gray-500 mt-1 mb-4"></div>
      <div className="flex flex-col gap-3">
        {sidebarData?.map((sd, index) => (
          <Link key={index} href={sd.path}>
            <div
              key={index}
              className={`${
                sd.path === pathname ? "text-sky-500 border border-sky-500" : "text-inherit border-main"
              } text-sm md:text-sm lg:text-md uppercase tracking-wider flex items-center gap-2 rounded-sm px-3 py-1`}
            >
              <sd.icon size={20} />
              <h1>{sd.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
