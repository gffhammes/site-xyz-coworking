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
}

export const DifferentialSlide = forwardRef(function Slide(
  { index }: IDifferentialSlideProps,
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();

  const selectedItem = differentialItems[index];

  return (
    <Box sx={{ position: "relative", zIndex: 1, color: "white" }}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: direction * 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          }}
          exit={{ opacity: 0, y: direction * -50 }}
        >
          <Stack
            alignItems="flex-start"
            justifyContent="flex-start"
            gap={2}
            sx={{ height: sectionHeight, pt: `calc(${sectionHeight} / 3)` }}
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
        </motion.div>
      </Container>
    </Box>
  );
});
