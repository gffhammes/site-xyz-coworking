import enderecoImg from "../../../../public/images/endereco.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import InventoryIcon from "@mui/icons-material/Inventory";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IServiceItem } from "@/data/types";

export const enderecoFiscal: IServiceItem = {
  title: "Endereço Fiscal e Comercial",
  seoTitle: "Endereço Fiscal e Comercial em Balneário Camboriú",
  description:
    "Formalize sua empresa com um endereço de prestígio em Balneário Camboriú, sem custos elevados. Ideal para empresas em início e negócios digitais que buscam credibilidade e presença no mercado.",
  image: enderecoImg.src,
  target: "endereco-fiscal-e-comercial",
  heroText: "Um endereço para<br/>minha empresa",
  homeCard: {
    title: "Endereço Fiscal",
    description:
      "Perfeito para quem quer registrar sua empresa em um <strong>endereço estratégico</strong> e atender clientes com <strong>mais autoridade.</strong>",
  },
  detailsPage: {
    h1: "O primeiro passo para sua<br/>empresa existir de verdade",
    subtitle:
      "Com nosso endereço fiscal e comercial, sua empresa ganha legitimidade, passa mais<br/>confiança e pode operar de forma 100% regular — sem precisar arcar com os altos custos.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Por que centenas de empresas confiam no nosso endereço?",
      subtitle:
        "Não é só um endereço bonito. É a base que dá legitimidade ao seu CNPJ, transmite confiança e permite que sua empresa funcione de forma regular e profissional desde o primeiro dia.",
      items: [
        {
          text: "CNPJ ativo com <strong>endereço de prestígio</strong> em Balneário Camboriú",
          icon: PlaceIcon,
        },
        {
          text: "<strong>Recebimento e aviso</strong> de correspondências",
          icon: InventoryIcon,
        },
        {
          text: "<strong>Mais confiança e credibilidade</strong> junto a clientes e fornecedores",
          icon: VerifiedIcon,
        },
        {
          text: "Ideal para <strong>negócios digitais</strong> ou empresas em <strong>início de operação</strong>",
          icon: TrendingUpIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Abrir ou transferir seu<br/>CNPJ nunca foi tão simples",
      subtitle:
        "É rápido e fácil começar a usar nosso endereço como sede da sua empresa — com zero burocracia e 100% segurança.",
      items: [
        "Escolha o plano que melhor se adapta ao seu negócio",
        "Envie a documentação da sua empresa",
        "Assine o contrato digitalmente",
        "Pronto! Você já pode registrar ou transferir seu CNPJ",
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
          "Atendimento e triagem de correspondências",
          "50% de desconto no aluguel de salas de reunião e estações de coworking",
        ],
        whatsappMessage:
          "Olá! Vim do site e tenho interesse em contratar o plano anual de endereço fiscal.",
      },
      {
        price: 189,
        label: "Mensal",
        period: "Mês",
        included: [
          "Endereço fiscal e/ou comercial válido para CNPJ",
          "Atendimento e triagem de correspondências",
          "50% de desconto no aluguel de salas de reunião e estações de coworking",
        ],
        whatsappMessage:
          "Olá! Vim do site e tenho interesse em contratar o plano mensal de endereço fiscal.",
      },
    ],
  },
};
