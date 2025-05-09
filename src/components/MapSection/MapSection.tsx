import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { FooterMap } from "../Footer/FooterMap";
import { getMainWhatsappLink } from "@/utils/utils";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { MobileMapSection } from "./MobileMapSection";
import { DesktopMapSection } from "./DesktopMapSection";

export interface IMapSectionProps {}

export const MapSection = (props: IMapSectionProps) => {
  return (
    <ResponsiveComponent xs={<MobileMapSection />} md={<DesktopMapSection />} />
  );
};
