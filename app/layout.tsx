import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import ChatAssistant from "./components/ChatAssistant";
import MicroInteractions from "./components/MicroInteractions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehranarzani.com"),
  title: {
    default: "Mehran Arzani | Battery & Energy Storage",
    template: "%s | Mehran Arzani",
  },
  description: "Chemical engineering researcher advancing electrolyte design, ion transport, electrochemical interfaces, and next-generation rechargeable batteries.",
  authors: [{ name: "Mehran Arzani", url: "https://mehranarzani.com" }],
  creator: "Mehran Arzani",
  publisher: "Mehran Arzani",
  category: "science",
  keywords: [
    "Mehran Arzani",
    "battery researcher",
    "battery engineering",
    "energy storage",
    "electrolyte engineering",
    "electrode fabrication",
    "lithium metal batteries",
    "ceramic membranes",
    "metal-organic frameworks",
    "chemical engineering",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://mehranarzani.com",
    siteName: "Mehran Arzani",
    title: "Mehran Arzani | Battery & Energy Storage",
    description: "Chemical engineering researcher advancing electrolyte design, ion transport, electrochemical interfaces, and next-generation rechargeable batteries.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mehran Arzani — Battery & Energy Storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehran Arzani | Battery & Energy Storage",
    description: "Chemical engineering researcher advancing electrolyte design, ion transport, electrochemical interfaces, and next-generation rechargeable batteries.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mehranarzani.com/#person",
      name: "Mehran Arzani",
      url: "https://mehranarzani.com",
      jobTitle: "Chemical Engineering Researcher",
      affiliation: { "@type": "CollegeOrUniversity", name: "University of Illinois Chicago" },
      sameAs: [
        "https://www.linkedin.com/in/mehran-arzani-b9228624b/",
        "https://scholar.google.com/citations?user=kx_AgWsAAAAJ&hl=en",
      ],
      knowsAbout: [
        "Battery engineering",
        "Electrolyte engineering",
        "Electrode fabrication",
        "Electrochemical energy storage",
        "Lithium-metal batteries",
        "Battery diagnostics",
        "Ceramic membranes",
        "Metal-organic frameworks",
        "Electrocatalysis",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mehranarzani.com/#website",
      url: "https://mehranarzani.com",
      name: "Mehran Arzani | Battery & Energy Storage",
      inLanguage: "en-US",
      author: { "@id": "https://mehranarzani.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mehranarzani.com/#profile",
      url: "https://mehranarzani.com",
      name: "Mehran Arzani — Battery & Energy Storage Researcher",
      mainEntity: { "@id": "https://mehranarzani.com/#person" },
      isPartOf: { "@id": "https://mehranarzani.com/#website" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MicroInteractions />
        {children}
        <ChatAssistant />
      </body>
    </html>
  );
}
