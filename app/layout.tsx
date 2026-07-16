import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://francisco-santos-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Francisco Santos — Software Engineer & Freelance Developer",
  description:
    "Software engineer based in Lisbon, Portugal, specializing in .NET / ASP.NET Core backend systems, AI-assisted development tooling, and full-stack web apps with Next.js, Vercel and Supabase.",
  openGraph: {
    title: "Francisco Santos — Software Engineer & Freelance Developer",
    description:
      "Custom software development with .NET / ASP.NET Core expertise and AI-assisted tooling. Available for freelance backend, integration and full-stack projects.",
    url: siteUrl,
    siteName: "Francisco Santos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Francisco Santos — Software Engineer & Freelance Developer",
    description:
      "Custom software development with .NET / ASP.NET Core expertise and AI-assisted tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        {children}
      </body>
    </html>
  );
}
