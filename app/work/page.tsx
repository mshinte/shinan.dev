import Ambient from "../components/Ambient";
import Footer from "../components/Footer";
import SectionWork from "../components/SectionWork";
import Topbar from "../components/Topbar";

export default function WorkPage() {
  return (
    <>
      <Ambient />
      <Topbar />
      <main>
        <SectionWork />
      </main>
      <Footer />
    </>
  );
}
