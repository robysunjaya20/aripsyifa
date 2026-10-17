
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "Happy Birthday, Sayang!!",
  description: "A special birthday gift for You ❤️",

  openGraph: {
    title: "Happy Birthday, Sayang!! ❤️",
    description: "A special birthday gift for You ❤️",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 2130,
        alt: "Happy Birthday, Sayang!!",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Sayang!! ❤️",
    description: "A special birthday gift for You ❤️",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
