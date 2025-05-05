import { MobileBenefitsSection } from "./MobileBenefitsSection";
import { DesktopBenefitsSection } from "./DesktopBenefitsSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { IServiceItem } from "@/data/types";

export interface IBenefitsSectionProps {
  service: IServiceItem;
}

export const BenefitsSection = ({ service }: IBenefitsSectionProps) => {
  return (
    <div id="beneficios">
      <ResponsiveComponent
        xs={<MobileBenefitsSection service={service} />}
        lg={<DesktopBenefitsSection service={service} />}
      />
    </div>
  );
};
