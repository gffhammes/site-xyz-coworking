import { Box, IconButton, Stack } from "@mui/material";
import { CarouselDots } from "./CarouselDots";
import SouthIcon from "@mui/icons-material/South";

export interface ICarouselControlsProps {
  scrollNext: () => void;
  scrollSnaps: any[];
  selectedIndex: number;
}

export const CarouselControls = ({
  scrollNext,
  scrollSnaps,
  selectedIndex,
}: ICarouselControlsProps) => {
  return (
    <Stack
      sx={{
        position: "relative",
        zIndex: 1,
        pointerEvents: "all",
      }}
      alignItems="center"
    >
      <CarouselDots scrollSnaps={scrollSnaps} selectedIndex={selectedIndex} />

      <IconButton onClick={() => scrollNext()} color="primary">
        <SouthIcon />
      </IconButton>
    </Stack>
  );
};
