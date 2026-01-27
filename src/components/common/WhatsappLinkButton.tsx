import { getWhatsappLink, whatsappLink } from "@/utils/utils";
import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export interface IWhatsappLinkButtonProps extends ButtonProps {
  customMessage?: string;
}

export const WhatsappLinkButton = ({
  customMessage,
  id,
  ...props
}: IWhatsappLinkButtonProps) => {
  const buttonHref = customMessage
    ? getWhatsappLink(customMessage)
    : whatsappLink;

  console.log("[WhatsappLinkButton] customMessage:", customMessage);
  console.log("[WhatsappLinkButton] buttonHref:", buttonHref);

  return (
    <a href={buttonHref} target="_blank" id={id} style={{ display: "block" }}>
      <Button {...props} />
    </a>
  );
};
