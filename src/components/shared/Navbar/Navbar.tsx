import Link from "next/link";
import { navLinks } from "@/data/portfolio";

const Navbar = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`grid grid-cols-12`}>
      <div
        className={position == "top" ? "col-span-12 lg:col-span-5" : "hidden"}
      >
        <div className="pl-4 md:pl-6 lg:pl-8 pt-4 lg:pt-4 flex items-end">
          <h1 className="text-2xl lg:text-3xl font-semibold border-b-4 border-cyan-400 text-slate-100 pb-2">
            M. T. H. Titumir
          </h1>
        </div>
      </div>
      <div
        className={`${
          position == "top"
            ? "hidden lg:block lg:col-span-7 cursor-pointer"
            : "col-span-12 cursor-pointer"
        }`}
      >
        <ul
          className={`${
            position == "top"
              ? "flex items-center justify-evenly p-4 rounded-tr-xl rounded-bl-xl border border-slate-800 border-t-0 border-r-0 z-10 bg-slate-950/90 text-white"
              : "flex flex-wrap gap-3 items-center justify-between p-4 rounded-br-lg rounded-bl-lg z-10 bg-slate-950 text-white"
          }`}
        >
          {Object.keys(navLinks)?.map((link) => {
            return (
              <Link key={link} href={link}>
                <li className="text-sm uppercase tracking-wider text-slate-300 hover:text-cyan-200 md:text-sm lg:text-md">
                  {navLinks[link]}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
