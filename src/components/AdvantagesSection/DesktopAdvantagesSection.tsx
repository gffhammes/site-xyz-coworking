import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { advantageSectionData } from "./AdvantagesSection";
import { WhatsappLinkButton } from "../common/WhatsappLinkButton";

export interface IDesktopAdvantagesSectionProps {}

export const DesktopAdvantagesSection = (
  props: IDesktopAdvantagesSectionProps
) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container sx={{ position: "relative", zIndex: 1 }}>
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
                <Box sx={{ fontSize: 48 }}>
                  <item.Icon
                    fontSize="inherit"
                    color="secondary"
                    sx={{ gridArea: "icon" }}
                  />
                </Box>

                <Stack gap={1}>
                  <Typography sx={{ gridArea: "title" }} fontWeight={700}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ gridArea: "desc" }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Box>

          <WhatsappLinkButton
            variant="contained"
            customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
          >
            agendar visita
          </WhatsappLinkButton>
        </Stack>
      </Container>
    </Box>
  );
};
