import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ScrollSection } from "@/components/DifferentialsSection/DifferentialsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PhraseSection } from "@/components/PhraseSection/PhraseSection";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10 }}>
          <HeroSection />

          <PhraseSection />

          <ScrollSection />

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
