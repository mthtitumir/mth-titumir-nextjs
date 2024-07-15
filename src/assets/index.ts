import antd from "./tech/antd.svg";
import express from "./tech/express.svg";
import figma from "./tech/figma.svg";
import github from "./tech/github.svg";
import js from "./tech/js.svg";
import ts from "./tech/ts.svg";
import mongodb from "./tech/mongodb.svg";
import mongoose from "./tech/mongoose.svg";
import mui from "./tech/mui.svg";
import next from "./tech/next.svg";
import node from "./tech/node.svg";
import postgres from "./tech/postgres.svg";
import prisma from "./tech/prisma.svg";
import react from "./tech/react.svg";
import redux from "./tech/redux.svg";
import tailwind from "./tech/tailwind.svg";
import vercel from "./tech/vercel.svg";
import vscode from "./tech/vscode.svg";
import c from "./tech/c.png";
import cpp from "./tech/cpp.png";
import { Assets } from "@/types";
import myPic from "./pp.png";
import me from "./me.png";
import blogImg from "./blog.jpg";
import titumir from "./titumir_1000px.jpg";

export const assets: Assets = {
    tech: [
        {
            heading: "Programming Languages",
            data:
                [
                    { name: "C", logo: c },
                    { name: "CPP", logo: cpp },
                    { name: "JS", logo: js },
                    { name: "TS", logo: ts }
                ],
        },
        {
            heading: "JS Libraries & Frameworks",
            data:
                [
                    { name: "ReduxJS", logo: redux },
                    { name: "ReactJS", logo: react },
                    { name: "NextJS", logo: next },
                    { name: "NodeJS", logo: node },
                    { name: "ExpressJS", logo: express },
                ],
        },
        {
            heading: "UI Libraries & Frameworks",
            data:
                [
                    { name: "Material UI", logo: mui },
                    { name: "Ant Design", logo: antd },
                    { name: "TailwindCSS", logo: tailwind },
                ],
        },
        {
            heading: "Database",
            data:
                [
                    { name: "MongoDB", logo: mongodb },
                    { name: "PostgreSQL", logo: postgres },
                ],
        },
        {
            heading: "ORM & ODM",
            data:
                [
                    { name: "Mongoose", logo: mongoose },
                    { name: "Prisma", logo: prisma },
                ],
        },
        {
            heading: "Tools",
            data:
                [
                    { name: "GitHub", logo: github },
                    { name: "VS Code", logo: vscode },
                    { name: "Vercel", logo: vercel },
                    { name: "Figma", logo: figma },
                ],
        }
    ]
}
export const picture = myPic;
export const blogDefBanner = blogImg;
export const mePic = me;
export const titumirPicture = titumir;