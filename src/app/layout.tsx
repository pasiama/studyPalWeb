import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "StudyPal | Your AI-Powered Learning Companion",
    template: "%s | StudyPal",
  },
  description: "Master any subject with StudyPal, the premium AI education platform. Personalized tutoring, interactive assessments, and futuristic learning tools.",
  keywords: ["AI education", "study pal", "personalized learning", "AI tutor", "student tools"],
  authors: [{ name: "StudyPal Team" }],
  creator: "StudyPal",
  openGraph: {
    title: "StudyPal | Your AI-Powered Learning Companion",
    description: "Master any subject with StudyPal, the premium AI education platform.",
    url: "https://studypal.ai",
    siteName: "StudyPal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StudyPal Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyPal | Your AI-Powered Learning Companion",
    description: "The future of education is here.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary",
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

