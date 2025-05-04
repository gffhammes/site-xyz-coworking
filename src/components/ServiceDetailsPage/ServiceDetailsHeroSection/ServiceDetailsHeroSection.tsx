import { IServiceItem } from "@/data/services";
import { HeroSectionTemplate } from "@/components/common/HeroSectionTemplate/HeroSectionTemplate";
import { Button, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";

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
            <Button variant="contained">
              {service.detailsPage.heroCTAText}
            </Button>
            <Button variant="outlined">CONHECER MAIS</Button>
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
            <Button variant="contained">
              {service.detailsPage.heroCTAText}
            </Button>
            <Button variant="outlined">CONHECER MAIS</Button>
          </Stack>
        </Stack>
      }
    />
  );
};
