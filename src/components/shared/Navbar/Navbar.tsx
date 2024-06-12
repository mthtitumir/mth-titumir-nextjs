"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        <div className="pl-8 pt-4 flex items-end">
          <h1 className="text-3xl font-semibold border-b-4 border-sky-500 text-slate-100 pb-2">
            {navLinks[pathname]}
          </h1>
        </div>
      </div>
      <div className="col-span-7">
        <ul className="flex items-center justify-evenly p-4 rounded-tr-2xl rounded-bl-2xl border-main z-10 bg-slate-700 text-[white]">
          {Object.keys(navLinks)?.map((link, index) => (
            <Link key={index} href={link}>
              <li className={link == pathname ? "text-sky-500" : "text-inherit"}>{navLinks[link]}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
