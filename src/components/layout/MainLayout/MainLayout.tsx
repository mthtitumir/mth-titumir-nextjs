import Navbar from "@/components/shared/Navbar/Navbar";
import { socialItems } from "@/constants";
import { icons } from "@/icons";
import { TChildrenProps } from "@/types";
import Image from "next/image";

const MainLayout = ({ children }: TChildrenProps) => {
  return (
    <div className="min-h-screen p-16 text-gray-400 c-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* left box  */}
        <div className="col-span-3 bg-slate-900 rounded-2xl px-8 border-main">
          {/* div for image and name */}
          <div></div>
          <div className="flex justify-center items-center my-8 pt-8 bg-slate-700 rounded-2xl">
            <Image
              width={120}
              height={120}
              src="https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
              alt="M. T. H. Titumir"
            />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold text-[white]">
              M. T. H. Titumir
            </h1>
            <h1 className="text-center">Web Developer</h1>
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
            <icons.social.github size={18} />
            <icons.social.linkedIn size={18} />
            <icons.social.facebook size={18} />
            <icons.social.instagram size={18} />
          </div>
        </div>

        {/* right box  */}
        <div className="col-span-9 bg-slate-900 rounded-2xl border-main">
          {/* navbar  */}
          <Navbar />
          <div className="h-full w-full p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
