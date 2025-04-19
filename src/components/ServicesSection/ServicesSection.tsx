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

export interface IServiceItem {
  title: string;
  description: string;
  // Image: OverridableComponent<any>;
  image: string;
}

export const servicesItems: IServiceItem[] = [
  {
    title: "Endereço Fiscal",
    description:
      "Perfeito para quem quer registrar sua empresa em um <strong>endereço estratégico</strong> e atender clientes com <strong>mais autoridade.</strong>",
    // Image: MyLocation,
    image: enderecoImg.src,
  },
  {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
    // Image: InTheOffice,
    image: salaImg.src,
  },
  {
    title: "Estações de Trabalho",
    description:
      "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
    // Image: SharedWorkspace,
    image: estacoesImg.src,
  },
  {
    title: "Reserva de Sala",
    description:
      "Precisa de uma sala para uma reunião? Você pode agendar por hora para seu conforto e de seus clientes!",
    // Image: BusinessPlan,
    image: salaImg.src,
  },
];
