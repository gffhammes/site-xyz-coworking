import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - Jvll-4.webp";
import image1 from "../../../public/images/XYZ - Jvll-05.webp";
import image2 from "../../../public/images/XYZ - Jvll-16.webp";

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
      h1: `Coworking de alto padrão<br/>no centro de Joinville`,
      subtitle: `Estrutura completa para empresas e profissionais que valorizam eficiência, privacidade e imagem sólida. Salas equipadas, internet rápida e ambiente corporativo, no endereço mais estratégico de Joinville.`,
      image: heroBg.src,
    },
    phraseSection: {
      text: "Seu desempenho profissional<br/><strong>começa com o ambiente certo</strong>",
      image1: image1.src,
      image2: image2.src,
    },
  },
};
