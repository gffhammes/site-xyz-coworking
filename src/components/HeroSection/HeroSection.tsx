import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DesktopHeroSection } from "./DesktopHeroSection";
import { MobileHeroSection } from "./MobileHeroSection";

export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileHeroSection />}
      md={<DesktopHeroSection />}
    />
  );
};
