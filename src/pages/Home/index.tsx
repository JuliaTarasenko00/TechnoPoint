import { BrowseByCategory } from "../../components/HomeComponents/BrowseByCategory";
import { DiscountedProducts } from "../../components/HomeComponents/DiscountedProducts";
import { HeroSection } from "../../components/HomeComponents/HeroMarkup";
import { PopularBrands } from "../../components/HomeComponents/PopularBrands";
import { ProductCatalogPreview } from "../../components/HomeComponents/ProductCatalogPreview";
import { TechGallery } from "../../components/HomeComponents/TechGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechGallery />
      <BrowseByCategory />
      <ProductCatalogPreview />
      <PopularBrands />
      <DiscountedProducts />
    </>
  );
}
