import type { Metadata } from "next";
import SectionStack from "../components/SectionStack";

export const metadata: Metadata = {
  title: "Stack | Mohamed Shinan",
  description:
    "The design, frontend, product, and delivery stack Mohamed Shinan uses to build responsive web experiences."
};

export default function StackPage() {
  return <SectionStack />;
}
