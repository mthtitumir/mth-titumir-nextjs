import { skillGroups } from "@/data/portfolio";
import Image from "next/image";

const SkillsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-cyan-300">
          Capabilities
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Skills for building production web products
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          My core stack is TypeScript, React, Next.js, Node.js, Express,
          MongoDB, and PostgreSQL, with product experience around SaaS
          dashboards, role-based workflows, APIs, analytics, AI integrations,
          automation, and data-heavy interfaces.
        </p>
      </div>

      <div className="grid gap-5">
        {skillGroups.map((skill) => (
          <section
            key={skill.heading}
            className="rounded-lg border border-slate-800 bg-slate-950/40 p-5"
          >
            <h2 className="mb-4 text-xl font-semibold text-white">
              {skill.heading}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skill.data.map((tech) => (
                <div
                  key={tech.name}
                  className="flex min-h-14 items-center gap-3 rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200"
                >
                  {tech.logo && (
                    <Image
                      width={28}
                      height={28}
                      alt={tech.name}
                      src={tech.logo}
                    />
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
