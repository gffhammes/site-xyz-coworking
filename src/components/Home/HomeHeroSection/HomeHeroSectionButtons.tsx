"use client";

import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { getElementId, scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IHomeHeroSectionButtonsProps {}

export const HomeHeroSectionButtons = (props: IHomeHeroSectionButtonsProps) => {
  return (
    <>
      <TrackingWrapper section="hero" action="contato">
        <WhatsappLinkButton
          variant="contained"
          customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
          fullWidth
        >
          agendar visita
        </WhatsappLinkButton>
      </TrackingWrapper>

      <TrackingWrapper section="hero" action="ver-mais">
        <Button
          variant="outlined"
          onClick={() => scrollTo("home-content", 200)}
        >
          Descubra o xyz
        </Button>
      </TrackingWrapper>
    </>
  );
};
