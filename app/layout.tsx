import type { Metadata } from "next";
import { Manrope, Sora, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site-data";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap"
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darvdigital.com"),
  title: {
    default: "DARV Digital | Technical Web Solutions in Puerto Rico",
    template: "%s | DARV Digital"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "DARV Digital",
    "Puerto Rico web design",
    "local business websites",
    "technical web solutions",
    "lead capture websites"
  ],
  openGraph: {
    title: "DARV Digital | Technical Web Solutions in Puerto Rico",
    description: siteConfig.description,
    url: "https://darvdigital.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DARV Digital | Technical Web Solutions in Puerto Rico",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body antialiased`}>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-accent px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
