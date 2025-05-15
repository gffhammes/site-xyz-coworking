import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { FooterMap } from "../Footer/FooterMap";
import { getWhatsappLink } from "@/utils/utils";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WhatsappLinkButton } from "../common/WhatsappLinkButton";
import { Animate } from "../common/Animate";

export interface IMobileMapSectionProps {}

export const MobileMapSection = (props: IMobileMapSectionProps) => {
  return (
    <Box sx={{ mb: -10 }}>
      <Stack gap={10} sx={{ backgroundColor: "#f4f4f4", pt: 10 }}>
        <Container>
          <Stack gap={2} alignItems="center">
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center" variant="h2" maxWidth="25ch">
                Venha conhecer o nosso espaço em Balneário Camboriú!
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <WhatsappLinkButton
                variant="contained"
                startIcon={<WhatsAppIcon fontSize="inherit" />}
                customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
              >
                agendar
              </WhatsappLinkButton>
            </Animate>
          </Stack>
        </Container>

        <Box
          sx={{
            position: "relative",
            flex: { xs: "1 1 15rem", sm: "1 1 20rem" },
            zIndex: 900,
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
            }}
          >
            <FooterMap />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
