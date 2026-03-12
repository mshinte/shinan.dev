import Ambient from "../components/Ambient";
import Footer from "../components/Footer";
import SectionAbout from "../components/SectionAbout";
import Topbar from "../components/Topbar";

export default function AboutPage() {
  return (
    <>
      <Ambient />
      <Topbar />
      <main>
        <SectionAbout />
      </main>
      <Footer />
    </>
  );
}
