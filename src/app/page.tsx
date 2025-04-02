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
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
