import heroBg from "../../../../public/images/servicos.webp";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { ServicesSelect } from "./ServicesSelect";
import { Animate, IAnimateProps } from "@/components/common/Animate";

export interface IServicesHeroSectionProps {}

export const ServicesHeroSection = (props: IServicesHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      bgImage={heroBg.src}
      mobileContent={
        <Stack alignItems="flex-start" gap={8}>
          <Stack gap={2}>
            <Animate {...h1AnimateProps}>
              <Typography variant="h1" maxWidth="16ch">
                {servicesHeroSectionData.h1}
              </Typography>
            </Animate>

            <Animate {...subtitleAnimateProps}>
              <Typography>{servicesHeroSectionData.subtitle}</Typography>
            </Animate>
          </Stack>

          <Animate {...mobileServicesSelectAnimateProps}>
            <ServicesSelect />
          </Animate>
        </Stack>
      }
      desktopContent={
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
          gap={12}
        >
          <Stack justifyContent="center" alignItems="flex-start" gap={4}>
            <Stack gap={2}>
              <Animate {...h1AnimateProps}>
                <Typography variant="h1" maxWidth="19ch">
                  {servicesHeroSectionData.h1}
                </Typography>
              </Animate>

              <Animate {...subtitleAnimateProps}>
                <Typography maxWidth="40ch">
                  {servicesHeroSectionData.subtitle}
                </Typography>
              </Animate>
            </Stack>
          </Stack>

          <Box sx={{ flex: "0 0 30rem" }}>
            <Animate {...desktopServicesSelectAnimateProps}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  color: "white",
                }}
              >
                <ServicesSelect />
              </Paper>
            </Animate>
          </Box>
        </Stack>
      }
    />
  );
};

export const servicesHeroSectionData = {
  h1: `Encontre a solução certa para o seu sucesso`,
  subtitle: `Soluções sob medida para quem quer crescer com estrutura, credibilidade e estilo.`,
  selectLabel: "Selecione o que você busca:",

  buttonText: "Conhecer",
  bgImage: heroBg.src,
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

const servicesSelectAnimateProps: IAnimateProps = {
  transition: {
    duration: 2,
    type: "spring",
    delay: 0.4,
  },
  style: {
    width: "100%",
  },
};

const mobileServicesSelectAnimateProps: IAnimateProps = {
  ...servicesSelectAnimateProps,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
};

const desktopServicesSelectAnimateProps: IAnimateProps = {
  ...servicesSelectAnimateProps,
  animate: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: -20 },
};
