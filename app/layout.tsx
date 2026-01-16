import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep fonts if user wants them, but check index.css fonts
import "@/index.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexa UI Kit - Modern, Copy-Paste UI Components",
    template: "%s | Nexa UI Kit",
  },
  description:
    "A collection of beautiful, reusable, and accessible UI components built with Radix UI and Tailwind CSS.",
  metadataBase: new URL("https://nexa-ui-kit.com"), // Replace with actual domain
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "UI Kit",
  ],
  authors: [{ name: "Nexa Team" }],
  creator: "Nexa Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexa-ui-kit.com",
    title: "Nexa UI Kit",
    description:
      "A collection of beautiful, reusable, and accessible UI components built with Radix UI and Tailwind CSS.",
    siteName: "Nexa UI Kit",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add an og-image.jpg to public folder at some point
        width: 1200,
        height: 630,
        alt: "Nexa UI Kit - Modern components for React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa UI Kit",
    description:
      "A collection of beautiful, reusable, and accessible UI components built with Radix UI and Tailwind CSS.",
    images: ["/og-image.jpg"],
    creator: "@nexauikit",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
