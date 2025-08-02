import salaImg from "../../../../public/images/Salas Privativas-181.jpg";
import { IServiceItem } from "@/data/types";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ChecklistIcon from "@mui/icons-material/Checklist";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

export const salasPrivativas: IServiceItem = {
  title: "Salas Privativas",
  seoTitle: "Salas Privativas em Joinville",
  description:
    "Garanta privacidade, foco e uma estrutura completa para o seu negócio. As salas privativas são ideais para empresas e profissionais que precisam de um ambiente exclusivo, pronto para transmitir profissionalismo e eficiência.",
  image: salaImg.src,
  slug: "salas-privativas",
  heroText: "Uma sala privativa<br/><strong>para meu negócio</strong>",
  homeCard: {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, consultores e prestadores de serviço que precisam de um espaço exclusivo, com estrutura profissional.",
  },
  detailsPage: {
    h1: "Seu próprio espaço, com<br/>estrutura de escritório de verdade",
    subtitle:
      "Mais do que privacidade. Aqui, você trabalha com foco, segurança e a imagem certa para seu negócio.<br/>Salas prontas para uso, em uma localização estratégica de Joinville.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Salas privativas que entregam conforto, eficiência e imagem profissional",
      subtitle:
        "Tudo o que você espera de um escritório próprio — sem se preocupar com aluguel comercial, condomínio, limpeza ou infraestrutura.",
      items: [
        {
          text: "<strong>Ambiente exclusivo</strong> para sua equipe ou atendimento individual",
          icon: GroupWorkIcon,
        },
        {
          text: "<strong>Pronta para usar:</strong> internet rápida, mobília e climatização inclusas",
          icon: RocketLaunchIcon,
        },
        {
          text: "<strong>Mais foco e produtividade</strong> para sua rotina de trabalho",
          icon: ChecklistIcon,
        },
        {
          text: "<strong>Recepção profissional</strong> para seus clientes em horário comercial",
          icon: RecordVoiceOverIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Tenha sua sala pronta<br/>para trabalhar em poucas horas",
      subtitle:
        "Sem burocracia. Escolha o espaço ideal, assine o contrato digitalmente e comece a usar no mesmo dia — com tudo funcionando.",
      items: [
        "Escolha a sala que atende sua demanda",
        "Assine o contrato de forma digital",
        "Leve seu notebook e comece a usar na hora",
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
          "Olá! Tenho interesse em conhecer as opções de salas privativas em Joinville.",
      },
    ],
    floatingCtaMessage: "A partir de 2490/mês",
  },
};
