import salaImg from "../../../../public/images/sala-atendimento.webp";
import { IServiceItem } from "@/data/types";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Groups2Icon from "@mui/icons-material/Groups2";
import WifiIcon from "@mui/icons-material/Wifi";
import { membroX } from "./membro-x";

export const salasAtendimento: IServiceItem = {
  title: "Salas de Atendimento",
  seoTitle:
    "Salas de Atendimento em Balneário Camboriú com privacidade e estrutura completa",
  description:
    "Espaços projetados para atendimentos presenciais com privacidade e profissionalismo. Estrutura completa com recepção, internet e mobiliário, ideais para psicólogos, terapeutas, consultores e outros especialistas que valorizam qualidade e confiança.",
  image: salaImg.src,
  slug: "salas-atendimento",
  heroText: "Uma sala para<br/>fazer atendimentos",
  homeCard: {
    title: "Salas de Atendimento",
    description:
      "Perfeitas para psicólogos, terapeutas, consultores e outros profissionais que precisam de um espaço reservado e profissional.",
  },
  detailsPage: {
    h1: "Fortaleça sua presença na </br>capital com o Membro X",
    subtitle:
      "Com o plano Membro X, sua empresa ganha mais credibilidade, um endereço comercial para divulgar,</br> recebimento seguro de correspondências, vantagens exclusivas em coworking e salas de reunião o ano todo.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Mais profissionalismo, conforto e privacidade para seus atendimentos",
      subtitle:
        "Ideal para quem precisa de um ambiente reservado, com estrutura profissional e pronto para começar hoje mesmo.",
      items: [
        {
          text: "<strong>Endereço comercial de prestígio</strong>para destacar sua empresa nos canais digitais e materiais corporativos",
          icon: MedicalInformationIcon,
        },
        {
          text: "<strong>Gestão completa de correspondências e encomendas</strong>com suporte e organização garantidos",
          icon: DomainVerificationIcon,
        },
        {
          text: "<strong>Descontos de 50%</strong>para uso de coworking, salas de reunião e atendimento",
          icon: Groups2Icon,
        },
        {
          text: "<strong>Mais visibilidade e credibilidade</strong> para sua marca, com a estrutura e o prestígio de um endereço profissional",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Como se  tornar um Membro X",
      subtitle:
        "Torne-se um Membro X de forma simples e rápida.<br> Em poucos passos, você garante seu endereço comercial e começa a aproveitar todos os benefícios com praticidade e segurança.",
      items: [
        "Envie um documento com foto e um comprovante de residência",
        "Receba o contrato digital e o boleto da anuidade",
        "Assine e comece a usar seu endereço comercial em todos os canais da sua empresa",
      ],
    },
    plans: [
      {
        price: 100,
        label: "Hora",
        period: "HORA",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar uma hora.",
      },
      {
        price: 400,
        label: "Período",
        period: "PERÍODO",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar um período.",
      },
      {
        price: 720,
        label: "Diária",
        period: "Diária",
        included: [
          "Sala mobiliada e climatizada",
          "Internet de alta velocidade",
          "Recepção para seus clientes",
          "Copa compartilhada",
          "Ambiente silencioso e reservado",
        ],
        whatsappMessage:
          "Olá! Vi no site as Salas de Atendimento e gostaria de reservar uma diária.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$100/hora",
    plansMessageTarget: membroX.slug,
  },
};
