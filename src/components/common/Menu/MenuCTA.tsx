import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getMainWhatsappLink } from "@/utils/utils";

export interface IMenuCTAProps {
  theme?: "light" | "dark";
}

export const MenuCTA = ({ theme }: IMenuCTAProps) => {
  return (
    <Button
      variant="outlined"
      color={theme === "dark" ? "primary" : "secondary"}
      size="small"
      startIcon={<WhatsAppIcon />}
      LinkComponent="a"
      href={getMainWhatsappLink()}
      target="_blank"
    >
      contato
    </Button>
  );
};
