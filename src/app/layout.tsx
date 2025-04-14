import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { TChildrenProps } from "@/types";
import { Analytics } from "@vercel/analytics/next";

const inter = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "M. T. H. Titumir | Fullstack Developer (Backend Focused)",
  description:
    "Explore the portfolio of M. T. H. Titumir — a passionate fullstack developer with a backend focus. From scalable server-side logic and RESTful APIs to seamless frontend integration using modern frameworks like Next.js, TypeScript, and Express, Titumir builds robust digital solutions that solve real-world problems.",
  keywords: [
      "M. T. H. Titumir",
      "Titumir Developer",
      "Fullstack Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
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
      "Dev Portfolio 2025",
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
      "Technical Problem Solver"
    ],    
  creator: "M. T. H. Titumir",
  authors: [{ name: "M. T. H. Titumir", url: "https://mth-titumir.vercel.app/" }],
  publisher: "M. T. H. Titumir",
  openGraph: {
    title: "M. T. H. Titumir | Fullstack Developer",
    description:
      "Get to know M. T. H. Titumir — Fullstack Web Developer with strong backend expertise, building scalable apps using JavaScript, TypeScript, and modern frameworks.",
    url: "https://mth-titumir.vercel.app/",
    siteName: "M. T. H. Titumir",
    images: [
      {
        url: "https://res.cloudinary.com/dbbtzirgj/image/upload/v1744617982/WhatsApp_Image_2024-12-09_at_8.17.41_PM_shktsa.jpg",
        width: 1200,
        height: 630,
        alt: "M. T. H. Titumir"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "M. T. H. Titumir | Fullstack Developer",
    description:
      "Next.js & backend-focused fullstack developer — building performant and scalable web applications.",
    site: "@mth_titumir",
    creator: "@mth_titumir",
    images: ["https://res.cloudinary.com/dbbtzirgj/image/upload/v1744617953/titumir_1000px_pleqdn.jpg"]
  },
  metadataBase: new URL("https://mth-titumir.vercel.app/")
};


export default function RootLayout({ children }: TChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A192F]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
// 0f172a