import { IconType } from "react-icons";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

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
    logo?: string | StaticImageData;
}

type TechCategory = {
    heading: string;
    data: TechItem[];
}

export type Assets = {
    tech: TechCategory[];
}
export type Project = {
    project_id: number;
    slug: string;
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
    featured?: boolean;
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
    company_summary?: string;
    location: string;
    job_location: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
};
