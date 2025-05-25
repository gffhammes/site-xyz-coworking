"use client";

import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { IServiceItem } from "@/data/types";
import { scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IServiceDetailsHeroSectionButtonsProps {
  service: IServiceItem;
}

export const ServiceDetailsHeroSectionButtons = ({
  service,
}: IServiceDetailsHeroSectionButtonsProps) => {
  return (
    <>
      <WhatsappLinkButton
        variant="contained"
        customMessage={`Olá, vim pelo site e gostaria de mais detalhes sobre ${service.title}!`}
        fullWidth
        data-section="hero"
        data-action="contato"
      >
        {service.detailsPage.heroCTAText}
      </WhatsappLinkButton>

      <Button
        variant="outlined"
        onClick={() => scrollTo("beneficios", 200)}
        data-section="hero"
        data-action="ver-mais"
      >
        CONHECER MAIS
      </Button>
    </>
  );
};
