import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay-shivangi.vercel.app"),
  title: "Abhay & Shivani | Engagement Invitation | 18 November 2026",
  description:
    "Join us in celebrating the engagement of Abhay Srivastava and Shivani Srivastava on Wednesday, 18 November 2026, at Rama Resort, Sitapur.",
  keywords: ["engagement", "Abhay Srivastava", "Shivani Srivastava", "Rama Resort", "Sitapur"],
  openGraph: {
    title: "Abhay & Shivani | Engagement Invitation",
    description:
      "You are cordially invited to celebrate the engagement of Abhay Srivastava & Shivani Srivastava — 18 November 2026 at Rama Resort, Sitapur.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhay & Shivani Engagement Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay & Shivani | Engagement Invitation | 18 November 2026",
    description:
      "You are cordially invited to celebrate the engagement of Abhay Srivastava & Shivani Srivastava.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C99A54",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-[#FFF5E6]">{children}</body>
    </html>
  );
}
