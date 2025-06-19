import salaImg from "../../../../public/images/sala-atendimento.webp";
import { IServiceItem } from "@/data/types";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Groups2Icon from "@mui/icons-material/Groups2";
import WifiIcon from "@mui/icons-material/Wifi";
import { membroX } from "./membro-x";

export const salasAtendimento: IServiceItem = {
  title: "Salas de Atendimento",
  seoTitle:
    "Salas de Atendimento em Joinville com privacidade e estrutura profissional",
  description:
    "Realize atendimentos presenciais com privacidade, conforto e uma imagem profissional. Salas prontas para uso em Joinville, com recepção, internet e mobília completa — ideais para psicólogos, terapeutas, consultores e outros especialistas.",
  image: salaImg.src,
  slug: "salas-atendimento",
  heroText: "Uma sala para<br/><strong>fazer atendimentos</strong>",
  homeCard: {
    title: "Salas de Atendimento",
    description:
      "Perfeitas para profissionais que precisam de um espaço reservado, com estrutura completa e imagem profissional.",
  },
  detailsPage: {
    h1: "Seu espaço de atendimento<br/>pronto para uso em Joinville",
    subtitle:
      "Ofereça uma experiência mais profissional, com privacidade, conforto<br/>e toda a estrutura que seu atendimento presencial exige.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Privacidade e estrutura profissional para seus atendimentos",
      subtitle:
        "Evite improvisos. Atenda com tranquilidade em um ambiente silencioso, bem equipado e pronto para acolher seus pacientes ou clientes.",
      items: [
        {
          text: "<strong>Ambiente ideal</strong> para psicólogos, terapeutas, coaches e consultores",
          icon: MedicalInformationIcon,
        },
        {
          text: "<strong>Privacidade e conforto</strong> para atendimentos presenciais",
          icon: DomainVerificationIcon,
        },
        {
          text: "<strong>Recepcionista</strong> para acolher seus clientes ou pacientes",
          icon: Groups2Icon,
        },
        {
          text: "<strong>Infraestrutura completa,</strong> com internet e climatização",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Comece a atender com estrutura<br/>e segurança profissional",
      subtitle:
        "Escolha a modalidade ideal, preencha seus dados e comece a usar a sala no mesmo dia — com tudo pronto para receber seus clientes.",
      items: [
        "Escolha o modelo ideal: hora, período ou diária",
        "Preencha seus dados e assine o contrato digital",
        "Comece a atender com conforto e credibilidade",
      ],
    },
    plans: [
      {
        price: 100,
        label: "Hora",
        period: "HORA",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Tenho interesse em reservar uma hora em uma sala de atendimento em Joinville.",
      },
      {
        price: 400,
        label: "Período",
        period: "PERÍODO",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Tenho interesse em reservar um período em uma sala de atendimento em Joinville.",
      },
      {
        price: 720,
        label: "Diária",
        period: "Diária",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Tenho interesse em reservar uma diária em uma sala de atendimento em Joinville.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$100/hora",
    plansMessageTarget: membroX.slug,
  },
};
