"use client";

import { Box, Container, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { DifferentialSlide } from "./DifferentialSlide";
import { DifferentialImage } from "./DifferentialImage";
import { CarouselControls } from "./CarouselControls";

import image1 from "../../../../public/images/endereco-estrategico.webp";
import image2 from "../../../../public/images/infra-bc.webp";
import image3 from "../../../../public/images/conexao-bc.webp";
import image4 from "../../../../public/images/servicos.webp";
import { Animate } from "@/components/common/Animate";

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
        height: {
          xs: `calc(${xsCircleSize} + (${xsImageSize}/ 4))`,
          md: `calc(${mdCircleSize} + (${mdImageSize}/ 4))`,
        },
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ position: "relative" }}>
          <Animate
            initial={{ opacity: 0 }}
            transition={{ duration: 2, type: "spring" }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30%" }}
          >
            <Box
              sx={{
                height: { xs: xsCircleSize, md: mdCircleSize },
                width: { xs: xsCircleSize, md: mdCircleSize },
                borderRadius: { xs: xsCircleSize, md: mdCircleSize },
                backgroundColor: "#363636",
                position: "absolute",
                top: 0,
                left: 0,
                transform: {
                  xs: `translate(-${xsXTranslateCircle}, 0%)`,
                  md: `translate(-${mdXTranslateCircle}, 0%)`,
                },
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
          </Animate>

          <Box
            sx={{
              position: "relative",
              height: { xs: xsCircleSize, md: mdCircleSize },
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
                height: { xs: xsCircleSize, md: mdCircleSize },
                width: { xs: xsCircleSize, md: mdCircleSize },
                borderRadius: { xs: xsCircleSize, md: mdCircleSize },
                transform: {
                  xs: `translateX(-${xsXTranslateCircle})`,
                  md: `translateX(-${mdXTranslateCircle})`,
                },
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

export const mdCircleSize = "40rem";
export const mdImageSize = "20rem";
export const mdXTranslateCircle = "15%";

export const xsCircleSize = "30rem";
export const xsImageSize = "15rem";
export const xsXTranslateCircle = "15%";
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
