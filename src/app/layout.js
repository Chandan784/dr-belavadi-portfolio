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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔹 Basic SEO */}
        <title>Dr. Prashanth Belavadi | Ayurveda & Healthcare</title>
        <meta
          name="description"
          content="Dr. Prashanth Belavadi is an Ayurveda & healthcare expert blending ancient Indian medicine with modern healthcare solutions."
        />
        <meta
          name="keywords"
          content="Dr Prashanth Belavadi, Ayurveda Doctor, Holistic Healthcare, Natural Healing, Bangalore Ayurveda"
        />
        <meta name="author" content="Dr. Prashanth Belavadi" />
        <meta name="creator" content="Applute Technologies Private Limited" />
        <meta name="publisher" content="Applute Technologies Private Limited" />

        {/* 🔹 Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔹 Favicon / Tab Icon */}
        <link
          rel="icon"
          href="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
        />

        {/* 🔹 Open Graph (WhatsApp / Facebook / LinkedIn) */}
        <meta
          property="og:title"
          content="Dr. Prashanth Belavadi | Ayurveda & Healthcare"
        />
        <meta
          property="og:description"
          content="Official portfolio of Dr. Prashanth Belavadi – Ayurveda & holistic healthcare expert."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drprashantbelavadi.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* 🔹 Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Prashanth Belavadi | Ayurveda & Healthcare"
        />
        <meta
          name="twitter:description"
          content="Ayurveda expert blending ancient wisdom with modern healthcare."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* 🔹 Theme Color */}
        <meta name="theme-color" content="#4f46e5" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
