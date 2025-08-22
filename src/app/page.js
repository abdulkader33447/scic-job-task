import HeroSection from "./components/hero/page";
import ProductsSection from "./components/products/ProductsSection";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:mt-60 mt-30">
      <HeroSection />
      <ProductsSection/>
    </div>
  );
}
