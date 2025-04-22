import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PhraseSection } from "@/components/PhraseSection/PhraseSection";
import { Stack } from "@mui/material";
import { DifferentialSection } from "@/components/DifferentialsSection/DifferentialSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10 }}>
          <Stack>
            <HeroSection />

            <PhraseSection />

            <DifferentialSection />
          </Stack>

          <Stack gap={8} sx={{ pb: { xs: 0, md: 10 } }}>
            <ServicesSection />

            <AdvantagesSection />

            <ReviewsSection />
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
