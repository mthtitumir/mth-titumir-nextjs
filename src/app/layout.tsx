import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { TChildrenProps } from "@/types";
import MainLayout from "@/components/layout/MainLayout/MainLayout";

const inter = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "M. T. H. Titumir",
  description: "Fullstack Developer",
};

export default function RootLayout({ children }: TChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A192F]`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
// 0f172a
