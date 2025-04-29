import { BrowseByCategory } from "../../components/BrowseByCategory";
import { HeroSection } from "../../components/HeroMarkup";
import { TechGallery } from "../../components/TechGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechGallery />
      <BrowseByCategory />
    </>
  );
}
