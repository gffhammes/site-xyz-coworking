"use client";

import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getWhatsappLink } from "@/utils/utils";
import { TrackingWrapper } from "../TrackingWrapper";
import { usePathname } from "next/navigation";

export interface IMenuCTAProps {
  theme?: "light" | "dark";
}

export const MenuCTA = ({ theme }: IMenuCTAProps) => {
  const pathname = usePathname();
  
  // Define mensagens específicas baseadas na rota
  const getCustomMessage = () => {
    if (pathname === "/servicos") {
      return "Olá! Vim pelo anúncio do Google e quero conhecer os serviços do XYZ Coworking.";
    }
    // Para home e outras páginas, usa a mensagem padrão
    return undefined;
  };
  
  return (
    <TrackingWrapper section="header" action="contato">
      <Button
        variant="outlined"
        color={theme === "dark" ? "primary" : "secondary"}
        size="small"
        startIcon={<WhatsAppIcon />}
        LinkComponent="a"
        href={getWhatsappLink(getCustomMessage())}
        target="_blank"
      >
        contato
      </Button>
    </TrackingWrapper>
  );
};
