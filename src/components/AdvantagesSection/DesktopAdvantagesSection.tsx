import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { advantageSectionData } from "./AdvantagesSection";

export interface IDesktopAdvantagesSectionProps {}

export const DesktopAdvantagesSection = (
  props: IDesktopAdvantagesSectionProps
) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container sx={{ position: "relative", zIndex: 1, pt: 5, pb: 10 }}>
        <Stack
          gap={8}
          direction="row"
          alignItems="flex-start"
          sx={{
            px: 4,
          }}
        >
          <Stack gap={2} alignItems="flex-start" sx={{ flex: "1 0 25rem" }}>
            <Typography variant="h2">{advantageSectionData.h2}</Typography>

            <Typography>{advantageSectionData.subtitle}</Typography>

            <Button variant="contained">agendar visita</Button>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4}>
            {advantageSectionData.advantageItems.map((item) => (
              <Stack
                key={item.title}
                // display="grid"
                // gridTemplateColumns="min-content auto"
                // gridTemplateRows="auto auto"
                // alignItems="center"
                // gridTemplateAreas={`
                //   "icon title"
                //   "none desc"
                // `}
                // columnGap={2}
              >
                <item.Icon fontSize="large" sx={{ gridArea: "icon" }} />

                <Typography sx={{ gridArea: "title" }} fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography sx={{ gridArea: "desc" }}>
                  {item.description}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
