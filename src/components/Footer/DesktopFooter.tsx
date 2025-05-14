import { Box, Container, Stack } from "@mui/material";
import { XYZLogoWithLink } from "../common/XYZLogoWithLink";
import { socials } from "./Footer";
import { FooterInfos } from "./FooterInfos";

export interface IDesktopFooterProps {}

export const DesktopFooter = (props: IDesktopFooterProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#363636",
          height: "20svh",
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
            borderRadius: "0 0 20rem 20rem",
          }}
        />
      </Box>

      <Box component="footer">
        <Box sx={{ backgroundColor: "#363636", color: "white" }}>
          <Container sx={{ py: 10 }}>
            <Stack gap={10}>
              <Stack direction="row" alignItems="center" gap={10}>
                <XYZLogoWithLink height="10rem" color="white" />

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

              <Box
                gap={8}
                display="grid"
                gridTemplateColumns={{
                  xs: "1fr",
                  sm: "1fr 1fr",
                  lg: "auto auto auto auto",
                }}
                justifyContent="center"
              >
                <FooterInfos />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
