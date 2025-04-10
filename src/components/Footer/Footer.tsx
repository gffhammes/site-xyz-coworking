import {
  Box,
  Container,
  Stack,
  styled,
  SxProps,
  Typography,
} from "@mui/material";
import { FooterMap } from "./FooterMap";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#363636",
        color: "white",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          backgroundColor: "#fff",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "5rem 5rem 0 0",
          backgroundColor: "#363636",
          position: "relative",
          zIndex: 9,
        }}
      >
        <Container sx={{ pt: 6, pb: 4 }}>
          <Typography
            variant="h2"
            maxWidth="19ch"
            textAlign="center"
            sx={{ mx: "auto" }}
          >
            Venha conhecer o nosso espaço em Balneário Camboriú!
          </Typography>
        </Container>

        <FooterMap />

        <Container sx={{ py: 10 }}>
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
