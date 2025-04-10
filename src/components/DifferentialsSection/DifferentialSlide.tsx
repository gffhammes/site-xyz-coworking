"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion, usePresenceData } from "motion/react";
import { forwardRef } from "react";
import image1 from "../../../public/images/rearview-businesswoman-enjoying-her-great-results.jpg";
import image4 from "../../../public/images/group-friends-having-lunch-together-restaurant.jpg";
import image3 from "../../../public/images/medium-shot-smiley-colleagues-job.jpg";
import image2 from "../../../public/images/business-people-office-break.jpg";
import parse from "html-react-parser";
import {
  differentialItems,
  sectionHeight,
  slidePT,
} from "./DifferentialSection";

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
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: direction * 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              type: "spring",
              visualDuration: 0.3,
              bounce: 0.4,
            },
          }}
          exit={{ opacity: 0, y: direction * -50 }}
        >
          <Stack
            alignItems="flex-start"
            justifyContent="flex-start"
            gap={2}
            sx={{ height: sectionHeight, pt: slidePT }}
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
