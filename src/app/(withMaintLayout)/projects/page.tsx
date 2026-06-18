import { projects } from "@/data/portfolio";
import { icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-cyan-300">
          Selected work
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          SaaS, dashboards, and full-stack products
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          A curated set of products and platforms where I worked across backend
          architecture, APIs, dashboards, data models, AI workflows, frontend
          experiences, and release-ready UI.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="col-span-12 overflow-hidden rounded-lg border border-slate-800 bg-slate-950/40 lg:col-span-6"
          >
            <div className="relative flex h-48 w-full items-center justify-center bg-slate-900">
              {project.image_url ? (
                <Image
                  fill
                  alt={project.title}
                  src={project.image_url}
                  className="object-cover"
                />
              ) : (
                <div className="px-5 text-center">
                  <p className="text-sm uppercase tracking-widest text-cyan-300">
                    Project
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {project.title}
                  </p>
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {project.stack}
                </span>
                <span className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                  {project.status}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies_used.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-900 px-2 py-1 text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.github_client !== "#" && (
                    <Link
                      href={project.github_client}
                      target="_blank"
                      title="Frontend Code"
                      className="project-link"
                    >
                      <icons.social.github size={22} />
                    </Link>
                  )}
                  {project.github_server !== "#" && (
                    <Link
                      href={project.github_server}
                      target="_blank"
                      title="Backend Code"
                      className="project-link"
                    >
                      <icons.social.github size={22} />
                    </Link>
                  )}
                  {project.live_url !== "#" && (
                    <Link
                      href={project.live_url}
                      target="_blank"
                      title="Live Link"
                      className="project-link"
                    >
                      <icons.social.browser size={22} />
                    </Link>
                  )}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10"
                >
                  Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
