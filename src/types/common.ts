import { IconType } from "react-icons";

export type TChildrenProps = {
    children: React.ReactNode;
}

export type SocialIconInfo = {
    name: string,
    data: string | number,
    icon: IconType,
}

type TechItem = {
    name: string;
    logo: string;
}

type TechCategory = {
    heading: string;
    data: TechItem[];
}

export type Assets = {
    tech: TechCategory[];
}
export type TBlog = {
    title: string;
    banner: string;
    tags: string[];
    shortDesc: string;
    longDesc: string;
    content: string;
}
export type Project = {
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
}

export type Education = {
    degree: string;
    major: string;
    university: string;
    grad_year: string;
}

export type Experience = {
    title: string;
    company: string;
    company_website: string;
    location: string;
    job_location: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
};