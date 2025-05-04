"use client";

import { Box, Stack, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface INavigationListProps {
  direction?: "row" | "column";
  theme?: "light" | "dark";
  onItemClick?: () => void;
}

export const NavigationList = ({
  direction = "row",
  theme = "light",
  onItemClick,
}: INavigationListProps) => {
  const pathname = usePathname();

  return (
    <Stack
      direction={direction}
      alignItems={direction === "row" ? "center" : "flex-start"}
      gap={4}
    >
      {pages
        .filter((page) => page.isActive)
        .map((page) => {
          const isActive = pathname === page.target;

          const activeColor = theme === "light" ? "#363636" : "#ffffff";
          const inactiveColor =
            theme === "light" ? "#989898" : "rgba(255, 255, 255, 0.6)";
          const hoverColor =
            theme === "light" ? "secondary.main" : "primary.main";

          return (
            <Box
              key={page.target}
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
        })}
    </Stack>
  );
};

export interface IPage {
  name: string;
  target: string;
  isActive: boolean;
  openInNewTab?: boolean;
}

export const pages = [
  {
    name: "Home",
    target: "/",
    isActive: true,
  },
  {
    name: "Serviços",
    target: "/servicos",
    isActive: true,
  },
  {
    name: "Blog",
    target: "https://bc.xyzcoworking.com/blog/",
    isActive: true,
    openInNewTab: true,
  },
  {
    name: "Contato",
    target: "/contato",
    isActive: false,
  },
];
