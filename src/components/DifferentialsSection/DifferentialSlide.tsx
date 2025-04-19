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
import { differentialItems, sectionHeight } from "./DifferentialSection";

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
      justifyContent="center"
      sx={{
        position: "relative",
        zIndex: 1,
        color: "white",
        // height: "100%",
        // opacity: isActiveSlide ? "1" : "0",
        transition: ".3s ease all",
        transform: "translateX(25%)",
        // transform: isActiveSlide ? "translateX(15%)" : "none",
        width: "100%",
      }}
    >
      <Container>
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          gap={2}
          sx={{
            pointerEvents: "all",
          }}
        >
          <Typography
            fontSize={24}
            fontWeight={700}
            textTransform="uppercase"
            maxWidth="22ch"
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
      </Container>
    </Stack>
  );
});
