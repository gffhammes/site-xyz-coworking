import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { advantageSectionData } from "./AdvantagesSection";

export interface IMobileAdvantagesSectionProps {}

export const MobileAdvantagesSection = (
  props: IMobileAdvantagesSectionProps
) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 1, pt: 5, pb: 10 }}
      >
        <Stack gap={4} alignItems="flex-start">
          <Stack gap={2}>
            <Typography variant="h2">{advantageSectionData.h2}</Typography>

            <Typography>{advantageSectionData.subtitle}</Typography>
          </Stack>

          <Stack gap={4} direction={{ xs: "column" }}>
            {advantageSectionData.advantageItems.map((item) => (
              <Box
                key={item.title}
                display="grid"
                gridTemplateColumns="min-content auto"
                gridTemplateRows="auto auto"
                alignItems="center"
                gridTemplateAreas={`
                  "icon title"
                  "none desc"
                `}
                columnGap={2}
              >
                <item.Icon fontSize="large" sx={{ gridArea: "icon" }} />

                <Typography sx={{ gridArea: "title" }} fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography sx={{ gridArea: "desc" }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Button variant="contained">agendar visita</Button>
        </Stack>
      </Container>
    </Box>
  );
};
