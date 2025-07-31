"use client";

import { usePathname } from "next/navigation";
import { IPage } from "./NavigationList";
import { Box, Menu, MenuItem, Popover, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface INavigationListItemProps {
  theme?: "light" | "dark";
  onItemClick?: () => void;
  page: IPage;
}

export const NavigationListItem = ({
  onItemClick,
  theme,
  page,
}: INavigationListItemProps) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const isActive = pathname === page.target;

  const activeColor = theme === "light" ? "#363636" : "#ffffff";
  const inactiveColor =
    theme === "light" ? "#989898" : "rgba(255, 255, 255, 0.6)";
  const hoverColor = theme === "light" ? "secondary.main" : "primary.main";

  if (page.subItems) {
    return (
      <Box>
        <Stack direction="row" alignItems="center">
          <Box
            component={Link}
            href={page.target}
            target={page.openInNewTab ? "_blank" : "_self"}
            sx={{
              cursor: "pointer",
              color: isActive ? activeColor : inactiveColor,
              transition: ".3s ease all",

              "&:hover": {
                color: hoverColor,
              },
            }}
          >
            <Typography>{page.name}</Typography>
          </Box>

          <Box
            onClick={handleClick}
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              cursor: "pointer",
              color: inactiveColor,
            }}
          >
            <KeyboardArrowDownIcon />
          </Box>
        </Stack>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {page.subItems.map((item) => (
            <Link key={item.name} href={`/servicos/${item.target}`}>
              <MenuItem onClick={handleClose}>{item.name}</MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    );
  }

  return (
    <Box
      component={Link}
      href={page.target}
      target={page.openInNewTab ? "_blank" : "_self"}
      sx={{
        cursor: "pointer",
        color: isActive ? activeColor : inactiveColor,

        transition: ".3s ease all",

        "&:hover": {
          color: hoverColor,
        },
      }}
      onClick={onItemClick}
    >
      <Typography>{page.name}</Typography>
    </Box>
  );
};
