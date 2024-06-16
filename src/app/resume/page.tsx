import { educationData, experienceData } from "@/constants";
import { icons } from "@/icons";

const ResumePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* education */}
      <div className="">
        {/* head section  */}
        <div className="flex gap-5 items-center mb-6">
          <div className="flex items-center justify-center rounded-lg p-2 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 text-sky-600">
            <icons.resume.education size={20} />
          </div>
          <div>
            <h1 className="text-xl text-slate-200">Education</h1>
          </div>
        </div>
        {/* content section  */}
        <div>
          {educationData?.map((edu, index) => (
            <div
              key={index}
              className="border-l border-sky-600 pl-5 ml-8 flex flex-col gap-2"
            >
              <h1 className="text-xs">{edu.grad_year}</h1>
              <h1 className="text-md font-semibold text-slate-200">
                {edu.university}
              </h1>
              <h1 className="text-md">{edu.degree}</h1>
              <h1 className="text-md">{edu.major}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* experience */}
      <div className="">
        {/* head section  */}
        <div className="flex gap-5 items-center mb-6">
          <div className="flex items-center justify-center rounded-lg p-2 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 text-sky-600">
            <icons.resume.experience size={20} />
          </div>
          <div>
            <h1 className="text-xl text-slate-200">Experience</h1>
          </div>
        </div>
        {/* content section  */}
        <div>
          {experienceData?.map((exp, index) => (
            <div
              key={index}
              className="border-l border-sky-600 pl-5 ml-8 flex flex-col gap-3"
            >
              <h1 className="text-xs">{exp.duration}</h1>
              <h1 className="text-md font-semibold text-slate-200">
                {exp.title}{" "}
                <a
                  href={exp.company_website}
                  target="_blank"
                  className="text-sky-600"
                >
                  @ {exp.company}
                </a>
              </h1>
              <h1 className="text-sm">
                {exp.location} ({exp.job_location})
              </h1>
              <ol>
                {exp?.responsibilities?.map((res, index) => (
                  <li key={index} className="text-md">
                    ▶ {res}
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-2">
                {exp?.technologies?.map((tech, index) => (
                  <button
                    key={index}
                    className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* language */}
      <div className="">
        {/* head section  */}
        <div className="flex gap-5 items-center mb-6">
          <div className="flex items-center justify-center rounded-lg p-2 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 text-sky-600">
            <icons.resume.language size={20} />
          </div>
          <div>
            <h1 className="text-xl text-slate-200">Language</h1>
          </div>
        </div>
        {/* content section  */}
        <div>
          <div className="border-l border-sky-600 pl-5 ml-8">
            <h1 className="text-md text-slate-200">English ( Fluent )</h1>
            <h1 className="text-md text-slate-200">Bengali ( Native )</h1>
          </div>
        </div>
      </div>
      {/* projects */}
      {/* objective */}
      {/* skills */}
      {/* certifications & awards */}
    </div>
  );
};

export default ResumePage;

{
  /* <div className='flex flex-col items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-orange-600' />
                        <div className='w-1 sm:h-80 h-48 violet-gradient' />
                    </div> */
}
