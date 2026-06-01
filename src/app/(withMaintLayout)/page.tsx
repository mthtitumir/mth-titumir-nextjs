import DownloadResume from "@/components/ui/homepage/DownloadResume";
import { experienceData, profile, projects } from "@/data/portfolio";
import Link from "next/link";

export default function Home() {
  const featuredProject = projects.find((project) => project.featured) || projects[0];
  const currentRole = experienceData[0];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Full Stack Developer & AI Applications Engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Building SaaS products, AI workflows, dashboards, and backend systems that ship.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
            >
              Contact Me
            </Link>
          </div>
          <DownloadResume />
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Current role
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {currentRole.title}
          </h2>
          <a
            href={currentRole.company_website}
            target="_blank"
            className="mt-1 inline-block text-cyan-300"
          >
            {currentRole.company}
          </a>
          <p className="mt-3 text-sm text-slate-400">{currentRole.duration}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentRole.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-800 bg-slate-950/40 p-5"
          >
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">What I focus on</h2>
          <div className="mt-4 grid gap-3">
            {profile.highlights.map((item) => (
              <div
                key={item}
                className="rounded-md border border-slate-800 bg-slate-950/30 p-4 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-5">
          <p className="text-sm uppercase tracking-widest text-cyan-300">
            Featured build
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {featuredProject.title}
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            {featuredProject.description}
          </p>
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="mt-5 inline-flex rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10"
          >
            Read Case Study
          </Link>
        </div>
      </section>
    </div>
  );
}
