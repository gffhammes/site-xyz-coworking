import { Box, Button, Container, Stack, Typography } from "@mui/material";
import image1 from "../../../public/images/bc1.jpeg";
import image2 from "../../../public/images/bc2.jpeg";

export interface IPhraseSectionProps {}

export const PhraseSection = (props: IPhraseSectionProps) => {
  return (
    <Box>
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

          <Button variant="contained">Agendar visita</Button>
        </Stack>
      </Container>

      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: -2,
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
    </Box>
  );
};

const image1Size = { xs: "17rem", md: "35rem" };
const image2Size = { xs: "15rem", md: "30rem" };

const data = {
  text: "Aqui, seu trabalho<br/><strong>atinge outro nível</strong>",
};
