import { CharacteristicsSection } from "@/components/CharacteristicsSection/CharacteristicsSection";
import { ScrollSection } from "@/components/DifferentialsSection/DifferentialsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PhraseSection } from "@/components/PhraseSection/PhraseSection";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10 }}>
          <HeroSection />

          <PhraseSection />

          <ScrollSection />

          <CharacteristicsSection />

          <Box sx={{ height: "300svh" }} />
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
