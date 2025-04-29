import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopServicesHeroSection } from "./DesktopServicesHeroSection";
import { MobileServicesHeroSection } from "./MobileServicesHeroSection";
import heroBg from "../../../../public/images/business-people-office-break.jpg";

export interface IServicesHeroSectionProps {}

export const ServicesHeroSection = (props: IServicesHeroSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileServicesHeroSection />}
      md={<DesktopServicesHeroSection />}
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
