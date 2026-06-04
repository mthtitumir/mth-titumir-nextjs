import { assets } from "@/assets";
import { icons } from "@/icons";
import { Experience, Project } from "@/types";

export const profile = {
  name: "M. T. H. Titumir",
  role: "Full Stack Developer & AI Applications Engineer",
  tagline: "I build SaaS platforms, AI-powered applications, dashboards, APIs, and production-ready web products.",
  location: "Chattogram, Bangladesh",
  email: "mthtitumir1@gmail.com",
  phone: "+8801834544437",
  summary:
    "Full-Stack Developer & AI Applications Engineer with 2+ years of experience building scalable SaaS platforms, AI-powered applications, and modern web systems. Specialized in React, Next.js, Node.js, MongoDB, and advanced AI integrations including LLMs, RAG systems, automation workflows, and generative AI applications. Experienced in designing end-to-end system architecture, building production-grade APIs, and delivering AI-enhanced features that improve operational efficiency, automate workflows, and increase user engagement.",
  highlights: [
    "2+ years building scalable SaaS and AI-powered products",
    "ATS platforms, survey systems, dashboards, and workflow tools",
    "End-to-end architecture, frontend, backend, database, and deployment",
    "Remote collaboration with international teams",
  ],
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Focus", value: "SaaS + AI" },
    { label: "Stack", value: "Next.js / Node" },
  ],
  resumeUrl: "/resume.pdf",
};

export const navLinks: Record<string, string> = {
  "/": "About",
  "/projects": "Projects",
  "/resume": "Experience",
  "/skills": "Skills",
  "/contact": "Contact",
};

export const socialItems = [
  {
    name: "EMAIL",
    data: profile.email,
    icon: icons.contact.email,
    url: `mailto:${profile.email}`,
  },
  {
    name: "PHONE",
    data: profile.phone,
    icon: icons.contact.phone,
    url: "https://wa.me/+8801834544437",
  },
  {
    name: "LOCATION",
    data: profile.location,
    icon: icons.contact.location,
    url: "#",
  },
];

export const socialLinks = [
  {
    title: "GitHub",
    icon: icons.social.github,
    url: "https://github.com/mthtitumir",
  },
  {
    title: "LinkedIn",
    icon: icons.social.linkedIn,
    url: "https://www.linkedin.com/in/mthtitumir",
  },
  {
    title: "Codeforces",
    icon: icons.social.codeForces,
    url: "https://codeforces.com/profile/mth_titumir",
  },
  {
    title: "Dev.to",
    icon: icons.social.devTo,
    url: "https://dev.to/mthtitumir",
  },
];

export const contactData = [
  {
    title: "Email",
    description: "Best for work, collaboration, and project discussions.",
    icon: icons.contact.email,
    url: `mailto:${profile.email}`,
  },
  {
    title: "WhatsApp",
    description: "Quick direct contact for availability or follow-up.",
    icon: icons.contact.whatsApp,
    url: "https://wa.me/+8801834544437",
  },
  ...socialLinks.map((item) => ({
    ...item,
    description: `Connect with me on ${item.title}.`,
  })),
  {
    title: "Resume",
    description: "Download my latest resume as a PDF.",
    icon: icons.social.resume,
    url: profile.resumeUrl,
  },
];

export const experienceData: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Standard Insights",
    company_website: "https://standard-insights.com/",
    company_summary:
      "Standard Insights is a market research startup revolutionizing consumer insights with an AI-driven platform that simplifies survey creation, data analysis, and reporting, helping brands make faster, data-driven decisions.",
    location: "New York, USA",
    job_location: "Remote",
    duration: "August 2024 - Present",
    responsibilities: [
      "Survey Builder Development: Boosted survey adoption by 35% by designing and implementing a dynamic drag-and-drop survey builder in React and Next.js.",
      "Survey Administration Workflows: Built survey creation, editing, scheduling, permission, and question-management features that helped product teams control research operations more efficiently.",
      "Brand Performance Tracker: Accelerated insights delivery by building brand performance tracking with customizable bar, radar, and heatmap charts.",
      "Backend Development & APIs: Built and optimized production-grade REST APIs with Express and MongoDB, enabling scalable and secure survey, reporting, and admin workflows.",
      "Frontend Functionalities: Improved engagement with interactive, responsive UIs using Next.js, TanStack Query, and ShadCN components.",
      "Data Visualization: Integrated high-performance charting with Chart.js to support large datasets with accurate, readable visualization.",
      "AI-Powered Features: Integrated AI-assisted survey generation, data interpretation, and reporting workflows to streamline research operations and reduce manual effort.",
      "Collaboration & Delivery: Partnered with product managers and data analysts to translate research workflows into technical features, ensuring timely, high-quality delivery of client-focused solutions.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Express", "MongoDB", "TanStack Query", "ShadCN", "Chart.js", "AI Integrations"],
  },
  {
    title: "Frontend Developer",
    company: "Dinify",
    company_website: "https://www.dinify.io/",
    company_summary:
      "Dinify is a contactless dining system app based in Vancouver, Canada, designed to enhance the restaurant experience by allowing customers to browse menus, place orders, and make payments seamlessly through their mobile devices.",
    location: "Vancouver, Canada",
    job_location: "Remote",
    duration: "November 2023 - June 2024",
    responsibilities: [
      "Full-Stack Development: Contributed to frontend and backend development, delivering end-to-end features for customers and restaurant partners.",
      "Restaurant Dashboard & Menu Management: Built interactive dashboards for restaurants to manage digital menus, track orders, and view sales analytics in real time.",
      "Backend API Development: Designed and implemented RESTful APIs for order processing, menu updates, payment handling, and customer account management.",
      "User Experience: Created responsive, intuitive, and accessible UIs for customers to browse menus, place orders, and pay effortlessly.",
      "Team Collaboration: Worked closely with designers, backend engineers, and product managers to align technical solutions with business and user needs.",
    ],
    technologies: ["React", "Redux", "Material UI", "Express", "MongoDB", "Mongoose", "Socket.IO"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science",
    major: "Mathematics",
    university: "National University of Bangladesh",
    grad_year: "2019 - 2025",
  },
];

export const certificationData = [
  {
    title: "IBM Certified Full Stack Software Developer",
    description:
      "Comprehensive full-stack development training with hands-on projects covering modern web technologies.",
  },
];

export const projects: Project[] = [
  {
    project_id: 7,
    slug: "recruit-flow",
    title: "Recruit Flow",
    description:
      "Recruit Flow is an AI-powered applicant tracking system that helps hiring teams manage jobs, candidates, interviews, hiring pipelines, analytics, and recruiter workflows from a centralized SaaS workspace.",
    contributions: [
      "Designed, developed, and deployed the complete platform independently, covering architecture, frontend, backend, database design, deployment, and maintenance.",
      "Built a full ATS workflow for managing job openings, candidate applications, interview stages, hiring decisions, and recruiter collaboration.",
      "Developed drag-and-drop hiring pipelines with customizable stages, candidate tracking, activity logs, and workflow automation.",
      "Implemented recruitment analytics dashboards for pipeline health, hiring performance, source effectiveness, and recruiter productivity.",
      "Built secure authentication, authorization, role-based access control, and protected recruiter workflows.",
      "Managed production deployment, database optimization, API performance, monitoring, and infrastructure scalability.",
    ],
    duration: "Self-built product",
    technologies_used: ["Next.js", "React", "TypeScript", "Express", "MongoDB", "Clerk", "Lemon Squeezy", "ShadCN UI", "Gemini AI"],
    live_url: "https://recruit-flow.com/",
    github_client: "#",
    github_server: "#",
    image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1742375577/overview-raw_omiat0.png",
    stack: "AI SaaS / ATS",
    status: "Featured",
    featured: true,
  },
  {
    project_id: 6,
    slug: "career-dock",
    title: "Career Dock",
    description:
      "Career Dock is a job application tracking SaaS that helps job seekers manage application boards, interviews, networking, tasks, analytics, and shared application workflows in one place.",
    contributions: [
      "Contributed from planning through execution with a 3-person team.",
      "Built the complete backend architecture for boards, applications, tracking, and collaboration workflows.",
      "Designed API contracts and data models with Express, Mongoose, and MongoDB.",
      "Supported frontend issue fixes and helped connect product workflows end to end.",
    ],
    duration: "5 months",
    technologies_used: ["TypeScript", "Next.js", "ShadCN", "Express", "Mongoose", "MongoDB"],
    live_url: "https://careerdock.app/",
    github_client: "#",
    github_server: "#",
    image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1742375577/overview-raw_omiat0.png",
    stack: "MERN SaaS",
    team_size: 3,
    status: "Running",
  },
  {
    project_id: 1,
    slug: "flora-vista",
    title: "Flora Vista",
    description:
      "A role-based inventory management platform for B2B businesses to add, purchase, manage, and analyze products with real-time business metrics.",
    contributions: [
      "Built role-based inventory workflows across frontend and backend.",
      "Implemented product management, purchase flows, and business metric views.",
      "Integrated dashboard-oriented UI patterns for operational teams.",
    ],
    duration: "3 months",
    technologies_used: ["React", "Redux", "Ant Design", "TypeScript", "Express", "MongoDB"],
    live_url: "https://flower-management-client-iota.vercel.app/",
    github_client: "http://github.com/mthtitumir/inventory-management-client",
    github_server: "http://github.com/mthtitumir/inventory-management-server",
    image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718089454/flower-management.jpg",
    stack: "Full Stack",
    status: "Running",
  },
  {
    project_id: 2,
    slug: "blood-and-connect",
    title: "Blood & Connect",
    description:
      "A service platform for blood donors and patients, connecting donation requests with available donors through secure full-stack workflows.",
    contributions: [
      "Built donor and patient workflows with Next.js and Express.",
      "Implemented backend models and API flows with PostgreSQL and Prisma.",
      "Created responsive UI screens for searching, requesting, and managing blood donation activity.",
    ],
    duration: "1 month",
    technologies_used: ["Next.js", "Redux", "Material UI", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    live_url: "https://blood-donation-client-black.vercel.app/",
    github_client: "http://github.com/mthtitumir/blood-donation-client",
    github_server: "http://github.com/mthtitumir/blood-donation-server",
    image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718089837/blood-and-connect.jpg",
    stack: "Full Stack",
    status: "Running",
  },
  {
    project_id: 3,
    slug: "the-universal-news",
    title: "The Universal News",
    description:
      "A team-built news platform covering local and international stories with dashboard management and voice-assistant features.",
    contributions: [
      "Led a 5-person team through planning, implementation, and review.",
      "Built backend features with another developer.",
      "Developed the multi-role dashboard section.",
      "Reviewed and polished frontend work for release quality.",
    ],
    duration: "2 months",
    technologies_used: ["Next.js", "JavaScript", "Tailwind CSS", "Express", "MongoDB"],
    live_url: "https://the-universal-news.vercel.app/",
    github_client: "https://github.com/mthtitumir/the-universal-news",
    github_server: "https://github.com/mthtitumir/the-universal-news",
    image_url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1718099149/the-universal-news.jpg",
    stack: "Full Stack",
    team_size: 5,
    status: "Running",
  },
];

export const skillGroups = [
  {
    heading: "Frontend",
    data: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "ShadCN UI" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    heading: "Backend",
    data: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Prisma" },
      { name: "Mongoose" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    heading: "AI & Automation",
    data: [
      { name: "OpenAI API" },
      { name: "Gemini API" },
      { name: "Claude API" },
      { name: "AI Chat Systems" },
      { name: "RAG Architectures" },
      { name: "Prompt Engineering" },
      { name: "Workflow Automation" },
      { name: "Image Generation" },
      { name: "AI Assistants" },
      { name: "Conversational AI" },
    ],
  },
  {
    heading: "Cloud & DevOps",
    data: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Redis" },
      { name: "Firebase" },
      { name: "Vercel" },
      { name: "Linux" },
    ],
  },
  {
    heading: "Tools",
    data: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vitest" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Jira" },
      { name: "Slack" },
      { name: "Agile Development" },
    ],
  },
  {
    heading: "Core Icons",
    data: assets.tech.flatMap((group) => group.data),
  },
  {
    heading: "Product & SaaS Capabilities",
    data: [
      { name: "REST APIs" },
      { name: "Role-Based Access" },
      { name: "Dashboards" },
      { name: "Survey Builders" },
      { name: "Analytics" },
      { name: "Data Visualization" },
      { name: "Payments" },
      { name: "CI/CD" },
    ],
  },
];
