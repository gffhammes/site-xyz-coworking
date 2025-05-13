import { Box, Button, Container, Stack, Typography } from "@mui/material";
import image1 from "../../../../public/images/bc1.jpeg";
import image2 from "../../../../public/images/bc2.webp";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";

export interface IPhraseSectionProps {}

export const PhraseSection = (props: IPhraseSectionProps) => {
  return (
    <Box id="home-content">
      <Container>
        <Stack
          alignItems="center"
          gap={2}
          sx={{ position: "relative", zIndex: 10, scrollSnapAlign: "center" }}
        >
          <Typography
            dangerouslySetInnerHTML={{ __html: data.text }}
            textAlign="center"
            sx={{
              textTransform: "uppercase",

              "& strong": {
                fontSize: 24,
                fontWeight: 700,
                textTransform: "uppercase",
              },
            }}
          />
        </Stack>
      </Container>

      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: { xs: 0, md: -2 },
          overflow: "hidden",
          height: image1Size,
        }}
      >
        <Box
          sx={{
            height: image1Size,
            width: image1Size,
            borderRadius: image1Size,
            backgroundImage: `url('${image2.src}')`,
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-90%, 0)",
          }}
        ></Box>

        <Box
          sx={{
            height: image2Size,
            width: image2Size,
            borderRadius: image2Size,
            backgroundImage: `url('${image1.src}')`,
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(0%, 10%)",
          }}
        ></Box>
      </Box>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: -5, md: -10 },
        }}
      >
        <WhatsappLinkButton
          variant="contained"
          color="secondary"
          customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
        >
          agendar visita
        </WhatsappLinkButton>
      </Container>
    </Box>
  );
};

const image1Size = { xs: "17rem", md: "27rem" };
const image2Size = { xs: "15rem", md: "22rem" };

const data = {
  text: "Aqui, seu trabalho<br/><strong>atinge outro nível</strong>",
};
