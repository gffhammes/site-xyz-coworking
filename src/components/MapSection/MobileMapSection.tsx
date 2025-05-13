import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { FooterMap } from "../Footer/FooterMap";
import { getMainWhatsappLink } from "@/utils/utils";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export interface IMobileMapSectionProps {}

export const MobileMapSection = (props: IMobileMapSectionProps) => {
  return (
    <Box sx={{ mb: -10 }}>
      <Stack gap={4}>
        <Container>
          <Stack gap={2} alignItems="center">
            <Typography
              textAlign="center"
              variant="h2"
              maxWidth="25ch"
              fontSize={16}
            >
              Venha conhecer o nosso espaço em Balneário Camboriú!
            </Typography>

            <Chip
              component="a"
              href={getMainWhatsappLink(
                "Olá, vim pelo site e gostaria de agendar uma visita!"
              )}
              target="_blank"
              label="AGENDAR"
              color="primary"
              icon={
                <Box
                  sx={{
                    fontSize: 18,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    pl: 0.5,
                  }}
                >
                  <WhatsAppIcon fontSize="inherit" />
                </Box>
              }
              clickable
              sx={{
                fontWeight: 700,
              }}
            />
          </Stack>
        </Container>

        <Box
          sx={{
            position: "relative",
            flex: { xs: "1 1 15rem", sm: "1 1 20rem" },
            zIndex: 999,
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
      <Container></Container>
    </Box>
  );
};
