import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = () =>
  projects.map((project) => ({ id: project.slug }));

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = projects.find((item) => item.slug === params.id);

  if (!project) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-6">
        <h1 className="text-2xl font-semibold text-white">
          Project not found
        </h1>
        <Link
          href="/projects"
          className="mt-4 inline-flex rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/40">
        <div className="relative h-64 w-full bg-slate-900 md:h-80">
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5 md:p-7">
          <div className="flex flex-wrap gap-2">
            <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100">
              {project.stack}
            </span>
            <span className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              {project.status}
            </span>
            {project.team_size && (
              <span className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                Team of {project.team_size}
              </span>
            )}
          </div>
          <h1 className="mt-5 text-3xl font-bold text-white">
            {project.title}
          </h1>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            {project.description}
          </p>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-5">
          <h2 className="text-xl font-semibold text-white">My contribution</h2>
          <ul className="mt-4 space-y-3">
            {project.contributions.map((contribution) => (
              <li key={contribution} className="leading-7 text-slate-300">
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-5">
            <h2 className="text-xl font-semibold text-white">Project info</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <span className="text-slate-500">Duration:</span>{" "}
                {project.duration}
              </p>
              <p>
                <span className="text-slate-500">Status:</span>{" "}
                {project.status}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-5">
            <h2 className="text-xl font-semibold text-white">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies_used.map((technology) => (
                <span
                  key={technology}
                  className="rounded border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.live_url !== "#" && (
              <Link
                href={project.live_url}
                target="_blank"
                className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                View Live
              </Link>
            )}
            {project.github_client !== "#" && (
              <Link
                href={project.github_client}
                target="_blank"
                className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
              >
                Frontend Code
              </Link>
            )}
            {project.github_server !== "#" && (
              <Link
                href={project.github_server}
                target="_blank"
                className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
              >
                Backend Code
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetails;
