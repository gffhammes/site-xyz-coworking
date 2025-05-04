"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { useState } from "react";

export interface IMobileMenuProps {}

export const MobileMenu = (props: IMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Box sx={{ m: "-5px" }}>
        <IconButton size="small" onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
      </Box>

      <MobileMenuDrawer isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};
