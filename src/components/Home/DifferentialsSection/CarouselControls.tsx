import { Box, IconButton, Stack } from "@mui/material";
import { CarouselDots } from "./CarouselDots";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import { mdCircleSize, xsCircleSize } from "./DifferentialSection";

export interface ICarouselControlsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollSnaps: any[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export const CarouselControls = ({
  scrollPrev,
  scrollNext,
  scrollSnaps,
  selectedIndex,
  scrollTo,
}: ICarouselControlsProps) => {
  return (
    <Box
      sx={{
        color: "primary.main",

        height: { xs: xsCircleSize, md: mdCircleSize },
        width: { xs: xsCircleSize, md: mdCircleSize },
        borderRadius: { xs: xsCircleSize, md: mdCircleSize },
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Stack
        alignItems="center"
        sx={{ position: "absolute", top: 0, height: "100%", width: "100%" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "10rem",
            width: "100%",
            cursor: "pointer",
            transition: ".5s ease all",
            background:
              "linear-gradient(rgba(240, 181, 43, 0.4),rgba(240, 181, 43, 0))",
            opacity: 0,

            "&:hover": {
              opacity: 1,
            },
          }}
          onClick={() => scrollPrev()}
        />

        <NorthIcon />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            height: "10rem",
            width: "100%",
            cursor: "pointer",
            transition: ".5s ease all",
            background:
              "linear-gradient(0deg, rgba(240, 181, 43, 0.4),rgba(240, 181, 43, 0))",
            opacity: 0,

            "&:hover": {
              opacity: 1,
            },
          }}
          onClick={() => scrollNext()}
        />

        <SouthIcon />
      </Stack>

      <CarouselDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </Box>
  );
};
