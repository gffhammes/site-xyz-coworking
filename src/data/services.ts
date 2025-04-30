import enderecoImg from "../../public/images/endereco.jpg";
import estacoesImg from "../../public/images/estacoes.jpg";
import reunioesImg from "../../public/images/reuniao.jpg";
import salaImg from "../../public/images/sala privativa.jpg";

export interface IServiceServiceItem {
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  target: string;
  heroText?: string;
  homeCard: {
    title: string;
    description: string;
  };
  detailsPage: {
    h1: string;
    subtitle: string;
    heroCTAText: string;
    benefits: { icon: null; text: string }[];
    steps: string[];
    included: string[];
    price: number;
  };
}

export const servicesItems: IServiceServiceItem[] = [
  {
    title: "Endereço Fiscal e Comercial",
    seoTitle: "Endereço Fiscal e Comercial em Balneário Camboriú",
    description:
      "Formalize sua empresa com um endereço de prestígio em Balneário Camboriú, sem custos elevados. Ideal para empresas em início e negócios digitais que buscam credibilidade e presença no mercado.",
    image: enderecoImg.src,
    target: "endereco-fiscal-e-comercial",
    heroText: "Um endereço para minha empresa",
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
      benefits: [
        {
          text: "CNPJ ativo com endereço de prestígio em Balneário Camboriú",
          icon: null,
        },
        { text: "Recebimento e aviso de correspondências", icon: null },
        {
          text: "Mais confiança e credibilidade junto a clientes e fornecedores",
          icon: null,
        },
        {
          text: "Ideal para negócios digitais ou empresas em início de operação",
          icon: null,
        },
      ],
      steps: [
        "Escolha o plano que melhor se adapta ao seu negócio",
        "Envie a documentação da sua empresa",
        "Assine o contrato digitalmente",
        "Pronto! Você já pode registrar ou transferir seu CNPJ",
      ],
      included: [
        "Endereço fiscal e/ou comercial válido para CNPJ",
        "Atendimento e triagem de correspondências",
        "Aviso de recebimento por e-mail ou WhatsApp",
        "Uso do endereço em materiais de marketing e site",
      ],
      price: 89,
    },
  },
  {
    title: "Salas Privativas",
    seoTitle: "Salas Privativas em Balneário Camboriú",
    description:
      "Garanta total privacidade e uma estrutura sofisticada para o seu trabalho. Um espaço exclusivo para você, com a credibilidade que seu negócio precisa, ideal para empreendedores e empresas que buscam profissionalismo.",
    image: salaImg.src,
    target: "salas-privativas",
    heroText: "Uma sala privativa para meu negócio",
    homeCard: {
      title: "Salas Privativas",
      description:
        "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
    },
    detailsPage: {
      h1: "Um espaço só seu, com a<br/>estrutura que sua empresa merece",
      subtitle:
        "Trabalhe com mais foco, profissionalismo e privacidade. Nossas salas privativas são ideais para<br/>quem quer um espaço só seu, pronto para impressionar clientes e manter a produtividade em alta.",
      heroCTAText: "ENTRAR EM CONTATO",
      benefits: [
        { text: "Ambiente exclusivo para você ou sua equipe", icon: null },
        {
          text: "Pronto para usar, com internet, móveis e limpeza",
          icon: null,
        },
        {
          text: "Mais profissionalismo e concentração no dia a dia",
          icon: null,
        },
        { text: "Acesso a áreas comuns, recepção e copa", icon: null },
      ],
      steps: [
        "Escolha a sala ideal para o seu perfil",
        "Assine o contrato digital",
        "Leve seu notebook e comece a trabalhar no mesmo dia",
      ],
      included: [
        "Sala privativa mobiliada",
        "Internet de alta velocidade",
        "Limpeza e manutenção inclusas",
        "Recepção para seus clientes",
        "Copa compartilhada",
      ],
      price: 890,
    },
  },
  {
    title: "Salas de Reunião",
    seoTitle: "Salas de Reunião em Balneário Camboriú",
    description:
      "Ambientes projetados para causar impacto, com tecnologia e conforto, perfeitos para decisões importantes e reuniões de alto nível. Ideal para empresas e profissionais que buscam um local estratégico para fechar negócios.",
    image: reunioesImg.src,
    target: "salas-reuniao",
    heroText: "Uma sala para reunião de negócios",
    homeCard: {
      title: "Reserva de Sala",
      description:
        "Precisa de uma sala para uma reunião? Você pode agendar por hora para seu conforto e de seus clientes!",
    },
    detailsPage: {
      h1: "As salas perfeitas para destacar sua<br/>empresa e fechar grandes negócios",
      subtitle:
        "Reuniões estratégicas pedem um ambiente à altura. Nossas salas oferecem<br/>conforto, tecnologia e a imagem certa para fechar grandes negócios.",
      heroCTAText: "ENTRAR EM CONTATO",
      benefits: [
        { text: "Espaços com ar-condicionado, TV e Wi-Fi", icon: null },
        {
          text: "Atendimento personalizado para você e seus convidados",
          icon: null,
        },
        {
          text: "Ideal para reuniões presenciais ou videoconferências",
          icon: null,
        },
        { text: "Agendamento prático por hora ou período", icon: null },
      ],
      steps: [
        "Escolha o melhor horário para sua reunião",
        "Faça a reserva online ou via WhatsApp",
        "Chegue e aproveite o ambiente pronto para uso",
      ],
      included: [
        "Sala de reunião equipada com TV e ar-condicionado",
        "Wi-Fi de alta velocidade",
        "Recepção de clientes",
        "Água, café e estrutura de apoio",
      ],
      price: 69,
    },
  },
  {
    title: "Estações de Trabalho",
    seoTitle: "Estações de Trabalho em Balneário Camboriú",
    description:
      "Ambientes dinâmicos e inspiradores para quem busca flexibilidade e produtividade, com infraestrutura de alto padrão para freelancers e pequenas empresas.",
    image: estacoesImg.src,
    target: "estacoes-trabalho",
    heroText: "Uma estação de trabalho compartilhada",
    homeCard: {
      title: "Estações de Trabalho",
      description:
        "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
    },
    detailsPage: {
      h1: "O ambiente ideal para fazer conexões<br/>que levam seu negócio mais longe",
      subtitle:
        "Tenha acesso a um espaço de trabalho completo, sem os custos de manter um escritório.<br/>Conecte-se, produza mais e esteja cercado por oportunidades todos os dias.",
      heroCTAText: "ENTRAR EM CONTATO",
      benefits: [
        { text: "Estações individuais em ambiente compartilhado", icon: null },
        {
          text: "Ideal para freelancers, nômades digitais e pequenos negócios",
          icon: null,
        },
        { text: "Networking e trocas com outros profissionais", icon: null },
        { text: "Infraestrutura completa inclusa", icon: null },
      ],
      steps: [
        "Escolha seu plano diário ou mensal",
        "Assine o contrato em poucos minutos",
        "Comece a usar sua estação quando quiser",
      ],
      included: [
        "Mesa individual e cadeira ergonômica",
        "Internet rápida e estável",
        "Acesso à copa, recepção e áreas comuns",
        "Limpeza e manutenção",
      ],
      price: 49,
    },
  },
];

// {
//   title: "Salas de Atendimento",
//   seoTitle: "Salas de Atendimento em Balneário Camboriú",
//   description:
//     "Um espaço acolhedor e profissional para atender seus clientes com a imagem que seu serviço merece. Perfeito para terapeutas, coaches e outros profissionais que oferecem atendimento personalizado.",
//   image: estacoesImg.src,
//   target: "salas-atendimento",
//   heroText: "Um espaço para atender meus clientes",
// },
