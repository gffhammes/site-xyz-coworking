import { Box, Container, Stack, Typography } from "@mui/material";
import { DesktopServiceCard } from "@/components/ServicesSection/DesktopServiceCard";
import { ServicesPageServiceCard } from "./ServicesPageServiceCard";
import { ServicesIntroduction } from "../ServicesIntroduction/ServicesIntroduction";
import { servicesItems } from "@/data/services";

export interface IServicesPageMobileServicesSectionProps {}

export const ServicesPageMobileServicesSection = (
  props: IServicesPageMobileServicesSectionProps
) => {
  return (
    <Stack gap={8}>
      <ServicesIntroduction />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          scrollSnapAlign: "center",
        }}
      >
        <Container>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
            width="100%"
          >
            {servicesItems.map((item, index) => (
              <Box
                key={item.title}
                flex={{ xs: "0 0 100%", md: "0 0 20rem" }}
                height="100%"
                id={item.target}
                sx={{ scrollMarginTop: "10svh" }}
              >
                <ServicesPageServiceCard serviceData={item} />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
