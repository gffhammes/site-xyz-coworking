"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { servicesItems } from "./ServicesSection";
import { DesktopServiceCard } from "./DesktopServiceCard";

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
        <Stack gap={4} direction="row" alignItems="flex-start">
          <Stack
            gap={2}
            sx={{ flex: "0 0 auto", position: "sticky", top: "30svh", py: 4 }}
          >
            <Typography variant="h2" maxWidth="20ch">
              Tudo o que você precisa para crescer
            </Typography>

            <Typography maxWidth="38ch">
              Do endereço fiscal à sala privativa — escolha o serviço que faz
              sentido pro seu negócio.
            </Typography>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr" gap={4}>
            {servicesItems.map((item, index) => (
              <Box key={item.title}>
                <DesktopServiceCard serviceData={item} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
