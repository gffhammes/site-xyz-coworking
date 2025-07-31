import { siteData } from "@/data/sites";
import { NavigationListItem } from "./NavigationListItem";
import { Stack } from "@mui/material";

export interface INavigationListProps {
  direction?: "row" | "column";
  theme?: "light" | "dark";
  onItemClick?: () => void;
  gap?: number;
}

export const NavigationList = ({
  direction = "row",
  theme = "light",
  onItemClick,
  gap = 4,
}: INavigationListProps) => {
  return (
    <Stack
      direction={direction}
      alignItems={direction === "row" ? "center" : "flex-start"}
      gap={gap}
    >
      {pages
        .filter((page) => page.isActive)
        .map((page) => (
          <NavigationListItem
            page={page}
            key={page.name}
            onItemClick={onItemClick}
            theme={theme}
          />
        ))}
    </Stack>
  );
};

export interface IPage {
  name: string;
  target: string;
  isActive: boolean;
  openInNewTab?: boolean;
  subItems?: {
    name: string;
    target: string;
  }[];
}

export const pages: IPage[] = [
  {
    name: "Home",
    target: "/",
    isActive: true,
  },
  {
    name: "Serviços",
    target: "/servicos",
    isActive: true,
    subItems: siteData.services.map((service) => ({
      name: service.title,
      target: service.slug,
    })),
  },
  // {
  //   name: "Blog",
  //   target: "https://bc.xyzcoworking.com/blog/",
  //   isActive: true,
  //   openInNewTab: true,
  // },
  // {
  //   name: "Contato",
  //   target: "/contato",
  //   isActive: false,
  // },
];
