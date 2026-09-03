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
    default: "Mehran Arzani | Battery Engineer & Energy Storage Researcher",
    template: "%s | Mehran Arzani",
  },
  description: "Mehran Arzani is a battery engineer and chemical engineering researcher specializing in electrode processing, lithium–oxygen batteries, advanced electrolytes, battery diagnostics, and scalable manufacturing.",
  authors: [{ name: "Mehran Arzani", url: "https://mehranarzani.com" }],
  creator: "Mehran Arzani",
  publisher: "Mehran Arzani",
  category: "science",
  keywords: [
    "Mehran Arzani",
    "battery engineer",
    "battery researcher",
    "battery engineering",
    "energy storage",
    "electrolyte engineering",
    "electrode fabrication",
    "electrode slurry formulation",
    "electrode coating and calendering",
    "battery diagnostics",
    "lithium metal batteries",
    "lithium oxygen batteries",
    "porous liquid electrolytes",
    "battery manufacturing and process engineering",
    "ceramic membranes",
    "metal-organic frameworks",
    "chemical engineering",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://mehranarzani.com",
    siteName: "Mehran Arzani",
    locale: "en_US",
    title: "Mehran Arzani | Battery Engineer & Energy Storage Researcher",
    description: "Battery and chemical engineering research spanning electrode fabrication, electrolyte engineering, electrochemical interfaces, diagnostics, and next-generation energy storage.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mehran Arzani — Battery Engineer & Energy Storage Researcher" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehran Arzani | Battery Engineer & Energy Storage Researcher",
    description: "Battery and chemical engineering research spanning electrode fabrication, electrolyte engineering, electrochemical interfaces, diagnostics, and next-generation energy storage.",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
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
      image: "https://mehranarzani.com/mehran-arzani-portrait.png",
      jobTitle: "Battery Engineer and Chemical Engineering Researcher",
      description: "Battery engineer specializing in electrode processing, advanced electrolytes, lithium–oxygen batteries, electrochemical diagnostics, and scalable manufacturing.",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University of Illinois Chicago",
        url: "https://www.uic.edu/",
      },
      sameAs: [
        "https://orcid.org/0000-0001-5603-7775",
        "https://www.linkedin.com/in/mehran-arzani-b9228624b/",
        "https://scholar.google.com/citations?user=kx_AgWsAAAAJ&hl=en",
      ],
      knowsAbout: [
        "Battery engineering",
        "Electrolyte engineering",
        "Electrode fabrication",
        "Electrode slurry formulation",
        "Electrode coating and calendering",
        "Electrochemical energy storage",
        "Lithium-metal batteries",
        "Lithium–oxygen batteries",
        "Porous-liquid electrolytes",
        "Battery manufacturing and process engineering",
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
      name: "Mehran Arzani | Battery Engineer & Energy Storage Researcher",
      inLanguage: "en-US",
      author: { "@id": "https://mehranarzani.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mehranarzani.com/#profile",
      url: "https://mehranarzani.com",
      name: "Mehran Arzani — Battery Engineer & Energy Storage Researcher",
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
