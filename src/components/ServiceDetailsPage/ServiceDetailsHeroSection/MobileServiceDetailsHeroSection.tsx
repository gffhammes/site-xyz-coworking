"use client";

import {
  Box,
  Button,
  Container,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";
import { IServiceServiceItem } from "@/data/services";

export interface IMobileServiceDetailsHeroSectionProps {
  service: IServiceServiceItem;
}

export const MobileServiceDetailsHeroSection = ({
  service,
}: IMobileServiceDetailsHeroSectionProps) => {
  return (
    <Box style={{ height: "100svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "95svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pt: 4,
            pb: 4,
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
                  <Typography variant="h1">
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
                    {service.detailsPage.h1.replaceAll("<br/>", " ")}
                  </Typography>

                  <Typography>
                    {service.detailsPage.subtitle.replaceAll("<br/>", " ")}
                  </Typography>
                </Stack>

                <Stack width="100%" gap={1}>
                  <Button variant="contained">
                    {service.detailsPage.heroCTAText}
                  </Button>
                  <Button variant="outlined">CONHECER MAIS</Button>
                </Stack>

                {/* <ServicesSelect /> */}
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

        <Image fill src={service.image} alt="Hero" objectFit="cover" priority />
      </Box>

      <Box
        sx={{
          height: "5svh",
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
