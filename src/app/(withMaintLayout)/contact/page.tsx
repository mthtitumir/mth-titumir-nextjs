import { contactData, profile } from "@/data/portfolio";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-widest text-cyan-300">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Let&apos;s build something useful
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          I&apos;m open to full-stack roles, SaaS product work, backend-heavy
          features, dashboard development, and product teams that care about
          clean delivery.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-5">
          <h2 className="text-2xl font-semibold text-white">{profile.name}</h2>
          <p className="mt-2 text-cyan-300">{profile.role}</p>
          <p className="mt-4 leading-7 text-slate-400">{profile.tagline}</p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>{profile.location}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {contactData.map((contact) => (
            <Link
              href={contact.url}
              target={contact.url.startsWith("/") ? undefined : "_blank"}
              key={contact.title}
              className="rounded-lg border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-400/50 hover:bg-slate-950"
              title={contact.url}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-2 text-cyan-300">
                  <contact.icon size={18} />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  {contact.title}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {contact.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
