import { IServiceItem } from "@/data/types";
import reunioesImg from "../../../../public/images/sala-reuniao-jlle.webp";
import TvIcon from "@mui/icons-material/Tv";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { membroX } from "./membro-x";

export const salasReuniao: IServiceItem = {
  title: "Salas de Reunião",
  seoTitle: "Salas de Reunião em Joinville",
  description:
    "Estrutura completa para reuniões profissionais em Joinville. Ambientes climatizados, com TV, Wi-Fi e recepção, prontos para transmitir credibilidade e fechar negócios com eficiência.",
  image: reunioesImg.src,
  slug: "salas-reuniao",
  heroText: "Uma sala para<br/><strong>reunião de negócios</strong>",
  homeCard: {
    title: "Reserva de Sala",
    description:
      "Agende sua reunião em um ambiente profissional, com estrutura completa e localização estratégica.",
  },
  detailsPage: {
    h1: "Salas sob medida para<br/>reuniões de alto nível",
    subtitle:
      "Ambientes corporativos e bem localizados, ideais para reuniões presenciais,<br/>atendimentos e videoconferências com estrutura completa.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Infraestrutura de verdade para reuniões que exigem presença",
      subtitle:
        "Nada de improviso ou ruído. Tenha à disposição um espaço planejado para conversas estratégicas, negociações e apresentações com impacto.",
      items: [
        {
          text: "Espaços com <strong>climatização, TV, Wi-Fi e café</strong> disponíveis",
          icon: TvIcon,
        },
        {
          text: "<strong>Recepção profissional</strong> para você e seus convidados",
          icon: WorkspacePremiumIcon,
        },
        {
          text: "Ideal para <strong>atendimentos presenciais</strong> ou <strong>reuniões remotas</strong>",
          icon: GroupsIcon,
        },
        {
          text: "<strong>Agendamento simples</strong> por hora, período ou diária",
          icon: EventAvailableIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Agende sua sala<br/>com rapidez e segurança",
      subtitle:
        "Escolha o melhor horário, faça sua reserva e conte com um ambiente pronto para causar uma boa impressão.",
      items: [
        "Escolha o horário da sua reunião",
        "Reserve online ou via WhatsApp",
        "Chegue e aproveite a estrutura profissional",
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
          "Olá! Gostaria de reservar um período em uma sala de reunião em Joinville.",
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
          "Olá! Gostaria de reservar uma diária em uma sala de reunião em Joinville.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$500/período",
    plansMessageTarget: membroX.slug,
  },
};
