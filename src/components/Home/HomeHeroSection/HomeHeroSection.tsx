import heroBg from "../../../../public/images/hero.jpg";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Button, Stack, Typography } from "@mui/material";

export interface IHomeHeroSectionProps {}

export const HomeHeroSection = (props: IHomeHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      mobileContent={
        <Stack alignItems="flex-start" gap={4}>
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="16ch">
              {heroSectionData.h1}
            </Typography>

            <Typography>{heroSectionData.subtitle}</Typography>
          </Stack>

          <Stack
            gap={1}
            sx={{ position: "relative", zIndex: 1, width: "100%" }}
          >
            <Button variant="contained">agendar visita</Button>
            <Button variant="outlined">Descubra o xyz</Button>
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
            <Button variant="contained">agendar visita</Button>
            <Button variant="outlined">Descubra o xyz</Button>
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
