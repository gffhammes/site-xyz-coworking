"use client";

import { Box, ButtonBase, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getElementId, whatsappLink, getWhatsappLink } from "@/utils/utils";
import { usePathname } from "next/navigation";
import { useAbTest } from "@/hooks/useAbTest";
import { useMemo } from "react";

export interface IWhatsappFloatingButtonProps {}

export const WhatsappFloatingButton = (props: IWhatsappFloatingButtonProps) => {
  const pathname = usePathname();
  const isGoogle = useAbTest();

  // Only apply custom Google messages when experiment active on Joinville
  const getCustomMessage = () => {
    if (!isGoogle) return undefined;

    // Remove /google prefix to get the actual page
    const actualPath = pathname.replace(/^\/google/, '') || '/';

    if (actualPath === "/") {
      return "Olá! Vim pelo anúncio do Google e gostaria de saber mais sobre o XYZ Coworking.";
    }

    if (actualPath === "/servicos") {
      return "Olá! Vim pelo anúncio do Google e gostaria de conhecer os serviços do XYZ Coworking.";
    }

    // service pages
    if (actualPath.includes("endereco-fiscal") || actualPath.includes("endereco-fiscal-e-comercial")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre Endereço Fiscal!";
    }

    if (actualPath.includes("salas-privativas")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre as Salas Privativas.";
    }

    if (actualPath.includes("salas-reuniao")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre as Salas de Reunião.";
    }

    if (actualPath.includes("estacoes-trabalho")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre as Estações de Trabalho.";
    }

    if (actualPath.includes("salas-atendimento")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre as Salas de Atendimento.";
    }

    if (actualPath.includes("membro-x")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre o Endereço Comercial / Membro X.";
    }

    if (actualPath.includes("sessao-fotografica")) {
      return "Olá, vim pelo anúncio do Google e gostaria de mais informações sobre a Sessão Fotográfica Corporativa!";
    }

    return "Olá, vim pelo anúncio do Google e gostaria de mais informações!";
  };

  const href = useMemo(() => {
    const customMsg = getCustomMessage();
    const link = customMsg ? getWhatsappLink(customMsg) : whatsappLink;
    console.log('[WhatsappFloatingButton] isGoogle:', isGoogle, 'pathname:', pathname, 'customMsg:', customMsg, 'href:', link);
    return link;
  }, [isGoogle, pathname]);

  const buttonId = useMemo(() => {
    return isGoogle ? "click---botao-flutuante---contato---google" : "click---botao-flutuante---contato";
  }, [isGoogle]);
  
  return (
    <ButtonBase
      LinkComponent="a"
      href={href}
      id={buttonId}
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
