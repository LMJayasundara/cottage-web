import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tunnel Corner Cottage - Luxury Eco Retreat in Ramboda, Sri Lanka",
  description: "Experience tranquility at Tunnel Corner Cottage, a luxury eco-friendly retreat nestled in the lush forests of Ramboda, Sri Lanka. Perfect for nature lovers seeking serenity.",
  keywords: ["cottage", "sri lanka", "ramboda", "eco retreat", "luxury accommodation", "forest retreat", "nature getaway"],
  openGraph: {
    title: "Tunnel Corner Cottage - Luxury Eco Retreat",
    description: "Experience tranquility at our luxury eco-friendly retreat in Ramboda, Sri Lanka",
    images: ["/logo.jpg"],
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
