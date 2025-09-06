import DownloadResume from "@/components/ui/homepage/DownloadResume";

export default function Home() {
  return (
    <>
      <div>
        <h1>
          I am a Full-Stack Developer with 2+ years of professional experience
          building scalable, high-performance web applications. My expertise
          spans React.js, Next.js, TypeScript, and Tailwind CSS on the frontend,
          and Node.js, Express.js, MongoDB, and PostgreSQL on the backend.
        </h1>
        <h1 className="my-5">
          I have delivered impactful solutions such as boosting survey platform
          adoption by 35% at Standard Insights and streamlining booking and
          payment workflows at Dinify for Canadian clients. With hands-on
          experience in REST APIs, GraphQL, Prisma, Docker, and CI/CD pipelines,
          I build secure, user-friendly, and production-ready applications.
        </h1>
        <h1>
          I thrive in fast-paced, collaborative environments, enjoy solving
          complex technical problems, and continuously refine my skills to stay
          ahead of industry trends. My focus is always on writing clean,
          maintainable code and delivering exceptional user experiences that
          align with business goals.
        </h1>
      </div>
      <div>
        <DownloadResume />
      </div>
    </>
  );
}
