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
          slides={servicesItems.map((item) => (
            <Box key={item.title} sx={{ flex: "0 0 80%", px: 1 }}>
              <ServiceCard serviceData={item} />
            </Box>
          ))}
        />
      </Stack>
    </Box>
  );
};
