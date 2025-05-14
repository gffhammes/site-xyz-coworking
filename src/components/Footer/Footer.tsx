import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DiretoLightRow } from "../DiretoRow/DiretoLightRow";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { whatsappLink } from "@/utils/utils";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return (
    <>
      <ResponsiveComponent xs={<MobileFooter />} md={<DesktopFooter />} />

      <DiretoLightRow />
    </>
  );
};

export interface ISocialItem {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  name: string;
  href: string;
}

export const socials = [
  {
    icon: WhatsAppIcon,
    name: "WhatsApp",
    href: whatsappLink,
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    href: "https://www.instagram.com/xyzcoworkingbc/",
  },
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/coworkingxyz",
  },
];
