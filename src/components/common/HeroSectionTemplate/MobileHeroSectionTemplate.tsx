import { Box, Container, Stack } from "@mui/material";
import { XYZLogoWithLink } from "../XYZLogoWithLink";
import Image from "next/image";
import { ReactElement } from "react";
import { MobileMenu } from "../Menu/MobileMenu";

export interface IMobileHeroSectionTemplateProps {
  content: ReactElement;
  bgImage: string;
}

export const MobileHeroSectionTemplate = ({
  content,
  bgImage,
}: IMobileHeroSectionTemplateProps) => {
  return (
    <Box
      style={{
        height: "100svh",
        width: "100%",
        position: "relative",
        overflow: "hidden", // garante que nada extrapole
      }}
    >
      <Box sx={{ height: "95svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pt: 4,
            pb: 4,
            alignItems: "flex-end",
            position: "relative",
            zIndex: 2, // sobe acima da imagem e gradiente
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack
              gap={8}
              sx={{ height: "100%" }}
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <XYZLogoWithLink width="5rem" color="white" />

                <MobileMenu color="white" />
              </Stack>

              {content}
            </Stack>
          </Container>
        </Stack>
      </Box>

      {/* Fundo com imagem e gradiente */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100svh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1))",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <Image
          fill
          src={bgImage}
          alt="Hero"
          objectFit="cover"
          priority
          sizes="100vh"
        />
      </Box>

      <Box
        sx={{
          height: "5svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "5rem 5rem 0 0",
          zIndex: 3,
        }}
      />
    </Box>
  );
};
