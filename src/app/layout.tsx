import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "StudyPal | AI-Powered Learning for JHS & SHS Students in Ghana",
  description: "StudyPal helps students in Ghana practice for BECE and WASSCE with AI tutoring, essay marking, and personalized learning insights.",
  keywords: ["BECE", "WASSCE", "Ghana Education", "AI Tutor", "StudyPal", "JHS", "SHS", "Exam Preparation"],
  openGraph: {
    title: "StudyPal | AI-Powered Learning for Ghana",
    description: "The leading AI educational ecosystem in Ghana. Practice exams, track progress, and improve faster.",
    url: "https://studypal.edu.gh",
    siteName: "StudyPal",
    images: [
      {
        url: "/og-image.jpg", // User should add this image later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GH",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
