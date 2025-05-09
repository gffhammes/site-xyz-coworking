import { PhraseSection } from "@/components/Home/PhraseSection/PhraseSection";
import { Stack } from "@mui/material";
import { DifferentialSection } from "@/components/Home/DifferentialsSection/DifferentialSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { HomeHeroSection } from "@/components/Home/HomeHeroSection/HomeHeroSection";
import { ServicesSection } from "@/components/Home/ServicesSection/ServicesSection";
import { MapSection } from "@/components/MapSection/MapSection";

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
            <ServicesSection />

            <AdvantagesSection />

            <DifferentialSection />

            <ReviewsSection />

            <MapSection />
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
