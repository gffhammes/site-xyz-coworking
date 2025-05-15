import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { IServiceItem } from "@/data/types";
import { Button, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import { ServiceDetailsHeroSectionButtons } from "./ServiceDetailsHeroSectionButtons";
import { Animate, IAnimateProps } from "@/components/common/Animate";

export interface IServiceDetailsHeroSectionProps {
  service: IServiceItem;
}

export const ServiceDetailsHeroSection = ({
  service,
}: IServiceDetailsHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      bgImage={service.image}
      mobileContent={
        <Stack alignItems="flex-start" justifyContent="flex-end" gap={8}>
          <Stack gap={2}>
            <Animate {...h1AnimateProps}>
              <Typography variant="h1">
                <strong
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 4,
                    filter: "opacity(.4)",
                  }}
                >
                  {service.title}
                </strong>
                <br />
                {service.detailsPage.h1.replaceAll("<br/>", " ")}
              </Typography>
            </Animate>

            <Animate {...subtitleAnimateProps}>
              <Typography>
                {service.detailsPage.subtitle.replaceAll("<br/>", " ")}
              </Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack width="100%" gap={1}>
              <ServiceDetailsHeroSectionButtons service={service} />
            </Stack>
          </Animate>
        </Stack>
      }
      desktopContent={
        <Stack
          justifyContent="center"
          alignItems="center"
          gap={8}
          sx={{ height: "100%" }}
        >
          <Stack gap={2} alignItems="center">
            <Animate {...h1AnimateProps}>
              <Typography textAlign="center" variant="h1">
                <strong
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 4,
                    filter: "opacity(.4)",
                  }}
                >
                  {service.title}
                </strong>
                <br />
                {parse(service.detailsPage.h1)}
              </Typography>
            </Animate>

            <Animate {...subtitleAnimateProps}>
              <Typography textAlign="center">
                {parse(service.detailsPage.subtitle)}
              </Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack direction="row" justifyContent="center" gap={1}>
              <ServiceDetailsHeroSectionButtons service={service} />
            </Stack>
          </Animate>
        </Stack>
      }
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
    delay: 0.25,
  },
};

const buttonsAnimateProps: IAnimateProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
  transition: {
    duration: 1,
    type: "spring",
    delay: 0.5,
  },
  style: {
    width: "100%",
  },
};
