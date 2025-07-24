"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { MobileServiceCard } from "./MobileServiceCard";
import { Carousel } from "@/components/Carousel/Carousel";
import { Animate } from "@/components/common/Animate";
import { siteData } from "@/data/sites";

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
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center" variant="h2">
                Tudo o que você
                <br />
                precisa para crescer
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center">
                Do endereço fiscal à sala privativa — escolha
                <br />o serviço que faz sentido pro seu negócio.
              </Typography>
            </Animate>
          </Stack>
        </Container>

        <Animate
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 2, type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30%" }}
        >
          <Carousel
            options={{ loop: true, align: "center" }}
            slides={({ selectedIndex }) =>
              siteData.services.map((item, index) => (
                <Box key={item.title} sx={{ flex: "0 0 80%", px: 1 }}>
                  <MobileServiceCard serviceData={item} />
                </Box>
              ))
            }
          />
        </Animate>
      </Stack>
    </Box>
  );
};
