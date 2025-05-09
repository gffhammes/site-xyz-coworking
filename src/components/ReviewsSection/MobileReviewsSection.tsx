import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import { Carousel } from "../Carousel/Carousel";

export interface IMobileReviewsSectionProps {}

export const MobileReviewsSection = (props: IMobileReviewsSectionProps) => {
  return (
    <Box>
      <Stack
        gap={4}
        sx={{
          position: "relative",
          zIndex: 9,
        }}
      >
        <Container sx={{ px: 6 }}>
          <Typography variant="h2" maxWidth="15ch">
            Veja o que falam sobre nós
          </Typography>
        </Container>

        <Carousel
          showArrows
          options={{ loop: true, align: "center" }}
          slides={reviewsItems.map((item) => (
            <Box key={item.name} sx={{ flex: "0 0 100%", px: 6 }}>
              <Rating value={item.rating} readOnly />

              <Typography fontWeight={700} fontSize={20}>
                {item.name}
              </Typography>

              <Typography className="ellipsis">{item.review}</Typography>
            </Box>
          ))}
        />
      </Stack>
    </Box>
  );
};

export interface IReviewItem {
  rating: number;
  name: string;
  review: string;
}

export const reviewsItems: IReviewItem[] = [
  {
    rating: 5,
    name: "Letícia Derussi",
    review:
      "Espaço excepcional para seu dia a dia no trabalho tornar-se mais produtivo de forma leve! Trabalho há 10 anos na área de estética e posso dizer com propriedade que nunca estive em um lugar colaborativo que faz juz ao seus slogans! O ambiente além da beleza e acessibilidade conta com pessoas simpáticas e prestativas que parecem nunca estar de mau humor! Relatos de uma cliente satisfeita e que indica com muito carinho o XYZ!",
  },
  {
    rating: 5,
    name: "Adã L. Silva",
    review:
      "Excelente CoWorking para se trabalhar e fazer novas conexões. Tem muitas pessoas interessantes e um ambiente bem descontraído para trabalhar. Nota 10!",
  },
  {
    rating: 5,
    name: "Ana Medina",
    review:
      "Experiência incrível! Ambiente muito bom para trabalhar, todo equipado, espaçoso, espaço de descanso! Perfeito! Adorei e voltarei!",
  },
  {
    rating: 5,
    name: "Ana Clara Braga",
    review:
      "Um lugar super acolhedor e aconchegante! Toda a equipe sempre muito solícita e educada! Se procura um lugar para realizar um networking de qualidade e aproveitar um ótimo cafezinho, o XYZ é o lugar certo!",
  },
  {
    rating: 5,
    name: "Fernanda Trevisan",
    review:
      "Espaço de trabalho muito acolhedor. Gosto muito de atender meus clientes no XYZ.",
  },
  {
    rating: 5,
    name: "Gilmar Moura da Silva",
    review:
      "Sob a gestão de uma mulher criativa e inspiradora, o XYZ é uma grande empresa feita por profissionais excelentes. Temos uma parceria que se prolonga a mais de 6 anos, um lugar incrível para trabalhar e conectar-se a pessoas.",
  },
];
