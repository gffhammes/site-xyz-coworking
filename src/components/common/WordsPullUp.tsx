"use client";

import { Typography, TypographyProps } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export function WordsPullUp({
  text,
  props,
  initialDelay = 0,
}: {
  text: string;
  props?: TypographyProps;
  initialDelay?: number;
}) {
  const splittedText = text.split(" ");

  const pullupVariant: Variants = {
    initial: { y: 10, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: initialDelay + index * 0.05,
        type: "spring",
        duration: 0.4,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {splittedText.map((current, index) => (
        <motion.div
          key={index}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          //   animate={isInView ? "animate" : ""}
          custom={index}
        >
          {current == "" ? (
            <span>&nbsp;</span>
          ) : (
            <Typography sx={{ pr: 1 }} {...props}>
              {current}
            </Typography>
          )}
        </motion.div>
      ))}
    </div>
  );
}
