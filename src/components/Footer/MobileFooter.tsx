import {
  Box,
  Chip,
  Container,
  Stack,
  styled,
  SxProps,
  Typography,
} from "@mui/material";
import { FooterMap } from "./FooterMap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getMainWhatsappLink } from "@/utils/utils";

export interface IMobileFooterProps {}

export const MobileFooter = (props: IMobileFooterProps) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#363636",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 9,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(0deg, #363636 80%,#f4f4f4 80%)",
          }}
        >
          <Container>
            <Stack direction="row" gap={4}>
              <Stack gap={2} sx={{ pt: 10, pb: 4 }} alignItems="flex-start">
                <Typography variant="h2" maxWidth="19ch" fontSize={16}>
                  Venha conhecer o nosso espaço em Balneário Camboriú!
                </Typography>

                <Chip
                  label="AGENDAR"
                  color="primary"
                  variant="outlined"
                  component="a"
                  href={getMainWhatsappLink(
                    "Olá, vim pelo site e gostaria de agendar uma visita!"
                  )}
                  target="_blank"
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

              <Box sx={{ position: "relative", flex: "0 0 50%" }}>
                <Box
                  sx={{
                    position: "absolute",
                    height: "100%",
                    width: "50svw",
                    borderRadius: "2rem 0 0 2rem",
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

        <Container sx={{ py: 10, backgroundColor: "#363636" }}>
          <Stack gap={4}>
            <Stack>
              <Typography sx={titleSx}>Endereço</Typography>
              <Typography>
                Rua 55 (Praça Higino Pio), n° 50 - Sala 01
                <br />
                Centro, Balneário Camboriú/SC
              </Typography>
            </Stack>

            <Stack>
              <Typography sx={titleSx}>Horário de Funcionamento</Typography>
              <Typography>
                - Segunda à sexta das 8h às 22h
                <br />
                - Sábado das 8h às 13h
                <br />
                *Acesso 24h para clientes
              </Typography>
            </Stack>

            <Stack>
              <Typography sx={titleSx}>Contato</Typography>
              <Typography>
                Telefone: (47) 3461-3100
                <br />
                WhatsApp: (47) 3032-1893
                <br />
                E-mail: atendimento@xyz.hubcommerce.com.br
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const titleSx: SxProps = {
  fontWeight: 700,
  fontSize: 20,
};
