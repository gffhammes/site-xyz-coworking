import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DesktopHeroSection } from "./DesktopHeroSection";
import { MobileHeroSection } from "./MobileHeroSection";

export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileHeroSection />}
      md={<DesktopHeroSection />}
    />
  );
};

export const heroSectionData = {
  h1: `Seu Escritório de Alto Padrão em Balneário Camboriú`,
  subtitle: `Um espaço que transmite credibilidade, impulsiona sua produtividade e conecta você a grandes oportunidades. Trabalhe no melhor coworking de BC!`,
};
