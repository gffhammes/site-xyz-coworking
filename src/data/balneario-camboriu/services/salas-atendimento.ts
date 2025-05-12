import salaImg from "../../../../public/images/sala-atendimento.jpg";
import { IServiceItem } from "@/data/types";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Groups2Icon from "@mui/icons-material/Groups2";
import WifiIcon from "@mui/icons-material/Wifi";

export const salasAtendimento: IServiceItem = {
  title: "Salas de Atendimento",
  seoTitle:
    "Salas de Atendimento em Balneário Camboriú com privacidade e estrutura completa",
  description:
    "Receba seus pacientes ou clientes com profissionalismo, conforto e total privacidade. Nossas salas de atendimento em Balneário Camboriú são prontas para uso, com recepção, internet e mobília completa.",
  image: salaImg.src,
  slug: "salas-atendimento",
  heroText: "Uma sala para<br/>fazer atendimentos",
  homeCard: {
    title: "Salas de Atendimento",
    description:
      "Perfeitas para psicólogos, terapeutas, consultores e outros profissionais que precisam de um espaço reservado e profissional.",
  },
  detailsPage: {
    h1: "Seu consultório pronto para<br/>uso em Balneário Camboriú",
    subtitle:
      "Ofereça uma experiência mais profissional e acolhedora para seus atendimentos<br/>presenciais, com total privacidade, estrutura completa e localização estratégica.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Mais profissionalismo, conforto e privacidade para seus atendimentos",
      subtitle:
        "Ideal para quem precisa de um ambiente reservado, com estrutura profissional e pronto para começar hoje mesmo.",
      items: [
        {
          text: "<strong>Ambiente ideal</strong> para psicólogos, terapeutas, coaches e consultores",
          icon: MedicalInformationIcon,
        },
        {
          text: "<strong>Privacidade e conforto</strong> para atender com excelência",
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
      h2: "Comece a atender com mais<br/>profissionalismo em poucos passos",
      subtitle:
        "Evite improvisos. Veja como é fácil garantir seu espaço e começar a atender presencialmente com mais estrutura e credibilidade.",
      items: [
        "Escolha a sala ideal para seu tipo de atendimento",
        "Envie seus dados e assine o contrato digital",
        "Receba seus clientes com conforto e privacidade no mesmo dia",
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
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar uma hora.",
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
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar um período.",
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
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar uma diária.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$100/hora",
  },
};
