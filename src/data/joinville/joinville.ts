import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - Jvll-4.webp";
import image1 from "../../../public/images/XYZ - Jvll-05.webp";
import image2 from "../../../public/images/XYZ - Jvll-16.webp";
import servicesHeroImage from "../../../public/images/Equipe-23.jpg";
import { tabelaDePrecosJoinville } from "./tabela-de-precos";

const contact = {
  phoneNumber: "554734613100",
  whatsappNumber: "554734613100",
  email: "contato@xyzcoworking.com",
};

const workingHours = [
  "Segunda a sexta-feira das 8h às 22h",
  "Sábados das 8h às 12h",
  "Acesso 24h para clientes",
];

const address = {
  line1: "Rua Dr. João Colin, 1285",
  line2: "América, Joinville/SC",
  href: "https://www.google.com/maps/place/XYZ+Coworking+Joinville/data=!4m2!3m1!1s0x0:0x3e0f2b9cb71f2b71?sa=X&ved=1t:2428&ictx=111",
};

export const joinvilleData: ISiteData = {
  contact,
  services,
  workingHours,
  address,
  homeData: {
    metaTitle: "Coworking em Joinville | Estrutura Profissional e Networking",
    metaDescription:
      "Encontre seu espaço de trabalho ideal em Joinville. Coworking com internet rápida, salas equipadas, planos flexíveis e ambiente perfeito para networking.",
    heroSection: {
      h1: `O ponto de encontro para negócios e conexões em Joinville`,
      subtitle: `Estrutura completa para empresas e profissionais que valorizam eficiência, privacidade e imagem sólida. Salas equipadas, internet rápida e ambiente corporativo, no endereço mais estratégico de Joinville.`,
      image: heroBg.src,
    },
    phraseSection: {
      text: "Seu desempenho profissional<br/><strong>começa com o ambiente certo</strong>",
      image1: image1.src,
      image2: image2.src,
    },
    mapSection: {
      h2: "Venha conhecer o nosso espaço em Joinville!",
      mapAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7154.277218530113!2d-48.85373371322125!3d-26.289606217782428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb02f97e5bc11%3A0x3e0f2b9cb71f2b71!2sXYZ%20Coworking%20Joinville!5e0!3m2!1sen!2sus!4v1750452963249!5m2!1sen!2sus",
    },
  },
  servicesPage: {
    heroImage: servicesHeroImage.src,
  },
  tabelaDePrecos: tabelaDePrecosJoinville,
  socials: {
    instagram: "https://www.instagram.com/coworkingxyz/",
    linkedin: "https://www.linkedin.com/company/coworkingxyz",
    tiktok: "https://www.tiktok.com/@xyz.coworking0",
    youtube: "https://www.youtube.com/@XYZcoworking1/shorts",
  },
};
