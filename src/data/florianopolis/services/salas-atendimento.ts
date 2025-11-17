import salaImg from "../../../../public/images/IMG_3139.png";
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
    h1: "Seu espaço de atendimento pronto para <br> uso em Florianópolis",
    subtitle:
      "Atenda seus clientes em um ambiente profissional e acolhedor, com privacidade, conforto e toda <br> a estrutura necessária para um atendimento de alto padrão.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Ambiente acolhedor e estrutura completa para seus atendimentos",
      subtitle:
        "Atenda com conforto e profissionalismo em um espaço silencioso, climatizado e totalmente preparado para receber seus pacientes ou clientes com excelência.",
      items: [
        {
          text: "<strong>Espaço ideal para psicólogos,</strong> terapeutas, coaches e consultores",
          icon: MedicalInformationIcon,
        },
        {
          text: "<strong>Privacidade e conforto</strong>para atendimentos presenciais com foco total no seu cliente",
          icon: DomainVerificationIcon,
        },
        {
          text: "<strong>Recepção treinada </strong>para acolher seus pacientes de maneira profissional",
          icon: Groups2Icon,
        },
        {
          text: "<strong>Infraestrutura completa,</strong> com internet de alta velocidade e climatização",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Comece a atender em Florianópolis com estrutura e segurança profissional",
      subtitle:
        "Escolha a modalidade ideal, preencha seus dados e comece a usar sua sala ainda hoje — com tudo pronto para receber seus clientes com conforto e credibilidade.",
      items: [
        "Escolha o modelo ideal: hora, período ou diária",
        "Preencha seus dados e assine o contrato digital",
        "Comece a atender em Florianópolis com total praticidade e profissionalismo",
      ],
    },
    plans: [
      {
        price: 75,
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
        price: 189,
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
        price: 365,
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
    floatingCtaMessage: "R$75/hora",
    plansMessageTarget: membroX.slug,
  },
};
