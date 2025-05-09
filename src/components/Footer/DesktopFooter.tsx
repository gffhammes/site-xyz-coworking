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
import { getMainWhatsappLink } from "@/utils/utils";
import { NavigationList } from "../common/NavigationList";
import { XYZLogoWithLink } from "../common/XYZLogoWithLink";
import { socials } from "./Footer";
import { FooterInfoTemplate } from "./FooterInfoTemplate";

export interface IDesktopFooterProps {}

export const DesktopFooter = (props: IDesktopFooterProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#363636",
          height: "20svh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            borderRadius: "0 0 20rem 20rem",
          }}
        />
      </Box>

      <Box component="footer">
        <Box sx={{ backgroundColor: "#363636", color: "white" }}>
          <Container sx={{ py: 10 }}>
            <Stack gap={10}>
              <Stack direction="row" alignItems="center" gap={10}>
                <XYZLogoWithLink height="10rem" color="white" />

                <Stack direction="row" gap={2}>
                  {socials.map((social) => (
                    <Stack
                      key={social.name}
                      component="a"
                      href={social.href}
                      target="_blank"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        fontSize: 32,
                        height: "4rem",
                        width: "4rem",
                        borderRadius: "4rem",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <social.icon fontSize="inherit" />
                    </Stack>
                  ))}
                </Stack>
              </Stack>

              <Box
                gap={8}
                display="grid"
                gridTemplateColumns={{
                  xs: "1fr",
                  sm: "1fr 1fr",
                  lg: "auto auto auto auto",
                }}
                justifyContent="center"
              >
                <FooterInfoTemplate title="Mapa do Site">
                  <NavigationList direction="column" gap={0.5} theme="dark" />
                </FooterInfoTemplate>

                <FooterInfoTemplate title="Horário de Funcionamento">
                  <Typography>
                    - Segunda à sexta das 8h às 22h
                    <br />
                    - Sábado das 8h às 13h
                    <br />
                    *Acesso 24h para clientes
                  </Typography>
                </FooterInfoTemplate>

                <FooterInfoTemplate title="Endereço">
                  <Typography>
                    Rua 55 (Praça Higino Pio), n° 50 - Sala 01
                    <br />
                    Centro, Balneário Camboriú/SC
                  </Typography>
                </FooterInfoTemplate>

                <FooterInfoTemplate title="Contato">
                  <Typography>
                    Telefone: (47) 3461-3100
                    <br />
                    WhatsApp: (47) 3032-1893
                    <br />
                    E-mail: atendimento@xyz.hubcommerce.com.br
                  </Typography>
                </FooterInfoTemplate>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
