import { OverridableComponent } from "@mui/material/OverridableComponent";

import { BusinessPlan } from "../Svg/BusinessPlan";
import { MyLocation } from "../Svg/MyLocation";
import { InTheOffice } from "../Svg/InTheOffice";
import { SharedWorkspace } from "../Svg/SharedWorkspace";
import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { MobileServicesSection } from "./MobileServicesSection";
import { DesktopServicesSection } from "./DesktopServicesSection";
import enderecoImg from "../../../public/images/endereco.jpg";
import estacoesImg from "../../../public/images/estacoes.jpg";
import reunioesImg from "../../../public/images/reuniao.jpg";
import salaImg from "../../../public/images/sala privativa.jpg";

export interface IServicesSectionProps {}

export const ServicesSection = (props: IServicesSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileServicesSection />}
      md={<DesktopServicesSection />}
    />
  );
};
