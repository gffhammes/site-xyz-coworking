import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { FooterMap } from "../Footer/FooterMap";
import { getWhatsappLink } from "@/utils/utils";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Animate } from "../common/Animate";
import { WhatsappLinkButton } from "../common/WhatsappLinkButton";

export interface IDesktopMapSectionProps {}

export const DesktopMapSection = (props: IDesktopMapSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack direction="row" gap={4}>
          <Stack
            gap={2}
            sx={{ pt: 20, pb: 10 }}
            alignItems="flex-start"
            flex={"0 0 30rem"}
          >
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2" maxWidth="25ch" fontSize={16}>
                Venha conhecer o nosso espaço em Balneário Camboriú!
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              style={{ width: "100%" }}
            >
              <WhatsappLinkButton
                variant="contained"
                startIcon={<WhatsAppIcon fontSize="inherit" />}
                customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
                id="mapa-contato"
              >
                agendar
              </WhatsappLinkButton>
            </Animate>
          </Stack>

          <Box
            sx={{
              position: "relative",
              flex: "1 1 100%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: 10,
                zIndex: 99,
              }}
            >
              <FooterMap />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
