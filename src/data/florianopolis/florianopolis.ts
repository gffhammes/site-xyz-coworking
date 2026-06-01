import { ISiteData } from "../types";
import { services } from "./services/services";
import servicesHeroImage from "../../../public/images/servicos.png";
import diferencialimage1 from "../../../public/images/fachada floripa.jpeg";
import diferencialimage2 from "../../../public/images/membrox.jpeg";
import diferencialimage3 from "../../../public/images/exclusivoambiente.png";
import diferencialimage4 from "../../../public/images/network.png";
import homefloripa from "../../../public/images/homefloripa.jpeg";
import circuloesquerdo from "../../../public/images/circuloesquerdo.jpeg";
import circulodireito from "../../../public/images/bolinha direita - home.jpg";

const contact = {
  phoneNumber: "+554830505051",
  whatsappNumber: "+554899630480",
  email: "contatofloripa@xyzcoworking.com",
};

const workingHours = [
  "Segunda à Sexta 8h às 18h30",
  "Sábados 9h às 13h",
  "Acesso 24h para clientes com Face ID",
];

const address = {
  line1: "Av. Hercílio Luz, 639 - 11 ° Andar",
  line2: "Centro, Florianópolis - SC CEP: 88020-000",
  href: "https://www.google.com/maps/place/Edif%C3%ADcio+Alpha+Centauri+-+Av.+Herc%C3%ADlio+Luz,+639+-+11+%C2%B0+Andar+-+Centro,+Florian%C3%B3polis+-+SC,+88020-000/@-27.597434,-48.5479969,17z/data=!3m1!4b1!4m5!3m4!1s0x9527383ad9a1e201:0x793c22eb738c8972!8m2!3d-27.597434!4d-48.5479969?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
};

export const florianopolisData: ISiteData = {
  filialCNPJ: "30.735.437.0001/34",
  filialName: "Florianópolis",
  pricesTableFileId: "1uBqQ-GdGMAiviJdwNwbeL8GTB6akdFQ_jkrOBIeccKM",
  termsAndConditionFileId: "1Xy0ty8yX3AJUvcm-qJS6xDxDhZGm6CKp2jx4_4neJVM",
  urlConexa: "https://lumiere.conexa.app/",
  gtmId: "",
  contact,
  services,
  workingHours,
  address,
  homeData: {
    metaTitle:
      "Coworking em Florianópolis | XYZ Coworking - Endereço Fiscal, Salas e Estações",
    metaDescription:
      "Encontre o melhor coworking em Floripa! Salas privativas, endereço fiscal, estações de trabalho e estrutura premium para sua empresa crescer. Conheça o XYZ Coworking!",
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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.5158149069794!2d-48.550571!3d-27.597433999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383ad9a1e201%3A0x793c22eb738c8972!2sEdif%C3%ADcio%20Alpha%20Centauri%20-%20Av.%20Herc%C3%ADlio%20Luz%2C%20639%20-%2011%20%C2%B0%20Andar%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088020-000!5e0!3m2!1spt-BR!2sbr!4v1733949728266!5m2!1spt-BR!2sbr",
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
