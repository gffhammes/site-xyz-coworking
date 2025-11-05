import { IServiceItem } from "@/data/types";
import reunioesfloripaImg from "../../../../public/images/salareuniaonova.png";
import TvIcon from "@mui/icons-material/Tv";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { membroX } from "./membro-x";

export const salasReuniao: IServiceItem = {
  title: "Salas de Reunião",
  seoTitle: "Salas de Reunião em Balneário Camboriú",
  description:
    "Estrutura completa para encontros profissionais, com ambientes climatizados, TV, Wi-Fi e recepção. O espaço ideal para transmitir credibilidade, acolher clientes e fechar negócios com eficiência.",
  image: reunioesfloripaImg.src,
  slug: "salas-reuniao",
  heroText: "Uma sala para<br/>reunião de negócios",
  homeCard: {
    title: "Reserva de Sala",
    description:
      "Precisa de uma sala para uma reunião? Você pode agendar por hora para seu conforto e de seus clientes!",
  },
  detailsPage: {
    h1: "O cenário certo para suas reuniões <br/> mais importantes",
    subtitle:
      "Ambientes elegantes e equipados, ideais para reuniões estratégicas, apresentações e videoconferências que exigem foco e credibilidade.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Ambientes pensados para fechar negócios de verdade",
      subtitle:
        "Suas reuniões não precisam mais acontecer em cafés ou improvisos. Aqui, você tem estrutura, conforto e presença para impressionar.",
      items: [
        {
          text: "<strong>Espaços com </strong>Salas climatizadas, equipadas com TV, Wi-Fi e café para garantir conforto e praticidade.",
          icon: TvIcon,
        },
        {
          text: "<strong>Equipe preparada</strong> para receber da melhor maneira você e seus convidados ",
          icon: WorkspacePremiumIcon,
        },
        {
          text: "<strong>Perfeito para</strong> reuniões, atendimentos ou videoconferências em ambiente reservado.",
          icon: GroupsIcon,
        },
        {
          text: "<strong>Agendamento fácil e prático,</strong> Reserve por hora, período ou diária — tudo de forma simples e digital.",
          icon: EventAvailableIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Agende sua sala de forma prática e conveniente",
      subtitle:
        "Escolha o horário ideal, faça sua reserva em poucos cliques e aproveite um espaço pronto para receber seus clientes com conforto e profissionalismo.",
      items: [
        "Selecione o horário que melhor se adapta à sua agenda",
        "Reserve online ou diretamente pelo WhatsApp",
        "Chegue e desfrute de um ambiente completo e profissional",
      ],
    },
    plans: [


      {
        price: 85,
        label: "Hora",
        period: "Hora",
        included: [
          "Até 6 pessoas",
          "Para salas com maior capacidade entre em contato",
          "Sala de reunião equipada com TV e ar-condicionado",
          "Wi-Fi de alta velocidade",
          "Recepção de clientes",
          "Água, café e estrutura de apoio",
        ],
        whatsappMessage:
          "Olá! Vim pelo site e gostaria de reservar um período em uma sala de reunião.",
      },
      {
        price: 336,
        label: "Período",
        period: "Período",
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
    floatingCtaMessage: "R$85/Hora",
    plansMessageTarget: membroX.slug,
  },
};
