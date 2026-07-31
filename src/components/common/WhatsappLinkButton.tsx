"use client";

import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { Button, ButtonProps } from "@mui/material";

export interface IWhatsappLinkButtonProps extends ButtonProps {
  messageSuffix?: string;
}

export const WhatsappLinkButton = ({
  messageSuffix,
  id,
  ...props
}: IWhatsappLinkButtonProps) => {
  const buttonHref = useWhatsappLink(messageSuffix);

  return (
    <a href={buttonHref} target="_blank" id={id} style={{ display: "block" }}>
      <Button {...props} />
    </a>
  );
};
