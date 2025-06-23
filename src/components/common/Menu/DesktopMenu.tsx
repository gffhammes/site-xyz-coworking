import { Button, Stack } from "@mui/material";
import { NavigationList } from "../NavigationList";
import { MenuCTA } from "./MenuCTA";
import { MenuClientsAccess } from "./MenuClientsAccess";

export interface IDesktopMenuProps {
  theme?: "light" | "dark";
}

export const DesktopMenu = ({ theme = "light" }: IDesktopMenuProps) => {
  return (
    <Stack direction="row" gap={4} alignItems="center">
      <NavigationList theme={theme} />

      <Stack direction="row" gap={2}>
        <MenuClientsAccess theme={theme} />
        <MenuCTA theme={theme} />
      </Stack>
    </Stack>
  );
};
