import { Box, Container, Stack, Typography } from "@mui/material";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { Animate } from "@/components/common/Animate";
import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { siteData } from "@/data/sites";

export interface IPhraseSectionProps {}

export const PhraseSection = (props: IPhraseSectionProps) => {
  return (
    <Box id="home-content">
      <Container>
        <Animate
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Stack
            alignItems="center"
            gap={2}
            sx={{ position: "relative", zIndex: 10, scrollSnapAlign: "center" }}
          >
            <Typography
              dangerouslySetInnerHTML={{
                __html: siteData.homeData.phraseSection.text,
              }}
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
        </Animate>
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
        <Animate
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 2, delay: 0.25, type: "spring" }}
        >
          <Box
            sx={{
              height: image1Size,
              width: image1Size,
              borderRadius: image1Size,
              backgroundImage: `url('${siteData.homeData.phraseSection.image1}')`,
              backgroundSize: "cover",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-90%, 0)",
            }}
          />
        </Animate>

        <Animate
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 2, delay: 0.5, type: "spring" }}
        >
          <Box
            sx={{
              height: image2Size,
              width: image2Size,
              borderRadius: image2Size,
              backgroundImage: `url('${siteData.homeData.phraseSection.image2}')`,
              backgroundSize: "cover",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(0%, 10%)",
            }}
          />
        </Animate>
      </Box>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: -5, md: -10 },
        }}
      >
        <Animate
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 1, type: "spring" }}
        >
          <TrackingWrapper section="fotos-circulares" action="contato">
            <WhatsappLinkButton
              variant="contained"
              color="secondary"
              customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
            >
              agendar visita
            </WhatsappLinkButton>
          </TrackingWrapper>
        </Animate>
      </Container>
    </Box>
  );
};

const image1Size = { xs: "17rem", md: "27rem" };
const image2Size = { xs: "15rem", md: "22rem" };
