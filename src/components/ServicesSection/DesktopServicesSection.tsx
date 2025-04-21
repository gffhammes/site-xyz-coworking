"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";
import { ServiceCard } from "./ServiceCard";
import { servicesItems } from "./ServicesSection";

export interface IDesktopServicesSectionProps {}

export const DesktopServicesSection = (props: IDesktopServicesSectionProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        scrollSnapAlign: "center",
        pt: 10,
      }}
    >
      <Container>
        <Stack gap={4}>
          <Stack gap={2} alignItems="center">
            <Typography textAlign="center" variant="h2" maxWidth="20ch">
              Tudo o que você precisa para crescer
            </Typography>

            <Typography textAlign="center" maxWidth="38ch">
              Do endereço fiscal à sala privativa — escolha o serviço que faz
              sentido pro seu negócio.
            </Typography>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4}>
            {servicesItems.map((item, index) => (
              <Box key={item.title}>
                <ServiceCard serviceData={item} isActive />
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
