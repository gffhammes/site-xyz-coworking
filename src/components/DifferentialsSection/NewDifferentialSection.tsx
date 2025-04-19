"use client";

import { Box, IconButton } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { differentialItems } from "./DifferentialSection";
import { DifferentialSlide } from "./DifferentialSlide";
import { CarouselDots } from "./CarouselDots";
import { DifferentialImage } from "./DifferentialImage";
import SouthIcon from "@mui/icons-material/South";

export interface INewDifferentialSectionProps {}

export const NewDifferentialSection = (props: INewDifferentialSectionProps) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: true,
    axis: "y",
    containScroll: "trimSnaps",
    watchDrag: false,
    loop: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          height: circleSize,
          overflow: "hidden",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize,
            backgroundColor: "#363636",
            transform: "translateX(-25%)",
            position: "absolute",
            zIndex: 20,
          }}
        />

        <Box sx={{ position: "absolute", zIndex: 90, pointerEvents: "all" }}>
          <CarouselDots
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
          />

          <IconButton onClick={() => scrollNext()}>
            <SouthIcon />
          </IconButton>
        </Box>
      </Box>

      <DifferentialImage selectedIndex={selectedIndex} />

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: circleSize,
          width: "100%",
          pointerEvents: "none",
        }}
      >
        <Box
          className="embla"
          ref={emblaRef}
          sx={{
            overflow: "hidden",
            position: "relative",
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize,
            transform: "translateX(-25%)",
          }}
        >
          <Box
            className="embla__container"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {differentialItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  flex: "0 0 100%",
                }}
              >
                <DifferentialSlide
                  index={index}
                  key={index}
                  isActiveSlide={selectedIndex === index}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const circleSize = "35rem";
