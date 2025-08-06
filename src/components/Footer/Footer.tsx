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
import { siteData } from "@/data/sites";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SvgIcon } from "@mui/material";

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
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | HTMLElement;
  name: string;
  href: string;
}

const TiktokIcon = () => (
  <SvgIcon>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="white"
        stroke="none"
      >
        <path
          d="M2700 3363 c0 -1156 -4 -1780 -10 -1823 -39 -243 -178 -439 -391
-550 -211 -110 -473 -110 -677 0 -220 119 -355 309 -393 552 -49 312 125 632
419 770 45 22 113 46 150 53 108 23 267 18 365 -11 16 -5 17 21 17 444 l0 449
-46 7 c-26 3 -108 6 -183 6 -688 0 -1302 -443 -1524 -1100 -80 -235 -104 -479
-72 -722 48 -365 208 -686 469 -943 216 -213 487 -362 784 -431 226 -53 516
-47 759 15 554 142 996 578 1153 1138 54 189 53 169 59 1225 l6 987 85 -55
c186 -121 440 -227 667 -280 106 -24 337 -54 421 -54 l42 0 0 439 0 438 -87 7
c-601 49 -1071 516 -1129 1124 l-7 72 -438 0 -439 0 0 -1757z"
        />
      </g>
    </svg>
  </SvgIcon>
);

export const socials = [
  {
    icon: WhatsAppIcon,
    name: "WhatsApp",
    href: whatsappLink,
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    href: siteData.socials.instagram,
  },
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
    href: siteData.socials.linkedin,
  },
  {
    icon: YouTubeIcon,
    name: "Youtube",
    href: siteData.socials.youtube,
  },
  {
    icon: TiktokIcon,
    name: "TikTok",
    href: siteData.socials.tiktok,
  },
];
