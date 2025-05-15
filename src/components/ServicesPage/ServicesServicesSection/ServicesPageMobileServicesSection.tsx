import { Box, Container, Stack, Typography } from "@mui/material";
import { ServicesPageServiceCard } from "./ServicesPageServiceCard";
import { ServicesIntroduction } from "../ServicesIntroduction/ServicesIntroduction";
import { services } from "@/data/balneario-camboriu/services/services";
import { balnearioData } from "@/data/balneario-camboriu/balneario-camboriu";
import { Animate } from "@/components/common/Animate";

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
            {balnearioData.services.map((item, index) => (
              <Animate
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 2, type: "spring" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30%" }}
              >
                <Box
                  flex={{ xs: "0 0 100%", md: "0 0 20rem" }}
                  height="100%"
                  id={item.slug}
                  sx={{ scrollMarginTop: "10svh" }}
                >
                  <ServicesPageServiceCard serviceData={item} />
                </Box>
              </Animate>
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
