import membroImg from "../../../../public/images/membro-x-jlle.webp";
import { IServiceItem } from "@/data/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DiscountIcon from "@mui/icons-material/Discount";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const membroX: IServiceItem = {
  title: "Membro X",
  seoTitle:
    "Membro X — Endereço Comercial e Benefícios Exclusivos em Joinville",
  description:
    "Aumente sua presença profissional em Joinville com um endereço comercial qualificado e vantagens exclusivas. Ideal para negócios digitais, autônomos e empresas que querem economizar com estrutura sem abrir mão da credibilidade.",
  image: membroImg.src,
  slug: "membro-x",
  heroText: "Um plano com<br/><strong>vários benefícios</strong>",
  homeCard: {
    title: "Membro X",
    description:
      "Plano anual com endereço comercial estratégico em Joinville e vantagens exclusivas para economizar e profissionalizar sua presença digital.",
  },
  detailsPage: {
    h1: "Credibilidade e economia<br/>para o seu negócio o ano todo",
    subtitle:
      "Com o plano Membro X, sua empresa tem um endereço profissional para divulgar no Google e redes sociais,<br/>recebe correspondências com segurança e ainda economiza com descontos em coworking e salas.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Mais presença no mercado, menos custo fixo",
      subtitle:
        "Ganhe credibilidade sem precisar manter uma sede física. Tenha um endereço profissional em Joinville, com gestão de correspondência e acesso a benefícios exclusivos.",
      items: [
        {
          text: "<strong>Endereço comercial estratégico</strong> para Google Meu Negócio, redes sociais e materiais da empresa",
          icon: LocationOnIcon,
        },
        {
          text: "<strong>Gestão de correspondências e encomendas</strong> com retirada em horário comercial",
          icon: LocalPostOfficeIcon,
        },
        {
          text: "<strong>50% de desconto</strong> no uso de coworking, salas de reunião e salas de atendimento",
          icon: DiscountIcon,
        },
        {
          text: "<strong>Presença profissional e confiança</strong> para sua marca — sem precisar alugar um escritório",
          icon: VerifiedUserIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Como se tornar um Membro X",
      subtitle:
        "O processo é rápido e prático. Com poucos passos, você garante seu endereço comercial e todos os benefícios do plano.",
      items: [
        "Envie um documento com foto e comprovante de residência de um dos sócios",
        "Receba o contrato digital e o boleto da anuidade",
        "Assine e comece a usar seu novo endereço nos canais da sua empresa",
      ],
    },
    plans: [
      {
        price: 1297,
        label: "Anual",
        period: "ANO",
        included: [
          "Endereço comercial qualificado em Joinville",
          "Uso do endereço em redes sociais, Google e materiais da empresa",
          "Gestão de correspondência (até 40x40x40cm e 5kg)",
          "Retirada durante horário comercial",
          "50% de desconto em coworking e salas",
        ],
        customPriceText: "Investimento único",
        whatsappMessage:
          "Olá! Vi o plano Membro X no site e gostaria de saber mais sobre como funciona em Joinville.",
      },
    ],
    floatingCtaMessage: "R$1297/ano",
  },
};
