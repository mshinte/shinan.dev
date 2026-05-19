import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Ambient from "./components/Ambient";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mohamed Shinan",
  description:
    "Portfolio for Shinan: product, design, and code with bold aesthetics and real-world focus."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col bg-base font-sans text-ink leading-relaxed overflow-x-hidden`}>
        <Ambient />
        <Topbar />
        <main className="flex-1 pt-[104px] sm:pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
