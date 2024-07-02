import DownloadResume from "@/components/ui/homepage/DownloadResume";

export default function Home() {
  return (
    <>
      <div>
        <h1>
          A passionate Fullstack Web Developer, I specialize in creating dynamic
          and user-friendly web applications. My technical expertise spans
          JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS on the
          frontend. I focus on crafting interactive and responsive user
          interfaces that are both functional and visually appealing, ensuring a
          seamless user experience.
        </h1>
        <h1 className="my-5">
          On the backend, I am proficient in Node.js and Express, enabling me to
          develop robust and scalable server-side applications. I have extensive
          experience with both MongoDB and PostgreSQL, utilizing Mongoose and
          Prisma for efficient data modeling and database interactions. My
          comprehensive skill set allows me to build end-to-end solutions
          tailored to meet diverse client needs.
        </h1>
        <h1>
          I am a strong advocate for continuous learning and staying updated
          with the latest industry trends. My workflow emphasizes best practices
          such as code modularity, reusability, and performance optimization.
          Whether working independently or in a team, I am committed to
          delivering high-quality code and exceptional user experiences, driving
          innovation and business success through my work.
        </h1>
      </div>
      <div>
        <DownloadResume />
      </div>
    </>
  );
}
