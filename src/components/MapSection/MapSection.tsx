import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { MobileMapSection } from "./MobileMapSection";
import { DesktopMapSection } from "./DesktopMapSection";

export interface IMapSectionProps {}

export const MapSection = (props: IMapSectionProps) => {
  return (
    <ResponsiveComponent xs={<MobileMapSection />} md={<DesktopMapSection />} />
  );
};
