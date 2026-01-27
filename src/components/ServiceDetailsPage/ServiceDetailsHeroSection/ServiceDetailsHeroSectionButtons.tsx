"use client";

import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { WhatsappLinkButton } from "@/components/common/WhatsappLinkButton";
import { useAbTest } from "@/hooks/useAbTest";
import { IServiceItem } from "@/data/types";
import { scrollTo } from "@/utils/utils";
import { Button } from "@mui/material";

export interface IServiceDetailsHeroSectionButtonsProps {
  service: IServiceItem;
}

export const ServiceDetailsHeroSectionButtons = ({
  service,
}: IServiceDetailsHeroSectionButtonsProps) => {
  const isGoogle = useAbTest();
  const heroMessage = isGoogle
    ? `Olá, vim pelo anúncio do Google e gostaria de mais detalhes sobre ${service.title}!`
    : `Olá, vim pelo site e gostaria de mais detalhes sobre ${service.title}!`;
  return (
    <>
      <TrackingWrapper section="hero" action="contato">
        <WhatsappLinkButton
          variant="contained"
          customMessage={heroMessage}
          fullWidth
        >
          {service.detailsPage.heroCTAText}
        </WhatsappLinkButton>
      </TrackingWrapper>

      <TrackingWrapper section="hero" action="ver-mais">
        <Button variant="outlined" onClick={() => scrollTo("beneficios", 200)}>
          CONHECER MAIS
        </Button>
      </TrackingWrapper>
    </>
  );
};
