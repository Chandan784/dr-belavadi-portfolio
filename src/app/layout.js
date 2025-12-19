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

export const metadata = {
  title: "Dr. Prashanth Belavadi – Ayurveda & Healthcare",
  description:
    "Official portfolio of Dr. Prashanth Belavadi, blending Ayurveda and modern healthcare solutions.",
  keywords: [
    "Ayurveda",
    "Healthcare",
    "Dr. Prashanth Belavadi",
    "Portfolio",
    "Wellness",
  ],
  authors: [
    { name: "Dr. Prashanth Belavadi", url: "https://your-website.com" },
  ],
  creator: "Applute Technologies Private Limited",
  openGraph: {
    title: "Dr. Prashanth Belavadi – Ayurveda & Healthcare",
    description:
      "Official portfolio of Dr. Prashanth Belavadi, blending Ayurveda and modern healthcare solutions.",
    url: "https://your-website.com",
    siteName: "Dr. Prashanth Belavadi",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prashanth Belavadi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Prashanth Belavadi – Ayurveda & Healthcare",
    description: "Official portfolio of Dr. Prashanth Belavadi.",
    images: ["https://your-website.com/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
};

export default function RootLayout({ children }) {
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
