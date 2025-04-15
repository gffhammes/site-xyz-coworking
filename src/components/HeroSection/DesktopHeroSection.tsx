import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";
import { heroSectionData } from "./HeroSection";
import { HeroSectionImage } from "./HeroSectionImage";

export interface IDesktopHeroSectionProps {}

export const DesktopHeroSection = (props: IDesktopHeroSectionProps) => {
  return (
    <Stack sx={{ width: "100%", overflow: "hidden", pt: 8 }}>
      <Container>
        <Stack direction="row" gap={4}>
          <Stack gap={20}>
            <XYZLogo width="12rem" />

            <Stack alignItems="flex-start" gap={4} pb={20}>
              <Stack gap={2}>
                <Typography variant="h1" textTransform="uppercase">
                  {heroSectionData.h1}
                </Typography>

                <Typography fontSize={24}>
                  {heroSectionData.subtitle}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                gap={1}
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Button variant="contained">Entre em contato</Button>
                <Button variant="outlined" color="inherit">
                  CONHEÇA MAIS
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Box flex="0 0 40%" sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                display: "flex",
              }}
            >
              <HeroSectionImage height="100%" margin={{}} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
