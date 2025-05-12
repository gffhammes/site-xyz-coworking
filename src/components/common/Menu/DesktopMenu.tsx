import { Button, Stack } from "@mui/material";
import { NavigationList } from "../NavigationList";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getMainWhatsappLink } from "@/utils/utils";

export interface IDesktopMenuProps {
  theme?: "light" | "dark";
}

export const DesktopMenu = ({ theme = "light" }: IDesktopMenuProps) => {
  return (
    <Stack direction="row" gap={4} alignItems="center">
      <NavigationList theme={theme} />

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
    </Stack>
  );
};
