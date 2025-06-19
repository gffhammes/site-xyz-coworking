import membroImg from "../../../../public/images/membro.webp";
import { IServiceItem } from "@/data/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DiscountIcon from "@mui/icons-material/Discount";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const membroX: IServiceItem = {
  title: "Membro X",
  seoTitle:
    "Membro X — Endereço Comercial e Benefícios Exclusivos em Balneário Camboriú",
  description:
    "Mais presença, mais confiança e muito mais economia. Com o plano Membro X, sua empresa ganha um endereço comercial qualificado e acesso a uma série de vantagens exclusivas por um preço fixo anual.",
  image: membroImg.src,
  slug: "membro-x",
  heroText: "Um plano com<br/>vários benefícios",
  homeCard: {
    title: "Membro X",
    description:
      "Plano anual com endereço comercial qualificado e vantagens exclusivas para economizar e fortalecer sua presença online.",
  },
  detailsPage: {
    h1: "Mais credibilidade e presença<br/>para o seu negócio durante todo o ano",
    subtitle:
      "Com o Membro X, sua empresa ganha um endereço estratégico para divulgar no Google e redes sociais,<br/>recebe correspondências com segurança e ainda economiza com descontos em salas e coworking.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Presença comercial qualificada, mais confiança e economia real",
      subtitle:
        "Tenha todos os benefícios de um endereço comercial em Balneário Camboriú — com gestão de correspondências, presença no Google e vantagens que reduzem seus custos operacionais.",
      items: [
        {
          text: "<strong>Endereço comercial estratégico</strong> para Google Meu Negócio, redes sociais e materiais profissionais",
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
          text: "<strong>Mais presença e credibilidade</strong> para sua empresa — sem precisar manter um espaço físico fixo",
          icon: VerifiedUserIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Como se tornar um Membro X",
      subtitle:
        "Sem burocracia. Com poucos passos, você garante todos os benefícios e começa a usar seu endereço comercial com credibilidade e praticidade.",
      items: [
        "Envie um documento com foto e um comprovante de residência de um dos sócios",
        "Receba e assine o contrato digital (junto com o boleto da anuidade)",
        "Acesse o app, agende espaços e comece a usar o endereço comercial nas suas redes e no Google",
      ],
    },
    plans: [
      {
        price: 1297,
        label: "Anual",
        period: "ANO",
        included: [
          "Endereço comercial qualificado em Balneário Camboriú",
          "Uso do endereço no Google Meu Negócio, redes e materiais",
          "Gestão de correspondências e encomendas (até 40x40x40cm e 5kg)",
          "Retirada em horário comercial",
          "50% de desconto em salas e coworking",
        ],
        customPriceText: "Investimento único",
        whatsappMessage:
          "Olá! Vi o plano Membro X no site e gostaria de mais informações.",
      },
    ],
    floatingCtaMessage: "R$1297/ano",
  },
};
