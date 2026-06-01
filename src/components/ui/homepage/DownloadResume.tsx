"use client";

import { profile } from "@/data/portfolio";
import Link from "next/link";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profile.resumeUrl;
    link.download = "mth-titumir-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <button
        onClick={handleDownload}
        className="inline-flex justify-center rounded-md border border-transparent bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-300 focus:outline-none"
      >
        Download Resume
      </button>
      <Link
        href={profile.resumeUrl}
        target="_blank"
      >
        <button className="inline-flex justify-center rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm hover:bg-cyan-500/10 focus:outline-none">
          View Resume
        </button>
      </Link>
    </div>
  );
};

export default DownloadResume;
