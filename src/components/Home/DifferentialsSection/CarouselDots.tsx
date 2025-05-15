"use client";

import { Box, Stack } from "@mui/material";

export interface ICarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export const CarouselDots = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
}: ICarouselDotsProps) => {
  return (
    <Stack
      sx={{
        top: "50%",
        position: "absolute",
        transform: "translateY(-100%)",
        right: "2rem",
        zIndex: 999,
        pointerEvents: "all",
      }}
      gap={0.5}
    >
      {scrollSnaps.map((snap, index) => {
        const isActiveSnap = index === selectedIndex;

        return (
          <Box
            key={snap}
            sx={{
              height: ".5rem",
              width: ".5rem",
              borderRadius: ".5rem",
              backgroundColor: isActiveSnap ? "primary.main" : "#444444",
              transition: ".3s ease all",
              pointerEvents: "all",
              cursor: "pointer",
            }}
            onClick={() => {
              scrollTo(index);
            }}
          />
        );
      })}
    </Stack>
  );
};
