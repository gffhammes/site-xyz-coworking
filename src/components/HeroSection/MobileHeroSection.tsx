import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";
import { HeroSectionImage } from "./HeroSectionImage";

export interface IMobileHeroSectionProps {}

export const MobileHeroSection = (props: IMobileHeroSectionProps) => {
  return (
    <Stack
      sx={{ width: "100%", overflow: "hidden", pt: 4, alignItems: "flex-end" }}
    >
      <Container>
        <Stack gap={8}>
          <XYZLogo width="7rem" />

          <Stack alignItems="flex-start" gap={4}>
            <Stack gap={2}>
              <Typography variant="h1" textTransform="uppercase">
                {data.h1}
              </Typography>

              <Typography>{data.subtitle}</Typography>
            </Stack>

            <Button variant="contained">CONHEÇA MAIS</Button>
          </Stack>
        </Stack>
      </Container>

      <HeroSectionImage width="20rem" />
    </Stack>
  );
};

const data = {
  h1: `Seu Escritório de Alto Padrão em Balneário Camboriú`,
  subtitle: `Um espaço que transmite credibilidade, impulsiona sua produtividade e conecta você a grandes oportunidades. Trabalhe no melhor coworking de BC!`,
};
