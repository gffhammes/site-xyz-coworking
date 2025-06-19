import enderecoImg from "../../../../public/images/otimizadas-9.webp";
import PlaceIcon from "@mui/icons-material/Place";
import InventoryIcon from "@mui/icons-material/Inventory";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IServiceItem } from "@/data/types";

export const enderecoFiscal: IServiceItem = {
  title: "Endereço Fiscal e Comercial",
  seoTitle: "Endereço Fiscal e Comercial em Joinville",
  description:
    "Formalize sua empresa com um endereço profissional em Joinville. Ideal para negócios digitais, prestadores de serviço e empresas em fase inicial que buscam credibilidade e regularização sem altos custos.",
  image: enderecoImg.src,
  slug: "endereco-fiscal-e-comercial",
  heroText: "Um endereço para<br/><strong>minha empresa</strong>",
  homeCard: {
    title: "Endereço Fiscal",
    description:
      "Perfeito para registrar sua empresa em um <strong>endereço confiável</strong>, fortalecer sua <strong>imagem profissional</strong> e operar com segurança jurídica.",
  },
  detailsPage: {
    h1: "O endereço que fortalece<br/>sua empresa desde o início",
    subtitle:
      "Com nosso endereço fiscal e comercial, sua empresa conquista regularização,<br/>transmite confiança e reduz custos operacionais — sem precisar alugar uma sala física.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Por que empresas em Joinville estão escolhendo nosso endereço?",
      subtitle:
        "Mais do que um endereço, é a base legal e profissional que sua empresa precisa para existir de forma regular,transmitir confiança e atender às exigências fiscais.",
      items: [
        {
          text: "CNPJ ativo com <strong>endereço profissional</strong> em Joinville",
          icon: PlaceIcon,
        },
        {
          text: "<strong>Recebimento e aviso</strong> de correspondências comerciais",
          icon: InventoryIcon,
        },
        {
          text: "<strong>Mais confiança e credibilidade</strong> para o mercado e parceiros",
          icon: VerifiedIcon,
        },
        {
          text: "Ideal para <strong>serviços digitais</strong>, consultorias e empresas em <strong>fase inicial</strong>",
          icon: TrendingUpIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Abrir ou transferir seu<br/>CNPJ em Joinville ficou fácil",
      subtitle:
        "Em poucos passos, você regulariza seu negócio com um endereço seguro, aceito pela Receita Federal e pronto para atender suas necessidades.",
      items: [
        "Escolha o plano ideal para sua empresa",
        "Envie a documentação necessária",
        "Assine o contrato digitalmente",
        "Use o endereço para registrar ou transferir seu CNPJ",
      ],
    },
    plansMessage: `Economize <strong>R$378</strong>
<br />
no plano anual`,
    plans: [
      {
        price: 1890,
        label: "Anual",
        period: "Ano",
        included: [
          "Endereço fiscal e/ou comercial válido para CNPJ",
          "Triagem e notificação de correspondências",
          "50% de desconto no uso de salas de reunião e coworking",
        ],
        whatsappMessage:
          "Olá! Tenho interesse no plano anual de endereço fiscal em Joinville.",
      },
      {
        price: 189,
        label: "Mensal",
        period: "Mês",
        included: [
          "Endereço fiscal e/ou comercial válido para CNPJ",
          "Triagem e notificação de correspondências",
          "50% de desconto no uso de salas de reunião e coworking",
        ],
        whatsappMessage:
          "Olá! Tenho interesse no plano mensal de endereço fiscal em Joinville.",
      },
    ],
    floatingCtaMessage: "R$189/mês",
  },
};
