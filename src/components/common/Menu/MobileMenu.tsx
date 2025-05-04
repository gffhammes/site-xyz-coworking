"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { useState } from "react";

export interface IMobileMenuProps {
  color?: "white" | "rgba(0, 0, 0, 0.54)";
}

export const MobileMenu = ({
  color = "rgba(0, 0, 0, 0.54)",
}: IMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Box sx={{ m: "-5px", color }}>
        <IconButton size="small" onClick={handleOpen} color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>

      <MobileMenuDrawer isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};
