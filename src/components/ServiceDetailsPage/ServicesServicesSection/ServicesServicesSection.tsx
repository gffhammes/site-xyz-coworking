import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { ServicesPageMobileServicesSection } from "./ServicesPageMobileServicesSection";
import { ServicesPageDesktopServicesSection } from "./ServicesPageDesktopServicesSection";

export interface IServicesServicesSectionProps {}

export const ServicesServicesSection = (
  props: IServicesServicesSectionProps
) => {
  return (
    <ResponsiveComponent
      xs={<ServicesPageMobileServicesSection />}
      md={<ServicesPageDesktopServicesSection />}
    />
  );
};
