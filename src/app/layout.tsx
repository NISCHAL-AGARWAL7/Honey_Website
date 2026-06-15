import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BottomContactBar } from "@/components/BottomContactBar";
import { GoDaddyChat } from "@/components/GoDaddyChat";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://auranaturals.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Organic Herbs & Honey | Premium Honey & Shilajit",
    template: "%s | Organic Herbs & Honey",
  },
  description:
    "Experience the healing power of nature with our premium, pure, and natural products including Honey and Shilajit. Lab tested, 100% organic.",
  keywords: [
    "organic honey",
    "raw honey",
    "shilajit",
    "natural wellness",
    "pure honey",
    "herbal products",
    "ayurvedic",
    "auranaturals",
  ],
  authors: [{ name: "Organic Herbs & Honey" }],
  creator: "Organic Herbs & Honey",
  publisher: "Organic Herbs & Honey",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Organic Herbs & Honey",
    title: "Organic Herbs & Honey | Premium Honey & Shilajit",
    description:
      "Experience the healing power of nature with our premium, pure, and natural products including Honey and Shilajit.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Organic Herbs & Honey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Herbs & Honey | Premium Honey & Shilajit",
    description:
      "Experience the healing power of nature with our premium, pure, and natural products including Honey and Shilajit.",
    images: ["/logo.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🔥 Motion System Wrapper */}
          <SmoothScroll>
            {/* <CursorGlow /> */}

            {/* UI */}
            <Navbar />
            <main className="flex-grow pt-[120px] pb-14">
              {children}
            </main>
            <Footer />
            <BottomContactBar />
            <GoDaddyChat />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}