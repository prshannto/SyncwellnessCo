import type { Metadata } from "next";
import { Bowlby_One, DM_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";

const bowlby = Bowlby_One({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Women's Health & Hormone Coaching`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Certified Women's Health Coach helping busy women balance hormones, heal their gut, and lose weight naturally. Sustainable hormone-focused wellness programs.",
  keywords: siteConfig.seoKeywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Women's Health & Hormone Coaching`,
    description:
      "Helping women balance hormones, heal their gut & lose weight naturally — without extreme dieting.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Women's Health Coaching`,
    description:
      "Sustainable hormone-focused wellness programs for busy women.",
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
    <html lang="en" className={`${bowlby.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-cream font-sans text-sage-800 antialiased">
        {children}
      </body>
    </html>
  );
}
