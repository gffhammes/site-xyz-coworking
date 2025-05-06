import { IServiceItem } from "@/data/types";
import { MobilePlansSection } from "./MobilePlansSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopPlansSection } from "./DesktopPlansSection";

export interface IPlansSectionProps {
  service: IServiceItem;
}

export const PlansSection = ({ service }: IPlansSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobilePlansSection service={service} />}
      md={<DesktopPlansSection service={service} />}
    />
  );
};
