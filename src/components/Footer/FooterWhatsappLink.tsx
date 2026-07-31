"use client";

import { formattedWhatsApp } from "@/utils/utils";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { Typography } from "@mui/material";

export const FooterWhatsappLink = () => {
  const href = useWhatsappLink();

  return (
    <a href={href}>
      <Typography>WhatsApp: {formattedWhatsApp}</Typography>
    </a>
  );
};
