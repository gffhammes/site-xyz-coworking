import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import { NavigationList } from "../common/NavigationList/NavigationList";
import { XYZLogoWithLink } from "../common/XYZLogoWithLink";
import { socials } from "./Footer";
import { FooterInfoTemplate } from "./FooterInfoTemplate";
import { FooterInfos } from "./FooterInfos";
import { TrackingWrapper } from "../common/TrackingWrapper";

export interface IMobileFooterProps {}

export const MobileFooter = (props: IMobileFooterProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#363636",
          height: "5svh",
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
            borderRadius: "0 0 5rem 5rem",
          }}
        />
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#363636",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 9,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Container sx={{ py: 10, backgroundColor: "#363636" }}>
            <Stack gap={8}>
              <Stack alignItems="center" gap={4}>
                <XYZLogoWithLink height="7rem" color="white" />

                <Stack direction="row" gap={2}>
                  {socials.map((social) => (
                    <TrackingWrapper
                      key={social.name}
                      section="footer"
                      action={`ir-para-${social.name}`}
                    >
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
                        aria-label={`Acesse nosso ${social.name}`}
                      >
                        <social.icon fontSize="inherit" />
                      </Stack>
                    </TrackingWrapper>
                  ))}
                </Stack>
              </Stack>

              <Stack gap={4}>
                <FooterInfos />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

const titleSx: SxProps = {
  fontWeight: 700,
  fontSize: 20,
};
