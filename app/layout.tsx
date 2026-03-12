import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
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
  title: "Shinan — Gen Z Web Portfolio",
  description:
    "Gen Z portfolio for Shinan: product, design, and code with bold aesthetics and real-world focus."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-base font-sans text-ink leading-relaxed overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
