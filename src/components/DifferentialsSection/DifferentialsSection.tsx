"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { Animate } from "../common/Animate";
import image1 from "../../../public/images/rearview-businesswoman-enjoying-her-great-results.jpg";
import image4 from "../../../public/images/group-friends-having-lunch-together-restaurant.jpg";
import image3 from "../../../public/images/medium-shot-smiley-colleagues-job.jpg";
import image2 from "../../../public/images/business-people-office-break.jpg";
import { scrollTo } from "@/utils/utils";
import SouthIcon from "@mui/icons-material/South";

export interface IScrollSectionProps {}

export const ScrollSection = (props: IScrollSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<any>(null);
  const activeIndexRef = useRef(0);
  const scrollSnaps = useRef<{ start: number; end: number }[]>([]);
  const renders = useRef(0);

  const scrollNext = () => {
    if (activeIndexRef.current + 1 === scrollSnaps.current.length) {
      scrollTo("unknown");

      return;
    }

    const nextItemStartEdge =
      scrollSnaps.current[activeIndexRef.current + 1].start;

    window.scrollTo({ top: nextItemStartEdge, behavior: "smooth" });
  };

  const handleScroll = () => {
    const items = document.querySelectorAll(".teste");

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const offset = 100;

      if (rect.top < offset && rect.bottom > offset) {
        setActiveIndex(index);
      }
    });
  };

  useLayoutEffect(() => {
    renders.current = renders.current + 1;

    if (renders.current > 1) return;
    if (!containerRef.current) return;

    const items = document.querySelectorAll(".teste");

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      scrollSnaps.current = [
        ...scrollSnaps.current,
        { start: window.scrollY + rect.top, end: window.scrollY + rect.bottom },
      ];
    });
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const observeVisibility = (entries: any) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);

        document.documentElement.style["scrollSnapType"] = "y mandatory";
      } else {
        window.removeEventListener("scroll", handleScroll);

        document.documentElement.style["scrollSnapType"] = "none";
      }
    };

    observerRef.current = new IntersectionObserver(observeVisibility, {
      root: null,
      threshold: 0.25,
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Stack
        ref={containerRef}
        sx={{ height: `${differentialItems.length * 100}svh` }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "7rem",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: `calc(${circleSize} + 5rem)`,
            }}
          >
            <Box
              sx={{
                height: circleSize,
                width: circleSize,
                borderRadius: circleSize,
                backgroundColor: "#363636",
                position: "absolute",
                transform: "translate(-25%, 0)",
              }}
            ></Box>

            <Container sx={{ position: "relative" }}>
              <Stack
                alignItems="flex-start"
                justifyContent="center"
                gap={2}
                sx={{ height: circleSize }}
              >
                <Animate
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 25 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{
                    duration: 0.75,
                  }}
                  key={`title ${activeIndex}`}
                >
                  <Typography
                    fontSize={24}
                    color="white"
                    fontWeight={700}
                    textTransform="uppercase"
                    maxWidth="22ch"
                  >
                    {parse(differentialItems[activeIndex].title)}
                  </Typography>
                </Animate>

                <Animate
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 25 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  key={`desc ${activeIndex}`}
                >
                  <Typography color="white" fontWeight={300} maxWidth="30ch">
                    {parse(differentialItems[activeIndex].description)}
                  </Typography>
                </Animate>

                <Animate
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 25 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.75,
                  }}
                  key={`button ${activeIndex}`}
                >
                  <Button variant="contained" sx={{ mt: 2 }}>
                    CONHECER
                  </Button>
                </Animate>
              </Stack>
            </Container>

            <Box
              sx={{
                height: "15rem",
                width: "15rem",
                position: "absolute",
                bottom: "2rem",
                right: 0,
              }}
            >
              <Animate
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 25 }}
                transition={{
                  duration: 0.75,
                  delay: 1,
                }}
                key={`image ${activeIndex}`}
              >
                <Box
                  sx={{
                    backgroundImage: `url('${differentialItems[activeIndex].image}')`,
                    backgroundSize: "cover",
                    height: "15rem",
                    width: "15rem",
                    borderRadius: "15rem",
                  }}
                />
              </Animate>
            </Box>
          </Box>

          <Stack alignItems="center">
            <IconButton onClick={scrollNext}>
              <SouthIcon />
            </IconButton>
          </Stack>
        </Box>

        <Stack
          sx={{
            top: 0,
            position: "absolute",
            height: "fit-content",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {differentialItems.map((item, index) => {
            return (
              <Box
                key={item.title}
                height="100svh"
                width="100%"
                sx={{ scrollSnapAlign: "start" }}
                className="teste"
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

const circleSize = "35rem";

const differentialItems: IDifferentialItem[] = [
  {
    title: "Endereço estratégico e sofisticado",
    description:
      "Ter um escritório bem localizado muda a forma como seu negócio é visto.",
    image: image1.src,
  },
  {
    title: "Infraestrutura impecável",
    description:
      "Cadeiras ergonômicas, internet ultra rápida e climatização total. ",
    image: image2.src,
  },
  {
    title: "Ambiente exclusivo para negócios",
    description:
      "Conecte-se a outros profissionais de sucesso e expanda sua rede.",
    image: image3.src,
  },
  {
    title: "Networking que abre portas",
    description:
      "Trabalhar cercado de mentes brilhantes pode ser o impulso que faltava para sua empresa crescer. Conexões reais acontecem aqui.",
    image: image4.src,
  },
  // {
  //   title: "Conforto total, mesmo nos dias mais quentes",
  //   description:
  //     "Balneário Camboriú pode ter temperaturas extremas, mas aqui dentro o clima é sempre perfeito. Todos os ambientes são 100% climatizados.",
  //   image: image1.src
  // },
];

interface IDifferentialItem {
  title: string;
  description: string;
  image: string;
}
