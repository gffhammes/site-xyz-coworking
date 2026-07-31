import { Button } from "@mui/material";
import { TrackingWrapper } from "../TrackingWrapper";
import { siteData } from "@/data/sites";

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
        href={siteData.urlConexa}
        target="_blank"
      >
        acesso clientes
      </Button>
    </TrackingWrapper>
  );
};
