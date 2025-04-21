import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return <ResponsiveComponent xs={<MobileFooter />} md={<DesktopFooter />} />;
};
