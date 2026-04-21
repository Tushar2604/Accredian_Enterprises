import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enterprise.accredian.com"),
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "upskilling",
    "L&D platform",
    "IIT programs",
    "IIM programs",
    "data science training",
    "leadership programs",
    "workforce development",
    "Accredian Enterprise",
  ],
  authors: [{ name: "Accredian" }],
  creator: "Accredian",
  publisher: "Accredian",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description:
      "Partner with IITs, IIMs, and global universities to upskill your enterprise teams with programs that deliver measurable ROI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description:
      "India's most trusted enterprise L&D platform. 500+ enterprise clients. 98% satisfaction.",
    images: ["/og-image.png"],
    creator: "@accredian",
  },
  alternates: {
    canonical: "https://enterprise.accredian.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1B2D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
