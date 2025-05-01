import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface IDiretoLightRowProps {}

const clientName = "XYZ Coworking";

export const DiretoLightRow = (props: IDiretoLightRowProps) => {
  return (
    <Box sx={{ backgroundColor: "white", py: 2 }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography color="black" lineHeight={1}>
            © {clientName} | {new Date().getFullYear()}
          </Typography>

          <Stack
            direction="row"
            alignItems="flex-end"
            gap={0.5}
            component="a"
            href="https://www.studiodireto.com.br/"
            target="_blank"
          >
            <Typography lineHeight={0.75} color="black">
              Desenvolvido por
            </Typography>

            <Image
              src="https://www.studiodireto.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_direto_preta.f833362f.png&w=3840&q=75"
              alt="Direto."
              height={16}
              width={64}
              style={{
                objectFit: "contain",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
