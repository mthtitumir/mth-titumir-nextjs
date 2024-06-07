import Link from "next/link";
import NavHeadline from "./NavHeadline";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        <NavHeadline />
      </div>
      <div className="col-span-7">
        <ul className="flex items-center justify-evenly p-4 bg-gray-300 rounded-tr-2xl rounded-bl-2xl">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/skills">
            <li>Skills</li>
          </Link>
          <Link href="/projects">
            <li>Projects</li>
          </Link>
          <Link href="/resume">
            <li>Resume</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
