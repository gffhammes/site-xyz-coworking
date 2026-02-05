"use client";

import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IArticlePageHeroButtonsProps {}

export const ArticlePageHeroButtons = (props: IArticlePageHeroButtonsProps) => {
  return (
    <TrackingWrapper section="hero" action="ver-mais">
      <Button variant="contained" onClick={() => scrollTo("article", 200)}>
        Ler artigo
      </Button>
    </TrackingWrapper>
  );
};
