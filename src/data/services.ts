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
}

export const servicesItems: IServiceServiceItem[] = [
  {
    title: "Endereço Fiscal e Comercial",
    seoTitle: "Endereço Fiscal e Comercial em Balneário Camboriú",
    description:
      "Formalize sua empresa com um endereço de prestígio em Balneário Camboriú, sem custos elevados. Ideal para empresas em início e negócios digitais que buscam credibilidade e presença no mercado.",
    image: salaImg.src,
    target: "endereco-fiscal-e-comercial",
    heroText: "Um endereço para minha empresa",
  },
  {
    title: "Salas Privativas",
    seoTitle: "Salas Privativas em Balneário Camboriú",
    description:
      "Garanta total privacidade e uma estrutura sofisticada para o seu trabalho. Um espaço exclusivo para você, com a credibilidade que seu negócio precisa, ideal para empreendedores e empresas que buscam profissionalismo.",
    image: enderecoImg.src,
    target: "salas-privativas",
    heroText: "Uma sala privativa para meu negócio",
  },
  {
    title: "Salas de Reunião",
    seoTitle: "Salas de Reunião em Balneário Camboriú",
    description:
      "Ambientes projetados para causar impacto, com tecnologia e conforto, perfeitos para decisões importantes e reuniões de alto nível. Ideal para empresas e profissionais que buscam um local estratégico para fechar negócios.",
    image: salaImg.src,
    target: "salas-reuniao",
    heroText: "Uma sala para reunião de negócios",
  },
  {
    title: "Salas de Atendimento",
    seoTitle: "Salas de Atendimento em Balneário Camboriú",
    description:
      "Um espaço acolhedor e profissional para atender seus clientes com a imagem que seu serviço merece. Perfeito para terapeutas, coaches e outros profissionais que oferecem atendimento personalizado.",
    image: estacoesImg.src,
    target: "salas-atendimento",
    heroText: "Um espaço para atender meus clientes",
  },
  {
    title: "Estações de Trabalho",
    seoTitle: "Estações de Trabalho em Balneário Camboriú",
    description:
      "Ambientes dinâmicos e inspiradores para quem busca flexibilidade e produtividade, com infraestrutura de alto padrão para freelancers e pequenas empresas.",
    image: salaImg.src,
    target: "estacoes-trabalho",
    heroText: "Uma estação de trabalho compartilhada",
  },
];
