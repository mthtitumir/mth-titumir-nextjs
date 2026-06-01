import { titumirPicture } from "@/assets";
import { profile, navLinks } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#06111f]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={titumirPicture}
            alt={profile.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-md border border-slate-800 object-cover"
            priority
          />
          <div>
            <p className="text-lg font-bold text-white group-hover:text-cyan-200">
              {profile.name}
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-cyan-300">
              Full Stack Developer
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {Object.entries(navLinks).map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:border-slate-700 hover:bg-slate-950 hover:text-cyan-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href={profile.resumeUrl}
            target="_blank"
            className="rounded-md bg-cyan-400 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-300"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
