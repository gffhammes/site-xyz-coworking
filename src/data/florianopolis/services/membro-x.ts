import membrofloripaImg from "../../../../public/images/DSC02319.png";
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
    "Aumente sua presença profissional em Florianópolis com um endereço comercial qualificado e benefícios exclusivos. Ideal para negócios digitais, autônomos e empresas que buscam economia e credibilidade em um dos maiores polos de inovação do país.",
  image: membrofloripaImg.src,
  slug: "membro-x",
  heroText: "Um plano com<br/>vários benefícios",
  homeCard: {
    title: "Membro X",
    description:
      "Plano anual com endereço comercial qualificado e vantagens exclusivas para economizar e fortalecer sua presença online.",
  },
  detailsPage: {
    h1: "Fortaleça sua presença na capital <br/> com o Membro X",
    subtitle:
      "Com o plano Membro X, sua empresa ganha mais credibilidade, um endereço comercial para divulgar, recebimento seguro de correspondências, vantagens exclusivas em coworking e salas de reunião o ano todo.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Presença profissional sólida e benefícios que geram valor",
      subtitle:
        "Tenha todos os benefícios de um endereço comercial — com gestão de correspondências, presença no Google e vantagens exclusivas que fortalecem sua marca e reduzem <br> custos ao longo do ano.",
      items: [
        {
          text: "<strong>Endereço comercial de prestígio  </strong>  para destacar sua empresa nos canais digitais e materiais corporativos",
          icon: LocationOnIcon,
        },
        {
          text: "<strong>Gestão completa de correspondências e encomendas, </strong>com suporte e organização garantidos",

          icon: LocalPostOfficeIcon,
        },
        {
          text: "<strong>50% de desconto</strong> para uso de coworking, salas de reunião e atendimento",
          icon: DiscountIcon,
        },
        {
          text: "<strong>Mais visibilidade e credibilidade</strong> para sua marca, com a estrutura e o prestígio de um endereço profissional",
          icon: VerifiedUserIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Como se tornar um Membro X",
      subtitle:
        "Torne-se um Membro X de forma simples e rápida. Em poucos passos, você garante seu endereço comercial e começa a aproveitar todos os benefícios <br> com praticidade e segurança.",
      items: [
        "Envie um documento com foto e um comprovante de residência",
        "Receba o contrato digital e o boleto da anuidade",
        "Assine e comece a usar seu endereço comercial em todos os canais da sua empresa",
      ],
    },
    plans: [
      {
        price: 684,
        label: "Anual",
        period: "ANO",
        included: [
          "Endereço fiscal e comercial para o seu CNPJ em um coworking que,desde 2006,é referência em Santa Catarina.",
          "Gestão de correspondências e encomendas com notificação de recebimento.",
          "Utilização dos espaços de coworking com <strong>50%</strong> de desconto.",
          "Recepção com atendimento personalizado, ambiente climatizado, água e café com torrefação especial à vontade.",
          "Acesso total à comunidade <strong>Membro X</strong>, com agenda de encontros, grupo de WhatsApp e sistema de reservas.",
        
        ],
        customPriceText: "Investimento único",
        whatsappMessage:
          "Olá! Vi o plano Membro X no site e gostaria de mais informações.",
      },
    ],
    floatingCtaMessage: "R$684/ano",
  },
};
