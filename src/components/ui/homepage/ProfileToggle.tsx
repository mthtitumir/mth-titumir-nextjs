"use client";

import { socialItems } from "@/constants";
import Image from "next/image";
import { icons } from "@/icons";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

const ProfileToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-8 items-center rounded-lg p-4 border-b border-[#383838] lg:hidden relative">
        <div className="flex justify-center p-2 items-center bg-slate-700 rounded-xl">
          <Image
            width={60}
            height={60}
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
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 hover:text-sky-600 rounded-tr-md rounded-bl-md py-1 px-3 text-center text-white text-sm top-0 right-0 absolute"
        >
          {open ? <icons.utils.arrowUp size={20} /> : <icons.utils.arrowDown size={20} />}
        </button>
      </div>
      <div
        className={`lg:hidden rounded-b-lg transition-all duration-700 ease-in-out ${
          open ? "max-h-96 opacity-100 p-4 border-b border-[#383838]" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-5 mb-5">
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
        <SocialLinks />
      </div>
    </>
  );
};

export default ProfileToggle;
