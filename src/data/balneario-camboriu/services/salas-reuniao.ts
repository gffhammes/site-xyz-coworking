import { IServiceItem } from "@/data/types";
import reunioesImg from "../../../../public/images/sala-reuniao.webp";
import TvIcon from "@mui/icons-material/Tv";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { membroX } from "./membro-x";

export const salasReuniao: IServiceItem = {
  title: "Salas de Reunião",
  seoTitle: "Salas de Reunião em Balneário Camboriú",
  description:
    "Ambientes projetados para causar impacto, com tecnologia e conforto, perfeitos para decisões importantes e reuniões de alto nível. Ideal para empresas e profissionais que buscam um local estratégico para fechar negócios.",
  image: reunioesImg.src,
  slug: "salas-reuniao",
  heroText: "Uma sala para<br/>reunião de negócios",
  homeCard: {
    title: "Reserva de Sala",
    description:
      "Precisa de uma sala para uma reunião? Você pode agendar por hora para seu conforto e de seus clientes!",
  },
  detailsPage: {
    h1: "As salas perfeitas para destacar sua<br/>empresa e fechar grandes negócios",
    subtitle:
      "Reuniões estratégicas pedem um ambiente à altura. Nossas salas oferecem<br/>conforto, tecnologia e a imagem certa para fechar grandes negócios.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Ambientes pensados para fechar negócios de verdade",
      subtitle:
        "Suas reuniões não precisam mais acontecer em cafés ou improvisos. Aqui, você tem estrutura, conforto e presença para impressionar.",
      items: [
        {
          text: "Espaços com <strong>climatização, TV, Wi-Fi e cafézinho</strong>",
          icon: TvIcon,
        },
        {
          text: "<strong>Atendimento personalizado</strong> para você e seus convidados",
          icon: WorkspacePremiumIcon,
        },
        {
          text: "Ideal para <strong>reuniões presenciais</strong> ou <strong>videoconferências</strong>",
          icon: GroupsIcon,
        },
        {
          text: "<strong>Agendamento fácil e prático,</strong> por hora ou período",
          icon: EventAvailableIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Reserve seu espaço para reuniões<br/>com agilidade e praticidade",
      subtitle:
        "Você escolhe o horário, a estrutura já está pronta. É só agendar e causar uma ótima impressão em cada reunião.",
      items: [
        "Escolha o melhor horário para sua reunião",
        "Faça a reserva online ou via WhatsApp",
        "Chegue e aproveite o ambiente pronto para uso",
      ],
    },
    plans: [
      {
        price: 500,
        label: "Período",
        period: "Período",
        included: [
          "Sala de reunião equipada com TV e ar-condicionado",
          "Wi-Fi de alta velocidade",
          "Recepção de clientes",
          "Água, café e estrutura de apoio",
        ],
        whatsappMessage:
          "Olá! Vim pelo site e gostaria de reservar um período em uma sala de reunião.",
      },
      {
        price: 800,
        label: "Diária",
        period: "Dia",
        included: [
          "Sala de reunião equipada com TV e ar-condicionado",
          "Wi-Fi de alta velocidade",
          "Recepção de clientes",
          "Água, café e estrutura de apoio",
        ],
        whatsappMessage:
          "Olá! Vim pelo site e gostaria de reservar uma diária em uma sala de reunião.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$500/período",
    plansMessageTarget: membroX.slug,
  },
};
