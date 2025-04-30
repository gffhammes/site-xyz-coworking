"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { XYZLogo } from "@/components/common/XYZLogo";
import { NavigationList } from "@/components/common/NavigationList";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";
import { IServiceServiceItem } from "@/data/services";
import parse from "html-react-parser";

export interface IDesktopServiceDetailsHeroSectionProps {
  service: IServiceServiceItem;
}

export const DesktopServiceDetailsHeroSection = ({
  service,
}: IDesktopServiceDetailsHeroSectionProps) => {
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
              justifyContent="center"
              alignItems="center"
              gap={8}
              sx={{ height: "100%" }}
            >
              <Stack gap={2} alignItems="center">
                <Typography textAlign="center" variant="h1">
                  <strong
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: 1.1,
                      filter: "opacity(.4)",
                    }}
                  >
                    {service.title}
                  </strong>
                  <br />
                  {parse(service.detailsPage.h1)}
                </Typography>

                <Typography textAlign="center">
                  {parse(service.detailsPage.subtitle)}
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <Button variant="contained">
                  {service.detailsPage.heroCTAText}
                </Button>
                <Button variant="outlined">CONHECER MAIS</Button>
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
            background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0, 1))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image fill src={service.image} alt="Hero" objectFit="cover" priority />
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
