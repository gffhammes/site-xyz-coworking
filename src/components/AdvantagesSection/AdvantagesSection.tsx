import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DesktopAdvantagesSection } from "./DesktopAdvantagesSection";
import { MobileAdvantagesSection } from "./MobileAdvantagesSection";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import { SvgIconTypeMap } from "@mui/material";

export interface IAdvantagesSectionProps {}

export const AdvantagesSection = (props: IAdvantagesSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileAdvantagesSection />}
      md={<DesktopAdvantagesSection />}
    />
  );
};

export interface IAdvantageItem {
  Icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  description: string;
}

export const advantageItems: IAdvantageItem[] = [
  {
    title: "Acesso por biometria 24/7.",
    description:
      "Seu trabalho não tem horário fixo? Aqui você tem acesso ao seu espaço a qualquer hora do dia (ou da noite).",
    Icon: UpdateOutlinedIcon,
  },
  {
    title: "Ambientes verdes e produtivos.",
    description:
      "A natureza viva ao seu redor reduz o estresse e aumenta a produtividade - e nós levamos isso a sério.",
    Icon: SpaOutlinedIcon,
  },
  {
    title: "Happy hours e eventos exclusivos.",
    description:
      "No XYZ, você não encontra só um espaço de trabalho, mas uma comunidade que compartilha conhecimento e oportunidades.",
    Icon: CelebrationOutlinedIcon,
  },
];

export const advantageSectionData = {
  h2: "Vantagens que fazem diferença no seu dia a dia",
  subtitle:
    "Mais que estrutura — criamos um ambiente pra você trabalhar com conforto, flexibilidade e conexão.",

  advantageItems,
};
