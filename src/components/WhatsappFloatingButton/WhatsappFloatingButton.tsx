"use client";

import { Box, ButtonBase, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getElementId, whatsappLink, getWhatsappLink } from "@/utils/utils";
import { usePathname } from "next/navigation";

export interface IWhatsappFloatingButtonProps {}

export const WhatsappFloatingButton = (props: IWhatsappFloatingButtonProps) => {
  const pathname = usePathname();
  
  // Define mensagens específicas baseadas na rota
  const getCustomMessage = () => {
    if (pathname === "/") {
      return "Olá! Vim pelo anúncio do Google e gostaria de saber mais sobre o XYZ Coworking.";
    }
    if (pathname === "/servicos") {
      return "Olá! Vim pelo anúncio do Google e gostaria de conhecer os serviços do XYZ Coworking.";
    }
    // Para outras páginas, usa a mensagem padrão
    return undefined;
  };
  
  const href = getCustomMessage() ? getWhatsappLink(getCustomMessage()) : whatsappLink;
  
  return (
    <ButtonBase
      LinkComponent="a"
      href={href}
      id="click---botao-flutuante---contato"
      aria-label="whatsapp"
      target="_blank"
      sx={{
        position: "fixed",
        top: "50svh",
        transform: "translateY(-50%)",
        right: 0,
        borderRadius: "10rem 0 0 10rem",
        backgroundColor: "#25d366",
        color: "white",
        boxShadow: 10,
        zIndex: 999,
        height: { xs: "3.5rem", md: "5rem" },
        width: { xs: "3.5rem", md: "5rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: { xs: 32, md: 48 },
        pl: 1,
      }}
    >
      <WhatsAppIcon fontSize="inherit" />
    </ButtonBase>
  );
};
