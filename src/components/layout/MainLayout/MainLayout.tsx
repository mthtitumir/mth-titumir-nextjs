import Navbar from "@/components/shared/Navbar/Navbar";
import { socialItems } from "@/constants";
import { icons } from "@/icons";
import { TChildrenProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const MainLayout = ({ children }: TChildrenProps) => {
  return (
    <div className=" p-12 text-gray-400 c-auto ">
      <div className="grid grid-cols-12 gap-6">
        {/* left box  */}
        <div className="col-span-3 bg-slate-900 rounded-2xl px-8 border-main h-[calc(100vh-96px)] sticky top-12 z-50">
          {/* div for image and name */}
          <div></div>
          <div className="flex justify-center items-center mt-8 pt-8 bg-slate-700 rounded-2xl">
            <Image
              width={120}
              height={120}
              src="https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
              alt="M. T. H. Titumir"
            />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold text-[white] my-2">
              M. T. H. Titumir
            </h1>
            <div className="flex justify-center">
              <button className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm">
                Web Developer
              </button>
            </div>
            {/* <h1 className="text-center"></h1> */}
          </div>
          <div className="h-px bg-gray-500 my-3"></div>
          {/* contact  */}
          <div className="flex flex-col gap-5 my-5">
            {socialItems?.map((item) => (
              <div key={item.name} className="flex gap-3 items-center">
                <div className="flex items-center justify-center rounded-lg p-3 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 text-sky-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <h1 className="text-xs">{item.name}</h1>
                  <h1 className="text-sm">{item.data}</h1>
                </div>
              </div>
            ))}
          </div>
          {/* social icons  */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <Link href="/mthtitumir">
              <icons.social.github size={20} />
            </Link>
            <icons.social.linkedIn size={20} />
            <icons.social.facebook size={20} />
            <icons.social.instagram size={20} />
          </div>
        </div>

        {/* right box  */}
        <div className="col-span-9 bg-slate-900 rounded-2xl border-main h-[calc(100vh-96px)] flex flex-col">
          {/* navbar  */}
          <div className="flex-shrink-0">
            <Navbar />
          </div>
          <div className="flex-grow p-8 overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
