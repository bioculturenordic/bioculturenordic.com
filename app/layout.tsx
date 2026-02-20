import type { Metadata } from "next";
import { Inter, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BioCulture Nordic | BCN01 Bioprotective Cultures",
  description: "Science-backed Listeria control for food production using verified bioprotective cultures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSans.variable} ${ibmPlexMono.variable} antialiased font-body bg-functional-white text-primary`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
