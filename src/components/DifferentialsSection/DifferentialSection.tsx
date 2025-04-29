"use client";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { DifferentialSlide } from "./DifferentialSlide";
import { CarouselDots } from "./CarouselDots";
import { DifferentialImage } from "./DifferentialImage";
import { CarouselControls } from "./CarouselControls";

import image1 from "../../../public/images/rearview-businesswoman-enjoying-her-great-results.jpg";
import image4 from "../../../public/images/group-friends-having-lunch-together-restaurant.jpg";
import image3 from "../../../public/images/medium-shot-smiley-colleagues-job.jpg";
import image2 from "../../../public/images/business-people-office-break.jpg";

export interface IDifferentialSectionProps {}

export const DifferentialSection = (props: IDifferentialSectionProps) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: true,
    axis: "y",
    containScroll: "trimSnaps",
    watchDrag: false,
    loop: true,
    duration: 30,
  });
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
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: `calc(${circleSize} + (${imageSize}/ 8))`,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              height: circleSize,
              width: circleSize,
              borderRadius: circleSize,
              backgroundColor: "#363636",
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translate(-${xTranslateCircle}, 0%)`,
            }}
          >
            <CarouselControls
              scrollPrev={scrollPrev}
              scrollNext={scrollNext}
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              scrollTo={scrollTo}
            />
          </Box>

          <Box
            sx={{
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
                transform: `translateX(-${xTranslateCircle})`,
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
                    <Stack sx={{ height: "100%" }} className="slide">
                      <DifferentialSlide
                        index={index}
                        key={index}
                        isActiveSlide={selectedIndex === index}
                      />
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <DifferentialImage selectedIndex={selectedIndex} />
        </Box>
      </Container>
    </Box>
  );
};

export const circleSize = "40rem";
export const imageSize = "20rem";
export const xTranslateCircle = "15%";
// export const yTranslateCircle = "25%";

export const differentialItems: IDifferentialItem[] = [
  {
    title: "Endereço estratégico<br/>e sofisticado",
    description:
      "Ter um escritório bem localizado muda a forma como seu negócio é visto.",
    image: image1.src,
  },
  {
    title: "Infraestrutura<br/>impecável",
    description:
      "Cadeiras ergonômicas, internet ultra rápida e climatização total. ",
    image: image2.src,
  },
  {
    title: "Ambiente exclusivo<br/>para negócios",
    description:
      "Conecte-se a outros profissionais de sucesso e expanda sua rede.",
    image: image3.src,
  },
  {
    title: "Networking que<br/>abre portas",
    description:
      "Trabalhar cercado de mentes brilhantes pode ser o impulso que faltava para sua empresa crescer. Conexões reais acontecem aqui.",
    image: image4.src,
  },
];

interface IDifferentialItem {
  title: string;
  description: string;
  image: string;
}
