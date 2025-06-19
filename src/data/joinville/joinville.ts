import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - Jvll-4.webp";
import image1 from "../../../public/images/XYZ - Jvll-05.webp";
import image2 from "../../../public/images/XYZ - Jvll-16.webp";

const contact = {
  phoneNumber: "5547999990294",
  whatsappNumber: "5547999990294",
  email: "jamal@xyzcoworking.com",
};

const workingHours = [
  "Segunda a sexta-feira das 8h as 19h",
  "Acesso 24h para clientes",
];

const address = {
  line1: "Rua 55 (Praça Higino Pio), n° 50 - Sala 01",
  line2: "Centro, Balneário Camboriú/SC",
  href: "https://www.google.com/maps/place/R.+55,+50+-+Centro,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-681,+Brazil/@-26.9859901,-48.6354357,15.61z/data=!4m6!3m5!1s0x94d8b6015f1e5f4d:0xf16002cdc8ee5e78!8m2!3d-26.9866223!4d-48.6339933!16s%2Fg%2F11cpjygcv2?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
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
