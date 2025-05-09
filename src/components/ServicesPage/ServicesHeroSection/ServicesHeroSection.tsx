import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import heroBg from "../../../../public/images/business-people-office-break.jpg";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { ServicesSelect } from "./ServicesSelect";

export interface IServicesHeroSectionProps {}

export const ServicesHeroSection = (props: IServicesHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      bgImage={heroBg.src}
      mobileContent={
        <Stack alignItems="flex-start" gap={8}>
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="16ch">
              {servicesHeroSectionData.h1}
            </Typography>

            <Typography>{servicesHeroSectionData.subtitle}</Typography>
          </Stack>

          <ServicesSelect />
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
              <Typography variant="h1" maxWidth="19ch">
                {servicesHeroSectionData.h1}
              </Typography>

              <Typography maxWidth="40ch">
                {servicesHeroSectionData.subtitle}
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{ flex: "0 0 30rem" }}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "white",
              }}
            >
              <ServicesSelect />
            </Paper>
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
