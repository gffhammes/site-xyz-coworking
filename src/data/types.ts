import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IServicePlan {
  label: string;
  period: string;
  price: number;
  included: string[];
  whatsappMessage?: string;
  customPriceText?: string;
}

export interface IServiceItem {
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  slug: string;
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
    plansMessageTarget?: string;
    floatingCtaMessage: string;
  };
}

export interface ISiteData {
  contact: {
    phoneNumber: string;
    whatsappNumber: string;
    email: string;
  };
  services: IServiceItem[];
  workingHours: string[];
  address: {
    line1: string;
    line2: string;
    href: string;
  };
  homeData: {
    metaTitle: string;
    metaDescription: string;
    heroSection: {
      h1: string;
      subtitle: string;
      image: string;
    };
    phraseSection: {
      text: string;
      image1: string;
      image2: string;
    };
    mapSection: {
      h2: string;
      mapAddress: string;
    };
  };
  servicesPage: {
    heroImage: string;
  };
  tabelaDePrecos?: {
    servico: string;
    valor2025: string;
  }[];
  socials: {
    instagram: string;
    linkedin: string;
    tiktok: string;
    youtube: string;
  };
}
