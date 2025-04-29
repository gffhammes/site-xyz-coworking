"use client";

import {
  Box,
  Button,
  Container,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { servicesHeroSectionData } from "./ServicesHeroSection";
import Image from "next/image";
import { ServicesSelect } from "./ServicesSelect";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";

export interface IMobileServicesHeroSectionProps {}

export const MobileServicesHeroSection = (
  props: IMobileServicesHeroSectionProps
) => {
  return (
    <Box style={{ height: "110svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "100svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pt: 4,
            pb: 8,
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack
              gap={8}
              sx={{ height: "100%" }}
              justifyContent="space-between"
            >
              <XYZLogoWithLink width="5rem" color="white" />

              <Stack alignItems="flex-start" gap={8}>
                <Stack gap={2}>
                  <Typography variant="h1" maxWidth="16ch">
                    {servicesHeroSectionData.h1}
                  </Typography>

                  <Typography>{servicesHeroSectionData.subtitle}</Typography>
                </Stack>

                <ServicesSelect />
              </Stack>
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
            background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,1))",
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
          height: "10svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "5rem 5rem 0 0",
        }}
      />
    </Box>
  );
};
