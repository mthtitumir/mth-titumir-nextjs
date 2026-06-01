import { titumirPicture } from "@/assets";
import Navbar from "@/components/shared/Navbar/Navbar";
import ProfileToggle from "@/components/ui/homepage/ProfileToggle";
import SocialLinks from "@/components/ui/homepage/SocialLinks";
import { profile, socialItems } from "@/data/portfolio";
import { TChildrenProps } from "@/types";
import Image from "next/image";

const MainLayoutCom = ({ children }: TChildrenProps) => {
  return (
    <div className="min-h-screen bg-[#06111f] p-4 text-slate-300 lg:p-8">
      <div className="c-auto grid grid-cols-12 gap-6">
        <aside className="hidden h-[calc(100vh-64px)] min-h-0 overflow-y-auto rounded-lg border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-black/20 lg:sticky lg:top-8 lg:col-span-3 lg:flex lg:flex-col xl:p-6">
          <div className="flex justify-center pb-3 items-center rounded-xl">
            <div className="flex justify-center p-2 items-center bg-slate-800 rounded-xl ring-1 ring-cyan-400/20">
              <Image
                className="rounded-lg"
                width={108}
                height={108}
                src={titumirPicture}
                alt="M. T. H. Titumir"
              />
            </div>
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold text-[white] my-3">
              {profile.name}
            </h1>
            <div className="flex justify-center">
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-center text-sm text-cyan-100">
                {profile.role}
              </span>
            </div>
            <p className="mt-4 text-center text-sm leading-6 text-slate-400">
              {profile.tagline}
            </p>
          </div>
          <div className="h-px bg-slate-800 my-4"></div>
          <div className="flex flex-col gap-4">
            {socialItems?.map((item) => (
              <div key={item.name} className="flex gap-3 items-center">
                <div className="flex shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-3 text-cyan-300">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xs text-slate-500">{item.name}</h1>
                  <h1 className="truncate text-sm text-slate-300">{item.data}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5">
            <SocialLinks />
          </div>
        </aside>

        <main className="col-span-12 flex h-[calc(100vh-32px)] flex-col rounded-lg border border-slate-800 bg-[#081726] lg:col-span-9 lg:h-[calc(100vh-64px)]">
          <ProfileToggle />
          <div className="flex-shrink-0">
            <Navbar position="top" />
          </div>
          <div className="flex-grow overflow-auto p-4 md:p-6 lg:p-8">
            {children}
          </div>
          <div className="sticky bottom-0 w-full block lg:hidden">
            <Navbar position="bottom" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayoutCom;
