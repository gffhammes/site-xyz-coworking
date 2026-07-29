"use client";

import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { TrackingWrapper } from "../TrackingWrapper";
import { useAbTest } from "@/hooks/useAbTest";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

export interface IMenuCTAProps {
  theme?: "light" | "dark";
}

export const MenuCTA = ({ theme }: IMenuCTAProps) => {
  const isGoogle = useAbTest();
  const href = useWhatsappLink("gostaria de mais informações!");

  return (
    <TrackingWrapper section="header" action="contato" isGoogle={isGoogle}>
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
