import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IServicePlan {
  label: string;
  period: string;
  price: number;
  included: string[];
}

export interface IServiceItem {
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  target: string;
  heroText: string;
  homeCard: {
    title: string;
    description: string;
  };
  detailsPage: {
    h1: string;
    subtitle: string;
    heroCTAText: string;
    benefitsSection: {
      h2: string;
      subtitle: string;
      items: {
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null;
        text: string;
      }[];
    };
    stepsSection: {
      h2: string;
      subtitle: string;
      items: string[];
    };
    plans: IServicePlan[];
    plansMessage?: string;
  };
}
