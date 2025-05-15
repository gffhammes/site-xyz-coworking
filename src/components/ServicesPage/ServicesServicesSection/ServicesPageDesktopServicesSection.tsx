import { Box, Container, Stack, Typography } from "@mui/material";
import { servicesIntroductionData } from "../ServicesIntroduction/ServicesIntroduction";
import { services } from "@/data/balneario-camboriu/services/services";
import { DesktopServiceCard } from "@/components/Home/ServicesSection/DesktopServiceCard";
import { balnearioData } from "@/data/balneario-camboriu/balneario-camboriu";
import { Animate } from "@/components/common/Animate";

export interface IServicesPageDesktopServicesSectionProps {}

export const ServicesPageDesktopServicesSection = (
  props: IServicesPageDesktopServicesSectionProps
) => {
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
              <Typography variant="h2" maxWidth="22ch">
                {servicesIntroductionData.h2}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography maxWidth="38ch">
                {servicesIntroductionData.text}
              </Typography>
            </Animate>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr" gap={4}>
            {balnearioData.services.map((item, index) => (
              <Box key={item.title}>
                <Animate
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 2, type: "spring" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30%" }}
                >
                  <DesktopServiceCard serviceData={item} key={item.slug} />
                </Animate>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
