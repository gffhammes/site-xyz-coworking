"use client";

import { Box, ButtonBase, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getElementId } from "@/utils/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

export interface IWhatsappFloatingButtonProps {}

export const WhatsappFloatingButton = (props: IWhatsappFloatingButtonProps) => {
  const pathname = usePathname();
  const getMessageSuffix = () => {
    const actualPath = pathname.replace(/^\/google/, "") || "/";

    if (actualPath === "/") {
      return "gostaria de saber mais sobre o XYZ Coworking.";
    }

    if (actualPath === "/servicos") {
      return "gostaria de conhecer os serviços do XYZ Coworking.";
    }

    if (
      actualPath.includes("endereco-fiscal") ||
      actualPath.includes("endereco-fiscal-e-comercial")
    ) {
      return "gostaria de mais informações sobre Endereço Fiscal!";
    }

    if (actualPath.includes("salas-privativas")) {
      return "gostaria de mais informações sobre as Salas Privativas.";
    }

    if (actualPath.includes("salas-reuniao")) {
      return "gostaria de mais informações sobre as Salas de Reunião.";
    }

    if (actualPath.includes("estacoes-trabalho")) {
      return "gostaria de mais informações sobre as Estações de Trabalho.";
    }

    if (actualPath.includes("salas-atendimento")) {
      return "gostaria de mais informações sobre as Salas de Atendimento.";
    }

    if (actualPath.includes("membro-x")) {
      return "gostaria de mais informações sobre o Endereço Comercial / Membro X.";
    }

    if (actualPath.includes("sessao-fotografica")) {
      return "gostaria de mais informações sobre a Sessão Fotográfica Corporativa!";
    }

    return "gostaria de mais informações!";
  };

  const href = useWhatsappLink(getMessageSuffix());

  const buttonId = useMemo(() => {
    return "click---botao-flutuante---contato";
  }, []);

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
