import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopServiceDetailsHeroSection } from "./DesktopServiceDetailsHeroSection";
import { MobileServiceDetailsHeroSection } from "./MobileServiceDetailsHeroSection";
import heroBg from "../../../../public/images/business-people-office-break.jpg";
import { IServiceItem } from "@/data/services";

export interface IServiceDetailsHeroSectionProps {
  service: IServiceItem;
}

export const ServiceDetailsHeroSection = ({
  service,
}: IServiceDetailsHeroSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileServiceDetailsHeroSection service={service} />}
      md={<DesktopServiceDetailsHeroSection service={service} />}
    />
  );
};
