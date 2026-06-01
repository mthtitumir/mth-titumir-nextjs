import type { Metadata } from "next";
import "./globals.css";
import { TChildrenProps } from "@/types";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "M. T. H. Titumir | Full Stack Developer & AI Applications Engineer",
  description:
    "Portfolio of M. T. H. Titumir, a full-stack developer and AI applications engineer building SaaS platforms, AI-powered applications, dashboards, APIs, and production-ready web products with Next.js, React, TypeScript, Node.js, Express, MongoDB, and PostgreSQL.",
  keywords: [
    "M. T. H. Titumir",
    "Titumir Developer",
    "Fullstack Developer",
    "Full Stack Developer",
    "Backend Developer",
    "AI Applications Engineer",
    "AI Developer",
    "Applicant Tracking System",
    "Recruit Flow",
    "Frontend Developer",
    "SaaS Developer",
    "OpenAI API",
    "Gemini API",
    "RAG Architectures",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "REST API Developer",
    "Scalable Web Applications",
    "Server-Side Developer",
    "Frontend Engineering",
    "Fullstack Web Projects",
    "Zustand State Management",
    "TanStack Query",
    "Cloudinary Integration",
    "S3 Media Storage",
    "Vercel Portfolio",
    "Open Source Projects",
    "Tech Enthusiast",
    "Modern Web Developer",
    "Custom Survey Builder",
    "Dynamic Form Builder",
    "Survey Application",
    "Developer from Bangladesh",
    "Tech Creator",
    "Clean Code",
    "Performance Optimization",
    "Web App Architecture",
    "Next.js SEO Optimization",
    "Dev Portfolio 2026",
    "GitHub Projects",
    "Developer on Twitter",
    "API Design and Development",
    "Responsive Web Design",
    "Software Projects",
    "MongoDB Aggregation",
    "Authentication Developer",
    "Clerk Authentication",
    "NextAuth Integration",
    "Cloud Native Developer",
    "Linux User Developer",
    "DevOps Curious Developer",
    "Zustand Global State",
    "Survey Platform Engineer",
    "Form Data Handling",
    "Frontend Logic Developer",
    "SaaS Developer",
    "Side Hustle Developer",
    "JavaScript Engineer",
    "Clean UI Developer",
    "Modern UI/UX Design",
    "Technical Problem Solver",
  ],
  creator: "M. T. H. Titumir",
  authors: [
    { name: "M. T. H. Titumir", url: "https://mth-titumir.vercel.app/" },
  ],
  publisher: "M. T. H. Titumir",
  openGraph: {
    title: "M. T. H. Titumir | Full Stack Developer & AI Applications Engineer",
    description:
      "Full-stack developer building SaaS platforms, AI-powered applications, dashboards, APIs, and production-ready web products.",
    url: "https://mth-titumir.vercel.app/",
    siteName: "M. T. H. Titumir",
    images: [
      {
        url: "/titumir_1000px.png",
        width: 1200,
        height: 630,
        alt: "M. T. H. Titumir",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. T. H. Titumir | Full Stack Developer & AI Applications Engineer",
    description:
      "SaaS and AI-focused full-stack developer building performant web applications, dashboards, and APIs.",
    site: "@mth_titumir",
    creator: "@mth_titumir",
    images: ["/titumir_1000px.png"],
  },
  metadataBase: new URL("https://mth-titumir.vercel.app/"),
};

export default function RootLayout({ children }: TChildrenProps) {
  return (
    <html lang="en">
      <body className="bg-[#06111f] font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// 0f172a
