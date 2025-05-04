import { IServiceItem } from "@/data/services";
import { MobileBenefitsSection } from "./MobileBenefitsSection";
import { DesktopBenefitsSection } from "./DesktopBenefitsSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";

export interface IBenefitsSectionProps {
  service: IServiceItem;
}

export const BenefitsSection = ({ service }: IBenefitsSectionProps) => {
  return (
    <div id="beneficios">
      <ResponsiveComponent
        xs={<MobileBenefitsSection service={service} />}
        md={<DesktopBenefitsSection service={service} />}
      />
    </div>
  );
};
