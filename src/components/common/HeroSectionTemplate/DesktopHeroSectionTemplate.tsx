import { Box, Container, Stack } from "@mui/material";
import { XYZLogoWithLink } from "../XYZLogoWithLink";
import { NavigationList } from "../NavigationList";
import { ReactElement } from "react";
import Image from "next/image";

export interface IDesktopHeroSectionTemplateProps {
  content: ReactElement;
  bgImage: string;
}

export const DesktopHeroSectionTemplate = ({
  content,
  bgImage,
}: IDesktopHeroSectionTemplateProps) => {
  return (
    <Box style={{ height: "110svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "90svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            py: 8,
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack height="100%" gap={10}>
              <Stack direction="row" justifyContent="space-between">
                <XYZLogoWithLink width="5rem" color="white" />

                <NavigationList theme="dark" />
              </Stack>

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
            background: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image fill src={bgImage} alt="Hero" objectFit="cover" priority />
      </Box>

      <Box
        sx={{
          height: "20svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "20rem 20rem 0 0",
        }}
      />
    </Box>
  );
};
