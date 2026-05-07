import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionHero from "./components/SectionHero";
import SectionStack from "./components/SectionStack";
import SectionWork from "./components/SectionWork";
//import SectionHomeCards from "./components/SectionHomeCards";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionWork />
      <SectionStack />
      <SectionContact />
    </>
  );
}
