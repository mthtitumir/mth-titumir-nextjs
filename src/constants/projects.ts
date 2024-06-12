import { Project } from "@/types";

export const projects: Project[] = [
    {
        project_id: 1,
        title: "Flora Vista",
        description: "Flora Vista is a multiple role based inventory management website for B2B businesses, users can add, buy, manage their products and see a real time statistics of the business matrices.",
        contributions: [],
        duration: "3 months and running",
        technologies_used: ["React", "Redux", "Ant Design", "TypeScript", "Express.js",  "MongoDB"],
        live_url: "https://flower-management-client-iota.vercel.app/",
        github_client: "http://github.com/mthtitumir/inventory-management-client",
        github_server: "http://github.com/mthtitumir/inventory-management-server",
        image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718089454/flower-management.jpg",
        stack: "Fullstack",
        status: "Running"
    },
    {
        project_id: 2,
        title: "Blood & Connect",
        description: "Blood & Connect is a service based solution for the blood donors and patients to donate and receive blood.",
        contributions: [],
        duration: "1 month and running",
        technologies_used: ["NextJs", "Redux", "Material UI", "TypeScript", "Express.js", "PostgreSQL", "Prisma"],
        live_url: "https://blood-donation-client-black.vercel.app/",
        github_client: "http://github.com/mthtitumir/blood-donation-client",
        github_server: "http://github.com/mthtitumir/blood-donation-server",
        image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718089837/blood-and-connect.jpg",
        stack: "Fullstack",
        status: "Running"
    },
    {
        project_id: 3,
        title: "The Universal News(Team Project)",
        description: "A rich news website covering local and international news and views with voice assistant.",
        contributions: [
            "Lead the team",
            "Built the backend with a fellow developer",
            "Developed full dashboard section(multiple role based)",
            "Polished and reviewed frontend codebase made by frontend developers"
        ],
        duration: "2 months",
        technologies_used: ["NextJs", "JavaScript", "TailwindCss", "Express.js", "MongoDB"],
        live_url: "https://the-universal-news.vercel.app/",
        github_client: "https://github.com/mthtitumir/the-universal-news",
        github_server: "https://github.com/mthtitumir/the-universal-news",
        image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718099149/the-universal-news.jpg",
        stack: "Fullstack",
        team_size: 5,
        status: "Running"
    }
]