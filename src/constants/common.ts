import { icons } from "@/icons";
import { SocialIconInfo } from "@/types";

export const socialItems: SocialIconInfo[] = [
    {
        name: "EMAIL",
        data: "mthtitumir1@gmail.com",
        icon: icons.contact.email,
    },
    {
        name: "PHONE",
        data: "+8801834544437",
        icon: icons.contact.phone,
    },
    {
        name: "LOCATION",
        data: "CTG, Bangladesh",
        icon: icons.contact.location,
    },
];

export const navLinks: Record<string, string> = {
    "/": "About Me",
    "/skills": "Skills",
    "/projects": "Projects",
    "/resume": "Resume",
};