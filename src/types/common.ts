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