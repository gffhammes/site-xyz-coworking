import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - BC-10.webp";
import image1 from "../../../public/images/XYZ - BC-3.webp";
import image2 from "../../../public/images/XYZ - BC-4.webp";

const contact = {
  phoneNumber: "5547999990294",
  whatsappNumber: "5547999990294",
  email: "jamal@xyzcoworking.com",
};

const workingHours = [
  "Segunda a sexta-feira das 9h às 19h",
  "Acesso 24h para clientes",
];

const address = {
  line1: "Rua 55 (Praça Higino Pio), n° 50 - Sala 01",
  line2: "Centro, Balneário Camboriú/SC",
  href: "https://www.google.com/maps/place/R.+55,+50+-+Centro,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-681,+Brazil/@-26.9859901,-48.6354357,15.61z/data=!4m6!3m5!1s0x94d8b6015f1e5f4d:0xf16002cdc8ee5e78!8m2!3d-26.9866223!4d-48.6339933!16s%2Fg%2F11cpjygcv2?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
};

export const balnearioData: ISiteData = {
  contact,
  services,
  workingHours,
  address,
  homeData: {
    metaTitle:
      "Coworking em Balneário Camboriú | XYZ Coworking - Endereço Fiscal, Salas e Estações",
    metaDescription:
      "Encontre o melhor coworking em Balneário Camboriú! Salas privativas, endereço fiscal, estações de trabalho e estrutura premium para sua empresa crescer. Conheça o XYZ Coworking!",
    heroSection: {
      h1: `Seu escritório de alto padrão, no coração de Balneário Camboriú`,
      subtitle: `Espaços projetados para refletir o sucesso de sua empresa, combinando design moderno, infraestrutura de ponta e a melhor localização em Balneário Camboriú. Feito para quem busca excelência.`,
      image: heroBg.src,
    },
    phraseSection: {
      text: "Seu desempenho profissional<br/><strong>começa com o ambiente certo</strong>",
      image1: image1.src,
      image2: image2.src,
    },
    mapSection: {
      h2: "Venha conhecer o nosso espaço em Balneário Camboriú!",
      mapAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.3829084970307!2d-48.633878200000005!3d-26.9864346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b79f380266d3%3A0x7d8e0a6192564183!2sXYZ%20Coworking%20em%20Balne%C3%A1rio%20Cambori%C3%BA!5e0!3m2!1spt-BR!2sbr!4v1750453008820!5m2!1spt-BR!2sbr",
    },
  },
};
