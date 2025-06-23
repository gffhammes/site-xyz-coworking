import { Button } from "@mui/material";
import { getWhatsappLink } from "@/utils/utils";
import { TrackingWrapper } from "../TrackingWrapper";

export interface IMenuClientsAccessProps {
  theme?: "light" | "dark";
}

export const MenuClientsAccess = ({ theme }: IMenuClientsAccessProps) => {
  return (
    <TrackingWrapper section="header" action="contato">
      <Button
        variant="text"
        color={theme === "dark" ? "primary" : "secondary"}
        size="small"
        LinkComponent="a"
        href="https://xyzcoworking.conexa.app/index.php?r=site/login"
        target="_blank"
      >
        acesso clientes
      </Button>
    </TrackingWrapper>
  );
};
