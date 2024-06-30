"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

const Navbar = ({ position }: { position: "top" | "bottom" }) => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-12">
      <div
        className={position == "top" ? "col-span-12 lg:col-span-5" : "hidden"}
      >
        <div className="pl-4 md:pl-6 lg:pl-8 pt-4 lg:pt-4 flex items-end">
          <h1 className="text-2xl lg:text-3xl font-semibold border-b-4 border-sky-500 text-slate-100 pb-2">
            {navLinks[pathname]}
          </h1>
        </div>
      </div>
      {/* nav items  */}
      <div
        className={
          position == "top" ? "hidden lg:block lg:col-span-7 cursor-pointer" : "col-span-12 cursor-pointer"
        }
      >
        <ul
          className={
            position == "top"
              ? "flex items-center justify-evenly p-4 rounded-tr-xl rounded-bl-xl border border-[#383838] border-t-0 border-r-0 z-10 bg-slate-900 text-white"
              : "flex items-center justify-evenly p-4 rounded-br-lg rounded-bl-lg z-10 bg-slate-900 text-[white]"
          }
        >
          {Object.keys(navLinks)?.map((link, index) => (
            <Link key={index} href={link}>
              <li
                className={link == pathname ? "text-sky-500 text-sm md:text-sm lg:text-md uppercase tracking-wider" : "text-inherit text-sm md:text-sm lg:text-md uppercase tracking-wider"}
              >
                {navLinks[link]}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
