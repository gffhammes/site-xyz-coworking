import { Stack, Typography } from "@mui/material";
import { HeroSectionTemplate } from "../common/HeroSectionTemplate/HeroSectionTemplate";
import { Animate, IAnimateProps } from "../common/Animate";
import { siteData } from "@/data/sites";
import { BlogHeroSectionButtons } from "./BlogHeroSectionButtons";

export interface IBlogHeroSectionProps {}

export const BlogHeroSection = (props: IBlogHeroSectionProps) => {
  return (
    <HeroSectionTemplate
      mobileContent={
        <Stack alignItems="flex-start" gap={4}>
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="16ch">
              {h1}
            </Typography>

            <Animate {...subtitleAnimateProps}>
              <Typography maxWidth="60ch">{subtitle}</Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <BlogHeroSectionButtons />
            </Stack>
          </Animate>
        </Stack>
      }
      desktopContent={
        <Stack justifyContent="center" gap={4} height="100%">
          <Stack gap={2}>
            <Typography variant="h1" maxWidth="30ch">
              {h1}
            </Typography>

            <Animate {...subtitleAnimateProps}>
              <Typography maxWidth="60ch">{subtitle}</Typography>
            </Animate>
          </Stack>

          <Animate {...buttonsAnimateProps}>
            <Stack
              gap={1}
              direction="row"
              sx={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <BlogHeroSectionButtons />
            </Stack>
          </Animate>
        </Stack>
      }
      bgImage={siteData.homeData.heroSection.image}
    />
  );
};

const h1 = "Inspire-se, conecte-se e evolua!";
const subtitle = `O blog do XYZ é o seu ponto de encontro com ideias que movimentam o universo do coworking, empreendedorismo e inovação!
Explore conteúdos criados para quem vive o futuro do trabalho todos os dias.`;

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
