import { Box, Container, Drawer, IconButton, Stack } from "@mui/material";
import { NavigationList } from "../NavigationList/NavigationList";
import CloseIcon from "@mui/icons-material/Close";
import { MenuCTA } from "./MenuCTA";
import { MenuClientsAccess } from "./MenuClientsAccess";

export interface IMobileMenuDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const MobileMenuDrawer = ({
  isOpen,
  handleClose,
}: IMobileMenuDrawerProps) => {
  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      anchor="right"
      PaperProps={{ sx: { width: "80%", maxWidth: "20rem" } }}
    >
      <Stack gap={10} sx={{ px: 4, py: 4 }}>
        <Box sx={{ m: "-5px", alignSelf: "flex-end" }}>
          <IconButton size="small" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <NavigationList direction="column" onItemClick={handleClose} />

        <Stack gap={2}>
          <MenuClientsAccess />
          <MenuCTA theme="light" />
        </Stack>
      </Stack>
    </Drawer>
  );
};
