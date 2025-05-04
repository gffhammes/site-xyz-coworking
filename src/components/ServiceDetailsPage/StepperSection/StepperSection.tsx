import { IServiceItem } from "@/data/services";
import { MobileStepperSection } from "./MobileStepperSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopStepperSection } from "./DesktopStepperSection";

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
