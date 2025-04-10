"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import {
  forwardRef,
  SVGProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Box, Stack, Typography } from "@mui/material";
import { DifferentialSlide } from "./DifferentialSlide";

import image1 from "../../../public/images/rearview-businesswoman-enjoying-her-great-results.jpg";
import image4 from "../../../public/images/group-friends-having-lunch-together-restaurant.jpg";
import image3 from "../../../public/images/medium-shot-smiley-colleagues-job.jpg";
import image2 from "../../../public/images/business-people-office-break.jpg";

export const DifferentialSection = () => {
  const [direction, setDirection] = useState<1 | -1>(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<any>(null);
  const [y, setY] = useState(0);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setDirection(-1);
      } else if (y < window.scrollY) {
        setDirection(1);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleScroll = () => {
    const items = document.querySelectorAll(".teste");

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const offset = 400;

      if (rect.top < offset && rect.bottom > offset) {
        setActiveIndex(index);
      }
    });
  };

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
      threshold: 0.1,
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
    <Stack
      sx={{
        position: "relative",
        height: `calc(${sectionHeight} * ${differentialItems.length})`,
      }}
    >
      <Box sx={{ position: "sticky", top: 0 }}>
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <DifferentialSlide key={activeIndex} index={activeIndex} />
        </AnimatePresence>
      </Box>

      <Box
        ref={containerRef}
        sx={{
          top: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {differentialItems.map((item, index) => (
          <Box
            key={index}
            className="teste"
            sx={{
              height: sectionHeight,
              scrollSnapAlign: "start",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: circleSize,
                width: "100%",
                overflow: "hidden",
                position: "relative",
                transform: `translateY(calc(${sectionHeight} / 6))`,
                zIndex: -1,
              }}
            >
              <Box
                sx={{
                  height: circleSize,
                  width: circleSize,
                  borderRadius: circleSize,
                  transition: ".8s ease all",
                  backgroundColor:
                    activeIndex === index ? "#dedede" : "#f4f4f4",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  position: "absolute",
                  transform: "translateX(-20%)",
                }}
              />
            </Box>

            <Box
              sx={{
                height: imageSize,
                width: "100%",
                overflow: "hidden",
                position: "relative",
                transform: `translateY(calc(${sectionHeight} / -8))`,
                zIndex: -1,
              }}
            >
              <Box
                sx={{
                  height: imageSize,
                  width: imageSize,
                  borderRadius: imageSize,
                  transition: ".8s ease all",
                  backgroundImage: `url("${item.image}")`,
                  opacity: activeIndex === index ? "1" : "0",
                  backgroundSize: "cover",
                  bottom: 0,
                  left: "100%",
                  transform: `translateX(-90%)`,
                  zIndex: -1,
                  position: "absolute",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export const sectionHeight = "40rem";

export const circleSize = "30rem";
export const imageSize = "15rem";

export const differentialItems: IDifferentialItem[] = [
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
];

interface IDifferentialItem {
  title: string;
  description: string;
  image: string;
}
