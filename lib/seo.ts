import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";

type MetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: MetaInput): Metadata {
  const url = `https://darvdigital.com${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
