import { IServiceItem } from "@/data/types";
import estacoesImg from "../../../../public/images/estacoes-trabalho.jpg";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import WorkIcon from "@mui/icons-material/Work";
import HubIcon from "@mui/icons-material/Hub";
import WifiIcon from "@mui/icons-material/Wifi";
import { membroX } from "./membro-x";

export const estacoesTrabalho: IServiceItem = {
  title: "Estações de Trabalho",
  seoTitle: "Estações de Trabalho em Joinville",
  description:
    "Espaços compartilhados e funcionais, ideais para profissionais que buscam estrutura, foco e flexibilidade para trabalhar com eficiência em Joinville.",
  image: estacoesImg.src,
  slug: "estacoes-trabalho",
  heroText: "Uma estação de<br/><strong>trabalho compartilhada</strong>",
  homeCard: {
    title: "Estações de Trabalho",
    description:
      "Foco e produtividade em um ambiente profissional. Ideal para quem quer fugir do home office e manter uma rotina eficiente.",
  },
  detailsPage: {
    h1: "Flexibilidade e estrutura<br/>para sua rotina de trabalho",
    subtitle:
      "Trabalhe com conforto, internet rápida e todos os recursos que você precisa —<br/>sem os custos e a solidão de um escritório em casa.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Espaços compartilhados com estrutura de verdade",
      subtitle:
        "Ideal para quem busca um ambiente profissional, com conforto e flexibilidade para trabalhar, atender clientes e fazer contatos relevantes.",
      items: [
        {
          text: "<strong>Estações individuais</strong> com mesa, cadeira ergonômica e conforto",
          icon: SensorOccupiedIcon,
        },
        {
          text: "Perfeito para <strong>profissionais autônomos, híbridos e freelancers</strong>",
          icon: WorkIcon,
        },
        {
          text: "<strong>Conexões profissionais</strong> e troca com outros negócios",
          icon: HubIcon,
        },
        {
          text: "<strong>Internet rápida, café à vontade</strong> e áreas de apoio",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Do cadastro à mesa<br/>em poucos minutos",
      subtitle:
        "Escolha seu plano, preencha seus dados e comece a usar sua estação quando quiser — com tudo pronto para você produzir.",
      items: [
        "Escolha seu plano diário ou mensal",
        "Assine o contrato online",
        "Chegue e comece a trabalhar",
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
          "Olá! Tenho interesse em reservar uma estação de trabalho em Joinville.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    plansMessageTarget: membroX.slug,
    floatingCtaMessage: "R$120/dia",
  },
};
