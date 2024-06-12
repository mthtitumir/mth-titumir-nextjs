import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const SkillsPage = () => {
  const skills = assets?.tech;
  return (
    <div>
      <div className="flex flex-col gap-5">
        {skills?.map((skill, index) => (
          <div key={index}>
            <h1 className="mb-3 text-xl text-slate-200">{skill?.heading}</h1>
            <div className="flex items-center gap-5">
              {skill?.data?.map((tech, index) => (
                <div key={index} className="">
                  <div className="bg-slate-700 hover:bg-slate-800 p-4 flex items-center justify-center border border-sky-700 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      alt={tech.name}
                      src={tech.logo}
                    />
                  </div>
                  <p className="text-center mt-2 text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
