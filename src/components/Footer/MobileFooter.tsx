import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import { NavigationList } from "../common/NavigationList";
import { XYZLogoWithLink } from "../common/XYZLogoWithLink";
import { socials } from "./Footer";

export interface IMobileFooterProps {}

export const MobileFooter = (props: IMobileFooterProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#363636",
          height: "5svh",
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
            borderRadius: "0 0 5rem 5rem",
          }}
        />
      </Box>
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
          <Container sx={{ py: 10, backgroundColor: "#363636" }}>
            <Stack gap={8}>
              <Stack alignItems="center" gap={4}>
                <XYZLogoWithLink height="7rem" color="white" />

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

                <Stack>
                  <Typography sx={titleSx}>Mapa do Site</Typography>

                  <NavigationList direction="column" gap={0.5} theme="dark" />
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

const titleSx: SxProps = {
  fontWeight: 700,
  fontSize: 20,
};
