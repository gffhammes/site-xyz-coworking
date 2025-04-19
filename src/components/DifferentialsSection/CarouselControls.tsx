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
        // position: "absolute", zIndex: 90, pointerEvents: "all"
        position: "relative",
        zIndex: 1,
        pointerEvents: "all",
      }}
    >
      <CarouselDots scrollSnaps={scrollSnaps} selectedIndex={selectedIndex} />

      {/* <Box sx={{ pb: 2, height: "fit-content", width: "fit-content" }}> */}
      <IconButton onClick={() => scrollNext()} color="primary">
        <SouthIcon />
      </IconButton>
      {/* </Box> */}
    </Stack>
  );
};
