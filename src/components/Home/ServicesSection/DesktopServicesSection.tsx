"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { DesktopServiceCard } from "./DesktopServiceCard";
import { Animate } from "@/components/common/Animate";
import { siteData } from "@/data/sites";

export interface IDesktopServicesSectionProps {}

export const DesktopServicesSection = (props: IDesktopServicesSectionProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        scrollSnapAlign: "center",
      }}
    >
      <Container>
        <Stack gap={8} direction="row" alignItems="flex-start">
          <Stack
            gap={2}
            sx={{ flex: "0 0 auto", position: "sticky", top: "30svh", py: 4 }}
          >
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2" maxWidth="20ch">
                Tudo o que você precisa para crescer
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography maxWidth="38ch">
                Do endereço fiscal à sala privativa — escolha o serviço que faz
                sentido pro seu negócio.
              </Typography>
            </Animate>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr" gap={4}>
            {siteData.services.map((item, index) => (
              <Box key={item.title}>
                <Animate
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 2, type: "spring" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    margin: index === 0 ? "-50%" : "-30%",
                  }}
                >
                  <DesktopServiceCard serviceData={item} />
                </Animate>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
