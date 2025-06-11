import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Stack, Typography } from "@mui/material";
import { HomeHeroSectionButtons } from "./HomeHeroSectionButtons";
import { Animate, IAnimateProps } from "@/components/common/Animate";
import { siteData } from "@/data/sites";
import parse from "html-react-parser";

export interface IHomeHeroSectionProps {}

export const HomeHeroSection = (props: IHomeHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      mobileContent={
        <Stack alignItems="flex-start" gap={4}>
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="16ch">
              {siteData.homeData.heroSection.h1}
            </Typography>

            <Animate {...subtitleAnimateProps}>
              <Typography>{siteData.homeData.heroSection.subtitle}</Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <HomeHeroSectionButtons />
            </Stack>
          </Animate>
        </Stack>
      }
      desktopContent={
        <Stack justifyContent="center" gap={4} height="100%">
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="30ch">
              {parse(siteData.homeData.heroSection.h1)}
            </Typography>

            <Animate {...subtitleAnimateProps}>
              <Typography maxWidth="60ch">
                {siteData.homeData.heroSection.subtitle}
              </Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              direction="row"
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <HomeHeroSectionButtons />
            </Stack>
          </Animate>
        </Stack>
      }
      bgImage={siteData.homeData.heroSection.image}
    />
  );
};

const h1AnimateProps: IAnimateProps = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: {
    duration: 1,
    type: "spring",
  },
};

const subtitleAnimateProps: IAnimateProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
  transition: {
    duration: 1,
    type: "spring",
  },
};

const buttonsAnimateProps: IAnimateProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
  transition: {
    duration: 1,
    type: "spring",
    delay: 0.25,
  },
  style: {
    width: "100%",
  },
};
