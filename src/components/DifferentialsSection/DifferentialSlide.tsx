"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { motion, usePresenceData } from "motion/react";
import { forwardRef } from "react";
import parse from "html-react-parser";
import { differentialItems, xTranslateCircle } from "./DifferentialSection";

export interface IDifferentialSlideProps {
  index: number;
  isActiveSlide: boolean;
}

export const DifferentialSlide = forwardRef(function Slide(
  { index, isActiveSlide }: IDifferentialSlideProps,
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();

  const selectedItem = differentialItems[index];

  return (
    <Stack
      sx={{
        position: "relative",
        zIndex: 1,
        color: "white",
        transition: ".3s ease all",
        transform: `translateX(${xTranslateCircle})`,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Stack
        alignItems="flex-start"
        gap={2}
        sx={{
          pointerEvents: "all",
        }}
      >
        <Typography
          fontSize={{ xs: 24, md: 32 }}
          fontWeight={700}
          lineHeight={1.2}
        >
          {parse(selectedItem.title)}
        </Typography>

        <Typography fontWeight={300} maxWidth="30ch">
          {parse(selectedItem.description)}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          CONHECER
        </Button>
      </Stack>
    </Stack>
  );
});
