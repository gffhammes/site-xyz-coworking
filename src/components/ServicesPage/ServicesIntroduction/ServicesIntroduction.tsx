import { Animate } from "@/components/common/Animate";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export interface IServicesIntroductionProps {}

export const ServicesIntroduction = (props: IServicesIntroductionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={2} alignItems={{ xs: "flex-start", md: "center" }}>
          <Animate
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
          >
            <Typography
              textAlign={{ xs: "left", md: "center" }}
              maxWidth="31ch"
              variant="h2"
            >
              {servicesIntroductionData.h2}
            </Typography>
          </Animate>

          <Animate
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
          >
            <Typography
              textAlign={{ xs: "left", md: "center" }}
              maxWidth="64ch"
            >
              {servicesIntroductionData.text}
            </Typography>
          </Animate>
        </Stack>
      </Container>
    </Box>
  );
};

export const servicesIntroductionData = {
  h2: "Sua imagem é a primeira impressão que o mercado terá de você.",
  text: "Aqui, oferecemos mais do que espaços: entregamos a base para que seu negócio cresça com a força e a credibilidade que ele merece. Escolha a solução que mais combina com a sua jornada e eleve o seu potencial.",
  buttonText: "VER SOLUÇÕES",
};
