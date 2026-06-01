import DownloadResume from "@/components/ui/homepage/DownloadResume";
import { certificationData, educationData, experienceData } from "@/data/portfolio";
import { icons } from "@/icons";

const ResumePage = () => {
  return (
    <div className="space-y-10">
      <section>
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 p-2 text-cyan-300">
            <icons.resume.experience size={20} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-300">
              Work history
            </p>
            <h1 className="text-3xl font-bold text-white">Experience</h1>
          </div>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <article
              key={`${exp.company}-${exp.duration}`}
              className="rounded-lg border border-slate-800 bg-slate-950/40 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-500">{exp.duration}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {exp.title}{" "}
                    <a
                      href={exp.company_website}
                      target="_blank"
                      className="text-cyan-300"
                    >
                      @ {exp.company}
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {exp.location} ({exp.job_location})
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {exp.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="border-l border-cyan-400/40 pl-4 leading-7 text-slate-300"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 p-2 text-cyan-300">
              <icons.resume.education size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          {educationData.map((edu) => (
            <div key={edu.university} className="space-y-1 text-slate-300">
              <p className="text-sm text-slate-500">{edu.grad_year}</p>
              <h3 className="font-semibold text-white">{edu.university}</h3>
              <p>{edu.degree}</p>
              <p>{edu.major}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 p-2 text-cyan-300">
              <icons.resume.certificate size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-white">Certification</h2>
          </div>
          {certificationData.map((certification) => (
            <div key={certification.title} className="space-y-2">
              <h3 className="font-semibold text-white">
                {certification.title}
              </h3>
              <p className="leading-7 text-slate-400">
                {certification.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 p-2 text-cyan-300">
              <icons.resume.language size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-white">Languages</h2>
          </div>
          <div className="space-y-2 text-slate-300">
            <p>Bangla (Native)</p>
            <p>English (Communicative)</p>
          </div>
          <DownloadResume />
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
