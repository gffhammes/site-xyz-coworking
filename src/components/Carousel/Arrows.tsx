import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface IArrowsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export const Arrows = ({ scrollPrev, scrollNext }: IArrowsProps) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: ".2rem",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,.8)",
          borderRadius: "4rem",
        }}
        onClick={scrollPrev}
      >
        <IconButton color="default" size="small" aria-label="Slide Anterior">
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: ".2rem",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,.8)",
          borderRadius: "4rem",
        }}
        onClick={scrollNext}
      >
        <IconButton color="default" size="small" aria-label="Próximo Slide">
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};
