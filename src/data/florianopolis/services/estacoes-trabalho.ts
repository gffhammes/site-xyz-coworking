import { IServiceItem } from "@/data/types";
import estacoesImg from "../../../../public/images/XYZ - BC-15.webp";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import WorkIcon from "@mui/icons-material/Work";
import HubIcon from "@mui/icons-material/Hub";
import WifiIcon from "@mui/icons-material/Wifi";
import { membroX } from "./membro-x";

export const estacoesTrabalho: IServiceItem = {
  title: "Estações de Trabalho",
  seoTitle: "Estações de Trabalho em Balneário Camboriú",
  description:
    "Espaços compartilhados e bem estruturados, ideais para profissionais que valorizam foco e flexibilidade. Uma solução prática para quem busca produtividade em um ambiente colaborativo e inspirador.",
  image: estacoesImg.src,
  slug: "estacoes-trabalho",
  heroText: "Inspiração e produtividade em um só lugar",
  homeCard: {
    title: "Estações de Trabalho",
    description:
      "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
  },
  detailsPage: {
    h1: "Inspiração e produtividade em um só lugar",
    subtitle:
      "Trabalhe em um ambiente moderno, cercado pela energia criativa de Florianópolis.<br/> Conforto, estrutura completa e o equilíbrio perfeito entre foco e qualidade de vida.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Conecte-se com um ambiente que impulsiona sua produtividade",
      subtitle:
        "Saia do isolamento e descubra a energia de trabalhar em um espaço compartilhado, moderno e rodeado de oportunidades.",
      items: [
        {
          text: "<strong>Estações individuais</strong> em ambiente compartilhado",
          icon: SensorOccupiedIcon,
        },
        {
          text: "Ambiente inspirador para profissionais<strong> autônomos, híbridos e equipes</strong>",
          icon: WorkIcon,
        },
        {
          text: "<strong>Networking, trocas e negócios</strong> com outros profissionais",
          icon: HubIcon,
        },
        {
          text: "<strong>Conforto e conectividade </strong> com internet rápida e café sempre disponível",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Da reserva ao trabalho em instantes",
      subtitle:
        "Escolha o plano ideal, finalize sua reserva e comece a trabalhar em um espaço completo — com tudo pronto para você focar no que importa.",
      items: [
        "Escolha seu plano diário, semanal ou mensal",
        "Confirme a reserva online em poucos cliques",
        "Chegue e aproveite sua estação pronta para uso",
      ],
    },

    plans: [
      {
        price: 68,
        label: "Diária",
        period: "Dia",

        included: [
          "Mesa individual e cadeira ergonômica",
          "Internet rápida e estável",
          "Acesso à copa, recepção e áreas comuns",
          "Café à vontade",
        ],
        whatsappMessage:
          "Olá! Vim pelo site e gostaria de reservar uma estação de trabalho.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    plansMessageTarget: membroX.slug,
    floatingCtaMessage: "R$68/dia",
  },
};
