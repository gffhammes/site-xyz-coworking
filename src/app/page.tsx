import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PhraseSection } from "@/components/PhraseSection/PhraseSection";
import { Box, Stack } from "@mui/material";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { DifferentialSection } from "@/components/DifferentialsSection/DifferentialSection";
import { NewDifferentialSection } from "@/components/DifferentialsSection/NewDifferentialSection";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10 }}>
          <HeroSection />

          <PhraseSection />

          {/* <NewDifferentialSection /> */}

          <Stack>
            <ServicesSection />

            <AdvantagesSection />

            <ReviewsSection />
          </Stack>
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
