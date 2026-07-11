import type { Metadata } from "next";
import SectionHero from "./components/SectionHero";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <SectionHero />;
}
