import { IServiceItem } from "@/data/types";
import estacoesImg from "../../../../public/images/estacoes.jpg";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import WorkIcon from "@mui/icons-material/Work";
import HubIcon from "@mui/icons-material/Hub";
import WifiIcon from "@mui/icons-material/Wifi";

export const estacoesTrabalho: IServiceItem = {
  title: "Estações de Trabalho",
  seoTitle: "Estações de Trabalho em Balneário Camboriú",
  description:
    "Ambientes dinâmicos e inspiradores para quem busca flexibilidade e produtividade, com infraestrutura de alto padrão para freelancers e pequenas empresas.",
  image: estacoesImg.src,
  target: "estacoes-trabalho",
  heroText: "Uma estação de<br/>trabalho compartilhada",
  homeCard: {
    title: "Estações de Trabalho",
    description:
      "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
  },
  detailsPage: {
    h1: "O ambiente ideal para fazer conexões<br/>que levam seu negócio mais longe",
    subtitle:
      "Tenha acesso a um espaço de trabalho completo, sem os custos de manter um escritório.<br/>Conecte-se, produza mais e esteja cercado por oportunidades todos os dias.",
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
          text: "Ideal para <strong>freelancers, nômades digitais e autônomos</strong>",
          icon: WorkIcon,
        },
        {
          text: "<strong>Networking, trocas e negócios</strong> com outros profissionais",
          icon: HubIcon,
        },
        {
          text: "<strong>Mobílias ergonômicas, internet rápida</strong> e café à vontade",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Do cadastro à mesa<br/>em poucos cliques",
      subtitle:
        "É só escolher o plano, preencher os dados e começar a trabalhar num ambiente que vai elevar sua produtividade.",
      items: [
        "Escolha seu plano diário ou mensal",
        "Assine o contrato em poucos minutos",
        "Comece a usar sua estação quando quiser",
      ],
    },

    plans: [
      {
        price: 120,
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
  },
};
