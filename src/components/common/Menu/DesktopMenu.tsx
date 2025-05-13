import { Button, Stack } from "@mui/material";
import { NavigationList } from "../NavigationList";
import { MenuCTA } from "./MenuCTA";

export interface IDesktopMenuProps {
  theme?: "light" | "dark";
}

export const DesktopMenu = ({ theme = "light" }: IDesktopMenuProps) => {
  return (
    <Stack direction="row" gap={4} alignItems="center">
      <NavigationList theme={theme} />

      <MenuCTA theme={theme} />
    </Stack>
  );
};
