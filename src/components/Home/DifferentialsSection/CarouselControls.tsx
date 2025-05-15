import { Box, IconButton, Stack } from "@mui/material";
import { CarouselDots } from "./CarouselDots";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";

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
    <Box sx={{ color: "primary.main" }}>
      <IconButton
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => scrollPrev()}
        color="inherit"
        aria-label="slide anterior"
      >
        <NorthIcon />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => scrollNext()}
        color="inherit"
        aria-label="próximo slide"
      >
        <SouthIcon />
      </IconButton>

      <CarouselDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </Box>
  );
};
