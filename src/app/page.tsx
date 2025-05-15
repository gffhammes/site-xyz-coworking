import { PhraseSection } from "@/components/Home/PhraseSection/PhraseSection";
import { Stack } from "@mui/material";
import { HomeHeroSection } from "@/components/Home/HomeHeroSection/HomeHeroSection";
import dynamic from "next/dynamic";

const DynamicServicesSection = dynamic(() =>
  import("../components/Home/ServicesSection/ServicesSection").then(
    (mod) => mod.ServicesSection
  )
);

const DynamicAdvantagesSection = dynamic(() =>
  import("../components/AdvantagesSection/AdvantagesSection").then(
    (mod) => mod.AdvantagesSection
  )
);

const DynamicDifferentialsSection = dynamic(() =>
  import("../components/Home/DifferentialsSection/DifferentialSection").then(
    (mod) => mod.DifferentialSection
  )
);

const DynamicReviewsSection = dynamic(() =>
  import("../components/ReviewsSection/ReviewsSection").then(
    (mod) => mod.ReviewsSection
  )
);

const DynamicMapSection = dynamic(() =>
  import("../components/MapSection/MapSection").then((mod) => mod.MapSection)
);

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10, md: 20 }}>
          <Stack>
            <HomeHeroSection />

            <PhraseSection />
          </Stack>

          <Stack gap={20} sx={{ pb: { xs: 0, md: 0 } }}>
            <DynamicServicesSection />

            <DynamicAdvantagesSection />

            <DynamicDifferentialsSection />

            <DynamicReviewsSection />

            <DynamicMapSection />
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
