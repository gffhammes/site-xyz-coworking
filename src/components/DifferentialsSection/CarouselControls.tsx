import { Box, IconButton, Stack } from "@mui/material";
import { CarouselDots } from "./CarouselDots";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";

export interface ICarouselControlsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollSnaps: any[];
  selectedIndex: number;
}

export const CarouselControls = ({
  scrollPrev,
  scrollNext,
  scrollSnaps,
  selectedIndex,
}: ICarouselControlsProps) => {
  return (
    <Box sx={{ color: "#6b6b6b" }}>
      <IconButton
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => scrollPrev()}
        color="inherit"
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
      >
        <SouthIcon />
      </IconButton>

      <CarouselDots scrollSnaps={scrollSnaps} selectedIndex={selectedIndex} />
    </Box>

    // <Stack
    //   sx={{
    //     position: "absolute",
    //     top: 0,
    //     left: "50%",
    //     zIndex: 1,
    //     pointerEvents: "all",
    //   }}
    //   alignItems="center"
    // >

    // </Stack>
  );
};
