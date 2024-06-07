"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const NavHeadline = () => {
  const pathname = usePathname();
  console.log(pathname);
const navLinks: Record<string, string> = {
    "/": "About Me",
    "/skills": "Skills",
    "/projects": "Projects",
    "/resume": "Resume",

};
// console.log(navLinks[pathname]);

  return <div className="pl-4 pt-4 flex items-end">
    <h1 className="text-3xl font-semibold border-b-4 border-sky-500">{navLinks[pathname]}</h1>
  </div>;
};

export default NavHeadline;
