import { picture } from "@/assets";
import Navbar from "@/components/shared/Navbar/Navbar";
import ProfileToggle from "@/components/ui/homepage/ProfileToggle";
import SocialLinks from "@/components/ui/homepage/SocialLinks";
import { socialItems } from "@/constants";
import { TChildrenProps } from "@/types";
import Image from "next/image";

const MainLayoutCom = ({ children }: TChildrenProps) => {
  return (
    <div className="p-4 lg:p-8 text-gray-400 c-auto ">
      <div className="grid grid-cols-12 gap-6">
        {/* left box  */}
        <div className="hidden lg:block lg:col-span-3 bg-slate-900 rounded-lg p-8 border-main h-[calc(100vh-64px)] sticky top-12 z-50">
          {/* div for image and name */}
          <div className="flex justify-center items-center pt-8 rounded-xl border-main">
            <Image
            className="rounded-xl"
              width={120}
              height={120}
              src={picture}
              alt="M. T. H. Titumir"
            />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold text-[white] my-2">
              M. T. H. Titumir
            </h1>
            <div className="flex justify-center">
              <button className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm">
                Full Stack Developer
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
          <SocialLinks />
        </div>

        {/* right box  */}
        <div className="col-span-12 lg:col-span-9 bg-[#0A192F] rounded-lg lg:rounded-lg border-main h-[calc(100vh-32px)] lg:h-[calc(100vh-64px)] flex flex-col relative">
          {/* navbar  */}
          <ProfileToggle />
          <div className="flex-shrink-0">
            <Navbar position="top" />
          </div>
          <div className="flex-grow p-4 md:p-6 lg:p-8 overflow-auto ">
            {children}
          </div>
          <div className="sticky bottom-0 w-full block lg:hidden">
            <Navbar position="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutCom;
