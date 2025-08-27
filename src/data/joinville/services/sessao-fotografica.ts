// import photoImg from "../../../../public/images/salas atendimento jlle.jpg";
import photoImg from "../../../../public/images/sessao fotografica.jpg";
import { IServiceItem } from "@/data/types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Groups2Icon from "@mui/icons-material/Groups2";
import WifiIcon from "@mui/icons-material/Wifi";
import { membroX } from "./membro-x";

export const sessaoFotografica: IServiceItem = {
  title: "Sessão Fotográfica Corporativa",
  seoTitle:
    "Espaço para Sessão Fotográfica Corporativa em Joinville — ambientes modernos e profissionais",
  description:
    "Garanta cenários sofisticados e bem estruturados para suas fotos corporativas. Espaços que transmitem profissionalismo e credibilidade, ideais para ensaios de equipe, retratos executivos e branding pessoal.",
  image: photoImg.src,
  slug: "sessao-fotografica",
  heroText:
    "Cenários que<br/><strong>reforçam sua imagem profissional</strong>",
  homeCard: {
    title: "Sessão Fotográfica Corporativa",
    description:
      "Ambientes modernos e elegantes para retratos executivos, fotos de equipe e conteúdos de marca.",
  },
  detailsPage: {
    h1: "O cenário ideal para suas fotos corporativas em Joinville",
    subtitle:
      "Ambientes planejados para transmitir profissionalismo, credibilidade e sofisticação em cada clique.",
    heroCTAText: "ENTRAR EM CONTATO",
    benefitsSection: {
      h2: "Espaços que valorizam sua marca e imagem",
      subtitle:
        "Seja para retratos individuais, fotos de equipe ou campanhas de marca, oferecemos a estrutura certa para um ensaio profissional.",
      items: [
        {
          text: "<strong>Ambientes modernos e bem decorados</strong>, perfeitos para transmitir credibilidade",
          icon: CameraAltIcon,
        },
        {
          text: "<strong>Privacidade e conforto</strong> para produzir com foco e tranquilidade",
          icon: DomainVerificationIcon,
        },
        {
          text: "<strong>Variedade de cenários internos e externos</strong> para enriquecer o ensaio",
          icon: Groups2Icon,
        },
        {
          text: "<strong>Infraestrutura completa</strong>, com internet e climatização",
          icon: WifiIcon,
        },
      ],
    },
    stepsSection: {
      h2: "Agende sua sessão e fortaleça sua presença profissional",
      subtitle:
        "Basta reservar a data desejada e ter acesso a um espaço completo para seu ensaio fotográfico corporativo.",
      items: [
        "Entre em contato e consulte a disponibilidade",
        "Reserve a diária com facilidade",
        "Realize sua sessão fotográfica com cenários prontos e profissionais",
      ],
    },
    plans: [
      {
        customPriceText: "Valor da diária",
        price: 175,
        label: "Diária",
        period: "DIÁRIA",
        included: [
          "Uso de todos os ambientes do coworking",
          "Ambientes decorados e climatizados",
          "Variedade de cenários para fotos individuais e de equipe",
          "Internet de alta velocidade",
          "Copa compartilhada",
        ],
        whatsappMessage:
          "Olá! Tenho interesse em reservar uma diária para sessão fotográfica corporativa em Joinville.",
      },
    ],
    plansMessage:
      "Seja um Membro X e<br/>ganhe <strong>50% de desconto</strong>",
    floatingCtaMessage: "R$175/diária",
    plansMessageTarget: membroX.slug,
  },
};
