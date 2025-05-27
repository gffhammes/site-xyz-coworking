import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getWhatsappLink } from "@/utils/utils";
import { TrackingWrapper } from "../TrackingWrapper";

export interface IMenuCTAProps {
  theme?: "light" | "dark";
}

export const MenuCTA = ({ theme }: IMenuCTAProps) => {
  return (
    <TrackingWrapper section="header" action="contato">
      <Button
        variant="outlined"
        color={theme === "dark" ? "primary" : "secondary"}
        size="small"
        startIcon={<WhatsAppIcon />}
        LinkComponent="a"
        href={getWhatsappLink()}
        target="_blank"
      >
        contato
      </Button>
    </TrackingWrapper>
  );
};
