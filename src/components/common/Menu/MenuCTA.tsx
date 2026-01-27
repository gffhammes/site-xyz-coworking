"use client";

import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getWhatsappLink } from "@/utils/utils";
import { TrackingWrapper } from "../TrackingWrapper";
import { usePathname } from "next/navigation";
import { useAbTest } from "@/hooks/useAbTest";

export interface IMenuCTAProps {
  theme?: "light" | "dark";
}

export const MenuCTA = ({ theme }: IMenuCTAProps) => {
  const pathname = usePathname();
  const isGoogle = useAbTest();

  // Define mensagens específicas baseadas na rota apenas para o experimento
  const getCustomMessage = () => {
    if (!isGoogle) return undefined;

    if (pathname === "/servicos") {
      return "Olá! Vim pelo anúncio do Google e quero conhecer os serviços do XYZ Coworking.";
    }

    return "Olá, vim pelo anúncio do Google e gostaria de mais informações!";
  };
  
  const customMsg = getCustomMessage();
  const href = getWhatsappLink(customMsg);
  
  return (
    <TrackingWrapper section="header" action="contato">
      <Button
        variant="outlined"
        color={theme === "dark" ? "primary" : "secondary"}
        size="small"
        startIcon={<WhatsAppIcon />}
        LinkComponent="a"
        href={href}
        target="_blank"
      >
        contato
      </Button>
    </TrackingWrapper>
  );
};
