import type { Metadata } from "next";
import SectionWork from "../components/SectionWork";

export const metadata: Metadata = {
  title: "Experience | Mohamed Shinan",
  description:
    "Selected projects and experience from Mohamed Shinan across web apps, product interfaces, and frontend delivery."
};

export default function ExperiencePage() {
  return <SectionWork />;
}
