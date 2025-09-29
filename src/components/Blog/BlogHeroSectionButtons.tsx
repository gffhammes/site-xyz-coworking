"use client";

import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { getElementId, scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IBlogHeroSectionButtonsProps {}

export const BlogHeroSectionButtons = (props: IBlogHeroSectionButtonsProps) => {
  return (
    <>
      <TrackingWrapper section="hero" action="ver-mais">
        <Button
          variant="contained"
          onClick={() => scrollTo("blog-content", 200)}
        >
          Ver artigos{" "}
        </Button>
      </TrackingWrapper>
    </>
  );
};
