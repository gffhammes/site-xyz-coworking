import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PhraseSection } from "@/components/PhraseSection/PhraseSection";
import { Stack } from "@mui/material";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { NewDifferentialSection } from "@/components/DifferentialsSection/NewDifferentialSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10 }}>
          <Stack>
            <HeroSection />

            <PhraseSection />
          </Stack>

          <NewDifferentialSection />

          <Stack gap={8}>
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
