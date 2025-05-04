import { Box, Container, Stack, Typography } from "@mui/material";
import { servicesIntroductionData } from "../ServicesIntroduction/ServicesIntroduction";
import { servicesItems } from "@/data/services";
import { DesktopServiceCard } from "@/components/Home/ServicesSection/DesktopServiceCard";

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
            <Typography variant="h2" maxWidth="22ch">
              {servicesIntroductionData.h2}
            </Typography>

            <Typography maxWidth="38ch">
              {servicesIntroductionData.text}
            </Typography>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr" gap={4}>
            {servicesItems.map((item, index) => (
              <Box key={item.title}>
                <DesktopServiceCard serviceData={item} key={item.target} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
