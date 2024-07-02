"use client";

import Link from "next/link";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mt-4 flex items-center gap-5">
      <button
        onClick={handleDownload}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none"
      >
        Download Resume
      </button>
      <Link
        href="https://drive.google.com/file/d/1IG-A4wGyySQpmWj6G8b9WZY1g8ul6vA_/view"
        target="_blank"
      >
        <button className="inline-flex justify-center py-2 px-4 border border-sky-500 shadow-sm text-sm font-medium rounded-md text-white focus:outline-none">
          See Resume
        </button>
      </Link>
    </div>
  );
};

export default DownloadResume;
