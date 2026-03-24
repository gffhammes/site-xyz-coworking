import { siteData } from "@/data/sites";
import { NavigationListItem } from "./NavigationListItem";
import { Stack } from "@mui/material";

export interface INavigationListProps {
  direction?: "row" | "column";
  theme?: "light" | "dark";
  onItemClick?: () => void;
  gap?: number;
  location: "footer" | "header";
}

export const NavigationList = ({
  direction = "row",
  theme = "light",
  onItemClick,
  gap = 4,
  location,
}: INavigationListProps) => {
  const listToRender = pages.filter((page) => {
    if (!page.isActive) {
      return false;
    }

    if (
      page.whereToShow === "headerAndFooter" ||
      page.whereToShow === undefined
    ) {
      return true;
    }

    if (location === "footer" && page.whereToShow === "footerOnly") {
      return true;
    }

    if (location === "header" && page.whereToShow === "headerOnly") {
      return true;
    }

    return false;
  });

  return (
    <Stack
      direction={direction}
      alignItems={direction === "row" ? "center" : "flex-start"}
      gap={gap}
    >
      {listToRender.map((page) => (
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
  whereToShow?: "footerOnly" | "headerOnly" | "headerAndFooter";
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
  {
    name: "Tabela de Preços",
    isActive: !!siteData.pricesTableFileId,
    target: "/tabela-de-precos",
  },
  {
    name: "Termos e Condições",
    isActive: !!siteData.termsAndConditionFileId,
    target: "/termos-e-condicoes-dos-servicos",
    whereToShow: "footerOnly",
  },
  {
    name: "Política de Privacidade",
    isActive: true,
    target: "/politica-de-privacidade",
    whereToShow: "footerOnly",
  },
  {
    name: "Blog",
    target: "/blog",
    isActive: true,
    openInNewTab: true,
  },
];
