import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DiretoLightRow } from "../DiretoRow/DiretoLightRow";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return (
    <>
      <ResponsiveComponent xs={<MobileFooter />} md={<DesktopFooter />} />

      <DiretoLightRow />
    </>
  );
};
