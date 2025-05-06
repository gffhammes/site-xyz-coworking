import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { IServiceItem } from "@/data/types";
import { Button, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import { ServiceDetailsHeroSectionButtons } from "./ServiceDetailsHeroSectionButtons";

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
            <Typography variant="h1">
              <strong
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 1.1,
                  filter: "opacity(.4)",
                }}
              >
                {service.title}
              </strong>
              <br />
              {service.detailsPage.h1.replaceAll("<br/>", " ")}
            </Typography>

            <Typography>
              {service.detailsPage.subtitle.replaceAll("<br/>", " ")}
            </Typography>
          </Stack>

          <Stack width="100%" gap={1}>
            <ServiceDetailsHeroSectionButtons service={service} />
          </Stack>
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
            <Typography textAlign="center" variant="h1">
              <strong
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 1.1,
                  filter: "opacity(.4)",
                }}
              >
                {service.title}
              </strong>
              <br />
              {parse(service.detailsPage.h1)}
            </Typography>

            <Typography textAlign="center">
              {parse(service.detailsPage.subtitle)}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <ServiceDetailsHeroSectionButtons service={service} />
          </Stack>
        </Stack>
      }
    />
  );
};
