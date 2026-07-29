import { metadataFor, jsonLdFor } from "./_lib/content-map";
import { JsonLdBlocks } from "./_lib/JsonLdBlocks";
import { Hero } from "./_ui/home/Hero";
import { CareSlider } from "./_ui/home/CareSlider";
import { ServicesGrid } from "./_ui/home/ServicesGrid";
import { ConditionsCarousel } from "./_ui/home/ConditionsCarousel";
import { CovidNotice } from "./_ui/home/CovidNotice";
import { About } from "./_ui/home/About";
import { DetailedServices } from "./_ui/home/DetailedServices";
import { NutritionistCta } from "./_ui/home/NutritionistCta";
import { LocationMap } from "./_ui/home/LocationMap";

export const metadata = metadataFor("/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/")} />
      <main>
        <Hero />
        <section className="bg-white pt-16 pb-4">
          <div className="container-wide">
            <CareSlider />
          </div>
        </section>
        <ServicesGrid />
        <ConditionsCarousel />
        <CovidNotice />
        <About />
        <DetailedServices />
        <NutritionistCta />
        <LocationMap />
      </main>
    </>
  );
}
