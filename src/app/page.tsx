import { PhraseSection } from "@/components/Home/PhraseSection/PhraseSection";
import { Stack } from "@mui/material";
import { DifferentialSection } from "@/components/Home/DifferentialsSection/DifferentialSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import { ServicesSection } from "@/components/Home/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10, md: 20 }}>
          <Stack>
            <HeroSection />

            <PhraseSection />
          </Stack>

          <Stack gap={20} sx={{ pb: { xs: 0, md: 20 } }}>
            <ServicesSection />

            <AdvantagesSection />

            <DifferentialSection />

            <ReviewsSection />
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
