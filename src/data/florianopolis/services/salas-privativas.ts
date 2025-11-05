import privativafloripaImg from "../../../../public/images/DSC022401.png";
import { IServiceItem } from "@/data/types";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ChecklistIcon from "@mui/icons-material/Checklist";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

export const salasPrivativas: IServiceItem = {
  title: "Salas Privativas",
  seoTitle: "Salas Privativas em Balneário Camboriú",
  description:
    "Tenha total privacidade e um espaço exclusivo, com estrutura completa para o seu negócio unindo sofisticação, profissionalismo e a presença em um dos ecossistemas mais promissores do país. Ideal para empreendedores e empresas que valorizam credibilidade.",
  image: privativafloripaImg.src,
  slug: "salas-privativas",
  heroText: "Uma sala privativa<br/>para meu negócio",
  homeCard: {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
  },
  detailsPage: {
    h1: "Seu escritório em Florianópolis, com <br/> estrutura de empresa de verdade",
    subtitle:
      "Trabalhe com conforto, privacidade e a imagem profissional que seu negócio merece. Salas prontas para uso, em localização estratégica e com tudo o que você precisa para receber seus clientes.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Mais que um espaço — é seu escritório com status e privacidade",
      subtitle:
        "Profissionalize sua operação com um ambiente exclusivo, preparado para quem leva o negócio a sério e quer receber clientes com autoridade.",
      items: [
        {
          text: "<strong>Ambiente exclusivo</strong> para você trabalhar com conforto e total privacidade",
          icon: GroupWorkIcon,
        },
        {
          text: "<strong>Pronto para usar,</strong> com internet rápida, climatização e mobiliário completo",
          icon: RocketLaunchIcon,
        },
        {
          text: "<strong>Foco e produtividade</strong> em um espaço projetado para o seu desempenho",
          icon: ChecklistIcon,
        },
        {
          text: "<strong>Recepção profissional</strong> para receber seus clientes com excelência",
          icon: RecordVoiceOverIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Tenha sua sala exclusiva <br/> em poucas horas",
      subtitle:
        "Sem burocracia. Escolha o espaço ideal, assine o contrato digital e comece a trabalhar no mesmo dia — com toda a estrutura pronta para atender sua rotina com conforto e profissionalismo.",
      items: [
        "Escolha a sala ideal para o seu estilo de trabalho",
        "Assine o contrato digital de forma simples e rápida",
        "Leve seu notebook e comece a produzir no mesmo dia",
      ],
    },

    plans: [
      {
        price: 2490,
        label: "Mensal",
        period: "MÊS",
        included: [
          "Sala privativa mobiliada",
          "Internet de alta velocidade",
          "Limpeza e manutenção inclusas",
          "Recepção para seus clientes",
          "Copa compartilhada",
        ],
        customPriceText: "A partir de",
        whatsappMessage:
          "Olá! Vim pelo site e gostaria de conhecer as opções de salas privativas.",
      },
    ],
    floatingCtaMessage: "A partir de 2490/mês",
  },
};
