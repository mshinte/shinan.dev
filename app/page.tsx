import Ambient from "./components/Ambient";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
//import SectionHomeCards from "./components/SectionHomeCards";
import Topbar from "./components/Topbar";

export default function HomePage() {
  return (
    <>
      <Ambient />
      <Topbar />
      <main>
        <SectionHero />
      </main>
      <Footer />
    </>
  );
}
