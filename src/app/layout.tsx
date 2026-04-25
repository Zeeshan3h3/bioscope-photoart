import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Bioscope Photo Art | Best Photographer in Kolkata",
  description: "Bioscope Photo Art — Capturing the joy of life. Specializing in wedding, pre-wedding, baby, maternity, and event photography in Kolkata, West Bengal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable} font-sans antialiased text-darkGrey bg-pureWhite`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
