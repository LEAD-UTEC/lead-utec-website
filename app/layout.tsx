import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEAD UTEC - Building Latin America's Tech Leaders",
  description:
    "LEAD UTEC - Building Latin America's tech leaders. Official student organization at UTEC Peru developing leadership and impact through real projects.",
  keywords: [
    "LEAD UTEC",
    "UTEC student organization",
    "tech leadership Peru",
    "Latin America tech",
    "student projects",
    "STEM leadership",
  ],
  openGraph: {
    title: "LEAD UTEC - Building Latin America's Tech Leaders",
    description:
      "Official student organization at UTEC Peru developing leadership and impact through real projects.",
    type: "website",
    locale: "en_US",
  },
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
        {children}
      </body>
    </html>
  );
}
