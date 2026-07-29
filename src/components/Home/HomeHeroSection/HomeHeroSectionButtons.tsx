"use client";

import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { useAbTest } from "@/hooks/useAbTest";
import { getElementId, scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IHomeHeroSectionButtonsProps {}

export const HomeHeroSectionButtons = (props: IHomeHeroSectionButtonsProps) => {
  const isGoogle = useAbTest();

  return (
    <>
      <TrackingWrapper section="hero" action="contato" isGoogle={isGoogle}>
        <WhatsappLinkButton
          variant="contained"
          messageSuffix="gostaria de agendar uma visita!"
          fullWidth
        >
          agendar visita
        </WhatsappLinkButton>
      </TrackingWrapper>

      <TrackingWrapper section="hero" action="ver-mais" isGoogle={isGoogle}>
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
