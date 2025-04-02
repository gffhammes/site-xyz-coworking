"use client";

import { Box } from "@mui/material";

export interface IDotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const DotButton = ({ onClick, selected }: IDotButtonProps) => {
  return (
    <Box
      component="button"
      sx={{
        height: ".75rem",
        width: ".75rem",
        borderRadius: ".75rem",
        backgroundColor: selected ? "primary.main" : "white",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
      aria-label="slide"
    />
  );
};
