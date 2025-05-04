import { MobileServicesSection } from "./MobileServicesSection";
import { DesktopServicesSection } from "./DesktopServicesSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";

export interface IServicesSectionProps {}

export const ServicesSection = (props: IServicesSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileServicesSection />}
      md={<DesktopServicesSection />}
    />
  );
};
