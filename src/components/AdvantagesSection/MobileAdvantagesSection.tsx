import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { advantageSectionData } from "./AdvantagesSection";
import { WhatsappLinkButton } from "../common/WhatsappLinkButton";
import { Animate } from "../common/Animate";
import parse from "html-react-parser";

export interface IMobileAdvantagesSectionProps {}

export const MobileAdvantagesSection = (
  props: IMobileAdvantagesSectionProps
) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Stack gap={4} alignItems="flex-start">
          <Stack gap={2}>
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2">
                {parse(advantageSectionData.h2)}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography>{advantageSectionData.subtitle}</Typography>
            </Animate>
          </Stack>

          <Stack gap={4} direction={{ xs: "column" }}>
            {advantageSectionData.advantageItems.map((item) => (
              <Animate
                initial={{ opacity: 0, x: -10 }}
                transition={{ duration: 2, type: "spring" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30%" }}
              >
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
                  <Box sx={{ gridArea: "icon" }}>
                    <item.Icon fontSize="large" color="secondary" />
                    {/* </Animate> */}
                  </Box>

                  <Typography sx={{ gridArea: "title" }} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ gridArea: "desc" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Animate>
            ))}
          </Stack>

          <Animate
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
          >
            <WhatsappLinkButton
              variant="contained"
              customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
            >
              agendar visita
            </WhatsappLinkButton>
          </Animate>
        </Stack>
      </Container>
    </Box>
  );
};
