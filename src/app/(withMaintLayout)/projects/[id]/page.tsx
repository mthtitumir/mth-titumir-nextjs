import Head from "next/head";
import Image from "next/image";
import React from "react";
type TProject = {
  project_id: number;
  title: string;
  description: string;
  contributions: string[];
  duration: string;
  technologies_used: string[];
  live_url: string;
  github_client: string;
  github_server: string;
  image_url: string;
  stack: string;
  team_size?: number;
  status: string;
};
const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${params?.id}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const project: TProject = data?.data;
  return (
    <div className="container mx-auto p-4 border-main rounded-lg">
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="shadow-md rounded-lg p-4">
        <div className="relative w-full h-64">
          <Image
            src={project.image_url}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-gray-200">{project.title}</h1>
        <p className="text-gray-300 mt-2">{project.description}</p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Contributions</h2>
          <ul className="list-disc list-inside text-gray-300">
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Duration</h2>
          <p className="text-gray-300">{project.duration}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300">
            {project.technologies_used.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Links</h2>
          <p>
            <a
              href={project.live_url}
              target="_blank"
              className="text-sky-500 hover:underline"
            >
              Live URL
            </a>
          </p>
          <p>
            <a
              href={project.github_client}
              target="_blank"
              className="text-sky-500 hover:underline"
            >
              GitHub Client
            </a>
          </p>
          <p>
            <a
              href={project.github_server}
              target="_blank"
              className="text-sky-500 hover:underline"
            >
              GitHub Server
            </a>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Stack</h2>
          <p className="text-gray-300">{project.stack}</p>
        </div>
        {project.team_size && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-200">Team Size</h2>
            <p className="text-gray-300">{project.team_size}</p>
          </div>
        )}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-200">Status</h2>
          <p className="text-gray-300">{project.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
