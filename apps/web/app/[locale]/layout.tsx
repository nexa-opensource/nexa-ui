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
  metadataBase: new URL("https://nexa-ui.com"), // Replace with actual domain
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
    url: "https://nexa-ui.com",
    title: "Nexa UI",
    description:
      "A collection of beautiful, reusable, and accessible UI components built with Radix UI and Tailwind CSS.",
    siteName: "Nexa UI",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add an og-image.jpg to public folder at some point
        width: 1200,
        height: 630,
        alt: "Nexa UI - Modern components for React",
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

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
