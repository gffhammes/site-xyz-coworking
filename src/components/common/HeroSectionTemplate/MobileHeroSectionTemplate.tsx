import { Box, Container, Stack, Typography } from "@mui/material";
import { XYZLogoWithLink } from "../XYZLogoWithLink";
import Image from "next/image";
import { ReactElement } from "react";

export interface IMobileHeroSectionTemplateProps {
  content: ReactElement;
  bgImage: string;
}

export const MobileHeroSectionTemplate = ({
  content,
  bgImage,
}: IMobileHeroSectionTemplateProps) => {
  return (
    <Box style={{ height: "100svh", width: "100%", position: "relative" }}>
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
            zIndex: 1,
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack
              gap={8}
              sx={{ height: "100%" }}
              justifyContent="space-between"
            >
              <XYZLogoWithLink width="5rem" color="white" />

              {content}
            </Stack>
          </Container>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,1))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image fill src={bgImage} alt="Hero" objectFit="cover" priority />
      </Box>

      <Box
        sx={{
          height: "5svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "5rem 5rem 0 0",
        }}
      />
    </Box>
  );
};
