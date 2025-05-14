import heroBg from "../../../../public/images/home-hero.webp";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Box, Stack, Typography } from "@mui/material";
import { HomeHeroSectionButtons } from "./HomeHeroSectionButtons";
import { Animate } from "@/components/common/Animate";
import { WordsPullUp } from "@/components/common/WordsPullUp";

export interface IHomeHeroSectionProps {}

export const HomeHeroSection = (props: IHomeHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      mobileContent={
        <Stack alignItems="flex-start" gap={4}>
          <Stack gap={2}>
            <WordsPullUp text={heroSectionData.h1} props={{ variant: "h1" }} />
            {/* <Animate
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h1" maxWidth="16ch">
                {heroSectionData.h1}
              </Typography>
            </Animate> */}
            <WordsPullUp initialDelay={0.5} text={heroSectionData.subtitle} />

            {/* <Typography>{heroSectionData.subtitle}</Typography> */}
          </Stack>

          <Stack
            gap={1}
            sx={{ position: "relative", zIndex: 1, width: "100%" }}
          >
            <HomeHeroSectionButtons />
          </Stack>
        </Stack>
      }
      desktopContent={
        <Stack justifyContent="center" gap={4} height="100%">
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="30ch">
              {heroSectionData.h1}
            </Typography>

            <Typography maxWidth="60ch">{heroSectionData.subtitle}</Typography>
          </Stack>

          <Stack
            gap={1}
            direction="row"
            sx={{ position: "relative", zIndex: 1, width: "100%" }}
          >
            <HomeHeroSectionButtons />
          </Stack>
        </Stack>
      }
      bgImage={heroBg.src}
    />
  );
};

export const heroSectionData = {
  h1: `Seu escritório de alto padrão, no coração de Balneário Camboriú`,
  subtitle: `Espaços projetados para refletir o sucesso de sua empresa, combinando design moderno, infraestrutura de ponta e a melhor localização em Balneário Camboriú. Feito para quem busca excelência.`,
  image: heroBg.src,
};
