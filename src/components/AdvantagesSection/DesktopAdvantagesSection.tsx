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
          alignItems="center"
          sx={{
            px: 4,
          }}
        >
          <Stack gap={2} alignItems="center" width="100%">
            <Typography textAlign="center" maxWidth="25ch" variant="h2">
              {advantageSectionData.h2}
            </Typography>

            <Typography textAlign="center" maxWidth="46ch">
              {advantageSectionData.subtitle}
            </Typography>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={8}>
            {advantageSectionData.advantageItems.map((item) => (
              <Stack key={item.title}>
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

          <Button variant="contained">agendar visita</Button>
        </Stack>
      </Container>
    </Box>
  );
};
