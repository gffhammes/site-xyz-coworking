import { Box, Stack } from "@mui/material";

export interface ICarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
}

export const CarouselDots = ({
  scrollSnaps,
  selectedIndex,
}: ICarouselDotsProps) => {
  return (
    <Stack
      sx={{ top: "50%", position: "absolute", right: 0, zIndex: 20 }}
      gap={0.5}
    >
      {scrollSnaps.map((snap, index) => {
        const isActiveSnap = index === selectedIndex;

        return (
          <Box
            sx={{
              height: ".5rem",
              width: ".5rem",
              borderRadius: ".5rem",
              backgroundColor: isActiveSnap ? "primary.main" : "white",
              transition: ".3s ease all",
            }}
          />
        );
      })}
    </Stack>
  );
};
