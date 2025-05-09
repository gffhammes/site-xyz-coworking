import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { FooterMap } from "../Footer/FooterMap";
import { getMainWhatsappLink } from "@/utils/utils";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
            <Typography variant="h2" maxWidth="25ch" fontSize={16}>
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

          <Box
            sx={{
              position: "relative",
              flex: "1 1 100%",
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
      </Container>
    </Box>
  );
};
