import { getMainWhatsappLink, mainWhatsappLink } from "@/utils/utils";
import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export interface IWhatsappLinkButtonProps extends ButtonProps {
  customMessage?: string;
}

export const WhatsappLinkButton = ({
  customMessage,
  ...props
}: IWhatsappLinkButtonProps) => {
  const buttonHref = customMessage
    ? getMainWhatsappLink(customMessage)
    : mainWhatsappLink;

  return (
    <a href={buttonHref} target="_blank">
      <Button {...props} />
    </a>
  );
};
