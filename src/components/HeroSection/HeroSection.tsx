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
  h1: `Seu escritório de alto padrão, no coração de Balneário Camboriú`,
  subtitle: `Espaços projetados para refletir o sucesso de sua empresa, combinando design moderno, infraestrutura de ponta e a melhor localização em Balneário Camboriú. Projetado para quem busca excelência.`,
};
