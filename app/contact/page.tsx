import Ambient from "../components/Ambient";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import Topbar from "../components/Topbar";

export default function ContactPage() {
  return (
    <>
      <Ambient />
      <Topbar />
      <main>
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
