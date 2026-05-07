import type { Metadata } from "next";
import SectionAbout from "../components/SectionAbout";

export const metadata: Metadata = {
  title: "About | Mohamed Shinan",
  description:
    "Learn about Mohamed Shinan's approach to component-first web experiences, product thinking, and motion-led frontend work."
};

export default function AboutPage() {
  return <SectionAbout />;
}
