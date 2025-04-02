"use client";

import { Box, Stack, SxProps } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { DotButton } from "./DotButton";
import { EmblaOptionsType } from "embla-carousel";
import { Arrows } from "./Arrows";

export interface ICarouselProps {
  slides: ReactNode[];
  showDots?: boolean;
  showArrows?: boolean;
  options?: EmblaOptionsType;
  containerSx?: SxProps;
  emblaSx?: SxProps;
}

export const Carousel = ({
  slides,
  showDots,
  options,
  containerSx,
  emblaSx,
  showArrows,
}: ICarouselProps) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: true,
    ...options,
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
    <Box
      className="embla"
      ref={emblaRef}
      sx={{ overflow: "hidden", position: "relative", ...emblaSx }}
    >
      <Box
        className="embla__container"
        sx={{ display: "flex", ...containerSx }}
      >
        {slides}
      </Box>

      {showDots && (
        <Stack direction="row" gap={1} justifyContent="center" sx={{ pt: 2 }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </Stack>
      )}

      {showArrows && <Arrows scrollNext={scrollNext} scrollPrev={scrollPrev} />}
    </Box>
  );
};
