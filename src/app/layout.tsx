import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "VAIORA 26",
    "Vaigai College of Engineering",
    "CSE Symposium",
    "Inter Collegiate Symposium",
    "Madurai Engineering Events",
    "Paper Presentation",
    "Code Clash",
    "Project Expo",
  ],
  authors: [{ name: "Department of CSE, Vaigai College of Engineering" }],
  icons: {
    icon: "/logos/vaioralogo.png",
    apple: "/logos/vaioralogo.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logos/vaioralogo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
