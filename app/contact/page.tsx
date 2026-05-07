import type { Metadata } from "next";
import SectionContact from "../components/SectionContact";

export const metadata: Metadata = {
  title: "Contact | Mohamed Shinan",
  description:
    "Contact Mohamed Shinan for portfolio inquiries, web design, frontend builds, and product-focused digital experiences."
};

export default function ContactPage() {
  return <SectionContact />;
}
