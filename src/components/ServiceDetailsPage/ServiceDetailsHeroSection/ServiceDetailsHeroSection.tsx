import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopServiceDetailsHeroSection } from "./DesktopServiceDetailsHeroSection";
import { MobileServiceDetailsHeroSection } from "./MobileServiceDetailsHeroSection";
import heroBg from "../../../../public/images/business-people-office-break.jpg";
import { IServiceServiceItem } from "@/data/services";

export interface IServiceDetailsHeroSectionProps {
  service: IServiceServiceItem;
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

export const servicesHeroSectionData = {
  h1: `Encontre a solução certa para o seu sucesso`,
  subtitle: `Soluções sob medida para quem quer crescer com estrutura, credibilidade e estilo.`,
  selectLabel: "O que você busca?",
  buttonText: "Conhecer",
  bgImage: heroBg.src,
};
