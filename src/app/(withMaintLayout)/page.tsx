import DownloadResume from "@/components/ui/homepage/DownloadResume";
import { experienceData, profile, projects, skillGroups } from "@/data/portfolio";
import Link from "next/link";

export default function Home() {
  const featuredProject = projects.find((project) => project.featured) || projects[0];
  const supportingProjects = projects.filter((project) => !project.featured).slice(0, 3);
  const primarySkills = skillGroups.slice(0, 4);

  return (
    <div className="space-y-14">
      <section className="border-b border-slate-800 pb-12 pt-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Full Stack Developer & AI Applications Engineer
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Building SaaS products, AI workflows, and scalable web platforms.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects/recruit-flow"
            className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            View Recruit Flow
          </Link>
          <Link
            href="/resume"
            className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            Contact
          </Link>
        </div>
        <DownloadResume />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-10">
          <section>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-300">
                  Featured project
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  {featuredProject.title}
                </h2>
              </div>
              <Link
                href={featuredProject.live_url}
                target="_blank"
                className="hidden rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10 sm:inline-flex"
              >
                Live Site
              </Link>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-6">
              <p className="leading-8 text-slate-300">
                {featuredProject.description}
              </p>
              <div className="mt-5 grid gap-3">
                {featuredProject.contributions.slice(0, 4).map((item) => (
                  <p
                    key={item}
                    className="border-l border-cyan-400/50 pl-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.technologies_used.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
                >
                  Case Study
                </Link>
                <Link
                  href={featuredProject.live_url}
                  target="_blank"
                  className="rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-slate-100 hover:border-cyan-400 hover:text-cyan-200 sm:hidden"
                >
                  Live Site
                </Link>
              </div>
            </div>
          </section>

          <section>
            <p className="text-sm uppercase tracking-widest text-cyan-300">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Recent work
            </h2>
            <div className="mt-5 space-y-4">
              {experienceData.map((exp) => (
                <article
                  key={`${exp.company}-${exp.duration}`}
                  className="rounded-lg border border-slate-800 bg-slate-950/30 p-5"
                >
                  <p className="text-sm text-slate-500">{exp.duration}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {exp.title}{" "}
                    <a
                      href={exp.company_website}
                      target="_blank"
                      className="text-cyan-300"
                    >
                      @ {exp.company}
                    </a>
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {exp.responsibilities[0]}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-300">
                  Selected work
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Other projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
              >
                All
              </Link>
            </div>
            <div className="grid gap-4">
              {supportingProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="rounded-lg border border-slate-800 bg-slate-950/30 p-5 hover:border-cyan-400/50"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <span className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                      {project.stack}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
            <h2 className="text-lg font-semibold text-white">Quick profile</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>{profile.location}</p>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
            <h2 className="text-lg font-semibold text-white">Highlights</h2>
            <div className="mt-4 space-y-3">
              {profile.highlights.map((item) => (
                <p key={item} className="text-sm leading-6 text-slate-400">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
            <h2 className="text-lg font-semibold text-white">Core skills</h2>
            <div className="mt-4 space-y-4">
              {primarySkills.map((group) => (
                <div key={group.heading}>
                  <p className="text-sm font-semibold text-cyan-300">
                    {group.heading}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {group.data.slice(0, 5).map((item) => item.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
