import { Box, Container, Stack, Typography } from "@mui/material";
import { advantageSectionData } from "./AdvantagesSection";
import { WhatsappLinkButton } from "../common/WhatsappLinkButton";
import { Animate } from "../common/Animate";
import parse from "html-react-parser";
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
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center" maxWidth="25ch" variant="h2">
                {parse(advantageSectionData.h2)}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center" maxWidth="46ch">
                {advantageSectionData.subtitle}
              </Typography>
            </Animate>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={8}>
            {advantageSectionData.advantageItems.map((item, index) => (
              <Animate
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 2, delay: 0.5 * index, type: "spring" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30%" }}
              >
                <Stack>
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
              </Animate>
            ))}
          </Box>

          <Animate
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
          >
            <WhatsappLinkButton
              variant="contained"
              customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
              id="vantagens-contato"
            >
              agendar visita
            </WhatsappLinkButton>
          </Animate>
        </Stack>
      </Container>
    </Box>
  );
};
