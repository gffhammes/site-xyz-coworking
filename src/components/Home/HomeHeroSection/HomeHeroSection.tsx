import heroBg from "../../../../public/images/home-hero.webp";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Stack, Typography } from "@mui/material";
import { HomeHeroSectionButtons } from "./HomeHeroSectionButtons";
import { Animate, IAnimateProps } from "@/components/common/Animate";

export interface IHomeHeroSectionProps {}

export const HomeHeroSection = (props: IHomeHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      mobileContent={
        <Stack alignItems="flex-start" gap={4}>
          <Stack gap={2}>
            {/* <Animate {...h1AnimateProps}> */}
            <Typography variant="h1" maxWidth="16ch">
              {heroSectionData.h1}
            </Typography>
            {/* </Animate> */}

            <Animate {...subtitleAnimateProps}>
              <Typography>{heroSectionData.subtitle}</Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <HomeHeroSectionButtons />
            </Stack>
          </Animate>
        </Stack>
      }
      desktopContent={
        <Stack justifyContent="center" gap={4} height="100%">
          <Stack gap={2}>
            <Animate {...h1AnimateProps}>
              <Typography variant="h1" maxWidth="30ch">
                {heroSectionData.h1}
              </Typography>
            </Animate>

            <Animate {...subtitleAnimateProps}>
              <Typography maxWidth="60ch">
                {heroSectionData.subtitle}
              </Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              direction="row"
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <HomeHeroSectionButtons />
            </Stack>
          </Animate>
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

const h1AnimateProps: IAnimateProps = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: {
    duration: 1,
    type: "spring",
  },
};

const subtitleAnimateProps: IAnimateProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
  transition: {
    duration: 1,
    type: "spring",
    delay: 0.25,
  },
};

const buttonsAnimateProps: IAnimateProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
  transition: {
    duration: 1,
    type: "spring",
    delay: 0.5,
  },
  style: {
    width: "100%",
  },
};
