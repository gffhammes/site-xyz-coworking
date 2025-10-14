import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - BC-10.webp";
import image1 from "../../../public/images/XYZ - BC-3.webp";
import image2 from "../../../public/images/XYZ - BC-4.webp";
import servicesHeroImage from "../../../public/images/servicos.webp";
import diferencialimage1 from "../../../public/images/endereco-estrategico.webp";
import diferencialimage2 from "../../../public/images/infra-bc.webp";
import diferencialimage3 from "../../../public/images/conexao-bc.webp";
import diferencialimage4 from "../../../public/images/servicos.webp";

const contact = {
  phoneNumber: " (47) 3461-3100",
  whatsappNumber: "(47) 3032-1893",
  email: "atendimento@xyz.hubcommerce.com.br ",
};

const workingHours = [
  "Segunda à Sexta 8h às 22h",
  "Sábados 8h às 13h",
  "Acesso 24h para clientes"
];

const address = {
  line1: "Av. Hercílio Luz, 639 - Sala 1103",
  line2: "Centro, Florianópolis - SC CEP: 88020-000",
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
      h1: `Trabalhe com performance sem abrir mão da qualidade de vida!`,
      subtitle: `Trabalhar em casa pode parecer liberdade, mas e quando a produtividade despenca? No XYZ Floripa você tem um espaço criativo, cheio de networking e pronto para te ajudar a crescer!`,
      image: heroBg.src,
    },
    phraseSection: {
      text: " Conectado ao mundo, nossa internet  ultra-rápida garante que você trabalhe de qualquer lugar sem falhas<br/><strong>TRABALHE DE FORMA MAIS INTELIGENTE!</strong>",
      image1: image1.src,
      image2: image2.src,
    },
    diferencialSection: {
      differentialItems: [{
    title: "Endereço estratégico<br/>e sofisticado",
    description:
      "Ter um escritório bem localizado muda a forma como seu negócio é visto.",
    image: diferencialimage1.src,
  },
  {
    title: "Infraestrutura<br/>impecável",
    description:
      "Cadeiras ergonômicas, internet ultra rápida e climatização total. ",
    image: diferencialimage2.src,
  },
  {
    title: "Ambiente exclusivo<br/>para negócios",
    description:
      "Conecte-se a outros profissionais de sucesso e expanda sua rede.",
    image: diferencialimage3.src,
  },
  {
    title: "Networking que<br/>abre portas",
    description:
      "Trabalhar cercado de mentes brilhantes pode ser o impulso que faltava para sua empresa crescer. Conexões reais acontecem aqui.",
    image: diferencialimage4.src,
  },]
    },
    mapSection: {
      h2: "Venha conhecer nosso espaço na Ilha da Magia!",
      mapAddress:
        "https://www.google.com/maps?q=Av.+Hercílio+Luz,+639+-+Sala+1103,+Centro,+Florianópolis+-+SC,+88020-000&output=embed",
    },
  },
  servicesPage: {
    heroImage: servicesHeroImage.src,
  },
  socials: {
    instagram: "https://www.instagram.com/xyzcoworkingbc/",
    linkedin: "https://www.linkedin.com/company/coworkingxyz",
    tiktok: "https://www.tiktok.com/@xyz.coworking0",
    youtube: "https://www.youtube.com/@XYZcoworking1/shorts",
  },
};
