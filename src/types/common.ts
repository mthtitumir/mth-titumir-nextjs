import { IconType } from "react-icons";

export type TChildrenProps = {
    children: React.ReactNode;
}

export type SocialIconInfo = {
    name: string,
    data: string | number,
    icon: IconType,
}