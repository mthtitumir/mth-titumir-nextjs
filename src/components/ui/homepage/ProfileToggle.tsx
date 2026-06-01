"use client";

import { profile, socialItems } from "@/data/portfolio";
import Image from "next/image";
import { icons } from "@/icons";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import { titumirPicture } from "@/assets";

const ProfileToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-5 items-center rounded-lg p-4 border-b border-slate-800 lg:hidden relative">
        <div className="flex justify-center p-1 items-center bg-slate-800 rounded-xl">
          <Image
            width={60}
            height={60}
            src={titumirPicture}
            alt="M. T. H. Titumir"
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white my-2">
            {profile.name}
          </h1>
          <div className="flex justify-center">
            <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-center text-sm text-cyan-100">
              {profile.role}
            </span>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-tr-md rounded-bl-md bg-slate-950 px-3 py-1 text-center text-sm text-white hover:text-cyan-300 top-0 right-0 absolute"
          aria-label="Toggle profile details"
        >
          {open ? <icons.utils.arrowUp size={20} /> : <icons.utils.arrowDown size={20} />}
        </button>
      </div>
      <div
        className={`lg:hidden rounded-b-lg transition-all duration-700 ease-in-out ${
          open ? "max-h-96 opacity-100 p-4 border-b border-slate-800" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-5 mb-5">
          {socialItems?.map((item) => (
            <div key={item.name} className="flex gap-3 items-center">
              <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-3 text-cyan-300">
                <item.icon size={20} />
              </div>
              <div>
                <h1 className="text-xs">{item.name}</h1>
                <h1 className="text-sm">{item.data}</h1>
              </div>
            </div>
          ))}
        </div>
        <SocialLinks />
      </div>
    </>
  );
};

export default ProfileToggle;
