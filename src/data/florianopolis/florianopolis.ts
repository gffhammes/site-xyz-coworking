import { ISiteData } from "../types";
import { services } from "./services/services";
import heroBg from "../../../public/images/XYZ - BC-10.webp";
import image1 from "../../../public/images/XYZ - BC-3.webp";
import image2 from "../../../public/images/XYZ - BC-4.webp";
import servicesHeroImage from "../../../public/images/servicos.png";
import diferencialimage1 from "../../../public/images/enderecofiscalfloripa.jpeg";
import diferencialimage2 from "../../../public/images/membrox.jpeg";
import diferencialimage3 from "../../../public/images/exclusivoambiente.png";
import diferencialimage4 from "../../../public/images/network.png";
import homefloripa from "../../../public/images/homefloripa.jpeg";
import circuloesquerdo from "../../../public/images/circuloesquerdo.jpeg";
import circulodireito from "../../../public/images/circulodireito.jpeg";



const contact = {
  phoneNumber: "48998380483",
  whatsappNumber: "48998380483",
  email: "contatofloripa@xyzworking,com",
};

const workingHours = [

  "Segunda à Sexta 8h às 18h30",
  "Sábados 9h às 13h",
  "Acesso 24h para clientes com Face ID"

];

const address = {
  line1: "Av. Hercílio Luz, 639 - 11 ° Andar",
  line2: "Centro, Florianópolis - SC CEP: 88020-000",
  href: "https://www.google.com/maps/place/Edif%C3%ADcio+Alpha+Centauri+-+Av.+Herc%C3%ADlio+Luz,+639+-+11+%C2%B0+Andar+-+Centro,+Florian%C3%B3polis+-+SC,+88020-000/@-27.597434,-48.5479969,17z/data=!3m1!4b1!4m5!3m4!1s0x9527383ad9a1e201:0x793c22eb738c8972!8m2!3d-27.597434!4d-48.5479969?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
};

export const florianopolisData: ISiteData = {
  gtmId: "",
  contact,
  services,
  workingHours,
  address,
  homeData: {
    metaTitle:
      "Coworking em Florianopolis | XYZ Coworking - Endereço Fiscal, Salas e Estações",
    metaDescription:
      "Encontre o melhor coworking em Balneário Camboriú! Salas privativas, endereço fiscal, estações de trabalho e estrutura premium para sua empresa crescer. Conheça o XYZ Coworking!",
    heroSection: {
      h1: `Trabalhe com performance sem abrir mão da qualidade de vida!`,
      subtitle: `Trabalhar em casa pode parecer liberdade, mas e quando a produtividade despenca? No XYZ Floripa você tem um espaço criativo, cheio de networking e pronto para te ajudar a crescer!`,
      image: homefloripa.src,
    },
    phraseSection: {
      text: " Conectado ao mundo, nossa internet  ultra-rápida garante que você trabalhe de qualquer lugar sem falhas<br/><strong>TRABALHE DE FORMA MAIS INTELIGENTE!</strong>",
      image1: circuloesquerdo.src,
      image2: circulodireito.src,
    },
    diferencialSection: {
      differentialItems: [
        {
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
        },
      ],
    },
    mapSection: {
      h2: "Venha conhecer nosso espaço na Ilha da Magia!",
      mapAddress:
        "https://www.google.com/maps/place/Edif%C3%ADcio+Alpha+Centauri+-+Av.+Herc%C3%ADlio+Luz,+639+-+11+%C2%B0+Andar+-+Centro,+Florian%C3%B3polis+-+SC,+88020-000/@-27.597434,-48.5479969,17z/data=!3m1!4b1!4m5!3m4!1s0x9527383ad9a1e201:0x793c22eb738c8972!8m2!3d-27.597434!4d-48.5479969?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
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
