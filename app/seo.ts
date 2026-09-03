import type { Metadata } from "next";

const SITE_NAME = "Mehran Arzani";
const SOCIAL_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Mehran Arzani — Battery Engineer and Energy Storage Researcher",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
