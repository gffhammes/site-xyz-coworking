import salaImg from "../../../../public/images/sala privativa.jpg";
import { IServiceItem } from "@/data/types";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ChecklistIcon from "@mui/icons-material/Checklist";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

export const salasPrivativas: IServiceItem = {
  title: "Salas Privativas",
  seoTitle: "Salas Privativas em Balneário Camboriú",
  description:
    "Garanta total privacidade e uma estrutura sofisticada para o seu trabalho. Um espaço exclusivo para você, com a credibilidade que seu negócio precisa, ideal para empreendedores e empresas que buscam profissionalismo.",
  image: salaImg.src,
  target: "salas-privativas",
  heroText: "Uma sala privativa<br/>para meu negócio",
  homeCard: {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
  },
  detailsPage: {
    h1: "Um espaço só seu, com a<br/>estrutura que sua empresa merece",
    subtitle:
      "Trabalhe com mais foco, profissionalismo e privacidade. Nossas salas privativas são ideais para<br/>quem quer um espaço só seu, pronto para impressionar clientes e manter a produtividade em alta.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Mais que um espaço — é seu escritório com status e privacidade",
      subtitle:
        "Profissionalize sua operação com um ambiente exclusivo, preparado para quem leva o negócio a sério e quer receber clientes com autoridade.",
      items: [
        {
          text: "<strong>Ambiente exclusivo</strong> para você e sua equipe performarem",
          icon: GroupWorkIcon,
        },
        {
          text: "<strong>Pronto para usar,</strong> com internet, mobília e climatização",
          icon: RocketLaunchIcon,
        },
        {
          text: "<strong>Mais profissionalismo</strong> e concentração para a sua rotina",
          icon: ChecklistIcon,
        },
        {
          text: "<strong>Recepcionista para seus clientes</strong> em horário comercial",
          icon: RecordVoiceOverIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Tenha sua sala exclusiva pronta<br/>para usar em poucos passos",
      subtitle:
        "Sem enrolação. Veja como é rápido garantir sua estrutura completa e começar a trabalhar com mais foco, privacidade e profissionalismo.",
      items: [
        "Escolha a sala ideal para o seu perfil",
        "Assine o contrato digital",
        "Leve seu notebook e comece a trabalhar no mesmo dia",
      ],
    },

    plans: [
      {
        price: 8900,
        label: "Anual",
        period: "Ano",
        included: [
          "Sala privativa mobiliada",
          "Internet de alta velocidade",
          "Limpeza e manutenção inclusas",
          "Recepção para seus clientes",
          "Copa compartilhada",
        ],
      },
      {
        price: 890,
        label: "Mensal",
        period: "Mês",
        included: [
          "Sala privativa mobiliada",
          "Internet de alta velocidade",
          "Limpeza e manutenção inclusas",
          "Recepção para seus clientes",
          "Copa compartilhada",
        ],
      },
    ],
  },
};
