import enderecofiscalfloripa from "../../../../public/images/endereco fiscal.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import InventoryIcon from "@mui/icons-material/Inventory";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IServiceItem } from "@/data/types";

export const enderecoFiscal: IServiceItem = {
  title: "Endereço Fiscal",
  seoTitle: "Endereço Fiscal e Comercial em Florianópolis",
  description:
    "Garanta um endereço de prestígio na capital de Santa Catarina e referência em qualidade de vida e inovação. Ideal para empresas em crescimento e negócios digitais que buscam credibilidade, regularização e presença em um dos mercados mais promissores do país, sem custos elevados.",
  image: enderecofiscalfloripa.src,
  slug: "endereco-fiscal-e-comercial",
  heroText: "Um endereço para<br/>minha empresa",
  homeCard: {
    title: "Endereço Fiscal",
    description:
      "Perfeito para quem quer registrar sua empresa em um <strong>endereço estratégico</strong> e atender clientes com <strong>mais autoridade.</strong>",
  },
  detailsPage: {
    h1: "Mais que um endereço fiscal:<br/> uma posição estratégica",
    subtitle:
      "Regularize sua empresa, conquiste credibilidade e aproveite a força<br/>de um espaço físico em um dos maiores polos de inovação do país.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Por que centenas de empresas confiam no nosso endereço?",
      subtitle:
        "Não é só um endereço bonito. É a base que dá legitimidade ao seu CNPJ, transmite confiança e permite que sua empresa funcione de forma regular e profissional desde o primeiro dia.",
      items: [
        {
          text: "CNPJ ativo com <strong>endereço de prestígio</strong> em Florianópolis",
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
          text: "Startups e negócios <strong>instalados no XYZ Floripa podem garantir isenção parcial de ISS.</strog> ",
          icon: TrendingUpIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Abrir ou transferir seu CNPJ em Florianópolis nunca foi tão fácil<br/>",
      subtitle:
        "Regularize sua empresa em Florianópolis com um endereço fiscal validado pela Receita Federal e pronto para uso imediato.",
      items: [
        "Escolha o plano ideal para seu negócio",
        "Envie a documentação requisitada",
        "Assine o contrato digitalmente",
        "Feito! Você já pode registrar ou transferir seu CNPJ",
      ],
    },
    plansMessage: `Economize <strong>R$258</strong>
<br />
no plano anual`,
    plans: [
      {
        price: 1290,
        label: "Anual",
        period: "Ano",
        included: [
          "Autorização para uso de endereço para abertura ou transferência de CNPJ",
          "Autorização para uso de endereço para divulgação em mídias e no Google Meu Negócio",
          "Gestão de correspondências e encomendas com notificação de recebimento.",
          "Utilização dos espaços de coworking com <strong>50%</strong> de desconto",
        ],
        whatsappMessage:
          "Olá! Vim do site e tenho interesse em contratar o plano anual de endereço fiscal.",
      },
      {
        price: 129,
        label: "Mensal",
        period: "Mês",
        included: [
          "Autorização para uso de endereço para abertura ou transferência de CNPJ",
          "Autorização para uso de endereço para divulgação em mídias e no Google Meu Negócio",
          "Gestão de correspondências e encomendas com notificação de recebimento.",
          "Utilização dos espaços de coworking com <strong>50%</strong> de desconto",
        ],
        whatsappMessage:
          "Olá! Vim do site e tenho interesse em contratar o plano mensal de endereço fiscal.",
      },
    ],
    floatingCtaMessage: "R$129/mês",
  },
};
