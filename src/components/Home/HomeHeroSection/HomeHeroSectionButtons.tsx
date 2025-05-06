"use client";

import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IHomeHeroSectionButtonsProps {}

export const HomeHeroSectionButtons = (props: IHomeHeroSectionButtonsProps) => {
  return (
    <>
      <WhatsappLinkButton
        variant="contained"
        customMessage="Olá, vim pelo site e gostaria de agendar uma visita!"
      >
        agendar visita
      </WhatsappLinkButton>

      <Button variant="outlined" onClick={() => scrollTo("home-content", 200)}>
        Descubra o xyz
      </Button>
    </>
  );
};
