"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { MobileServiceCard } from "./MobileServiceCard";
import { services } from "@/data/balneario-camboriu/services";
import { Carousel } from "@/components/Carousel/Carousel";

export interface IMobileServicesSectionProps {}

export const MobileServicesSection = (props: IMobileServicesSectionProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        scrollSnapAlign: "center",
      }}
    >
      <Stack gap={4}>
        <Container>
          <Stack gap={2} alignItems="center">
            <Typography textAlign="center" variant="h2" maxWidth="20ch">
              Tudo o que você precisa para crescer
            </Typography>

            <Typography textAlign="center">
              Do endereço fiscal à sala privativa — escolha o serviço que faz
              sentido pro seu negócio.
            </Typography>
          </Stack>
        </Container>

        <Carousel
          options={{ loop: true, align: "center" }}
          slides={({ selectedIndex }) =>
            services.map((item, index) => (
              <Box key={item.title} sx={{ flex: "0 0 80%", px: 1 }}>
                <MobileServiceCard serviceData={item} />
              </Box>
            ))
          }
        />
      </Stack>
    </Box>
  );
};
