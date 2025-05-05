import { MobileStepperSection } from "./MobileStepperSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopStepperSection } from "./DesktopStepperSection";
import { IServiceItem } from "@/data/types";

export interface IStepperSectionProps {
  service: IServiceItem;
}

export const StepperSection = ({ service }: IStepperSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileStepperSection service={service} />}
      md={<DesktopStepperSection service={service} />}
    />
  );
};
