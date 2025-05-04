"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { servicesHeroSectionData } from "./ServicesHeroSection";
import Image from "next/image";
import { XYZLogo } from "@/components/common/XYZLogo";
import { NavigationList } from "@/components/common/NavigationList";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";
import { ServicesSelect } from "./ServicesSelect";

export interface IDesktopServicesHeroSectionProps {}

export const DesktopServicesHeroSection = (
  props: IDesktopServicesHeroSectionProps
) => {
  return (
    <Box style={{ height: "110svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "90svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            py: 8,
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack direction="row" justifyContent="space-between">
              <XYZLogoWithLink width="5rem" color="white" />

              <NavigationList theme="dark" />
            </Stack>

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
          </Container>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image
          fill
          src={servicesHeroSectionData.bgImage}
          alt="Hero"
          objectFit="cover"
          priority
        />
      </Box>

      <Box
        sx={{
          height: "20svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "20rem 20rem 0 0",
        }}
      />
    </Box>
  );
};
