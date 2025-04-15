import {
  Box,
  Button,
  Container,
  Stack,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

export interface IAdvantagesSectionProps {}

export const AdvantagesSection = (props: IAdvantagesSectionProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 1, pt: 5, pb: 10 }}
      >
        <Stack gap={4} alignItems="flex-start">
          <Stack gap={2}>
            <Typography variant="h2">
              Vantagens que fazem diferença no seu dia a dia
            </Typography>

            <Typography>
              Mais que estrutura — criamos um ambiente pra você trabalhar com
              conforto, flexibilidade e conexão.{" "}
            </Typography>
          </Stack>

          <Stack gap={4} direction={{ xs: "column" }}>
            {advantageItems.map((item) => (
              <Box
                key={item.title}
                display="grid"
                gridTemplateColumns="min-content auto"
                gridTemplateRows="auto auto"
                alignItems="center"
                gridTemplateAreas={`
                  "icon title"
                  "none desc"
                `}
                columnGap={2}
              >
                <item.Icon fontSize="large" sx={{ gridArea: "icon" }} />

                <Typography sx={{ gridArea: "title" }} fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography sx={{ gridArea: "desc" }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Button variant="contained">agendar visita</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export interface IAdvantageItem {
  Icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  description: string;
}

export const advantageItems: IAdvantageItem[] = [
  {
    title: "Aberto 24h",
    description:
      "Seu trabalho não tem horário fixo? Aqui você tem acesso ao seu espaço a qualquer hora do dia (ou da noite).",
    Icon: UpdateOutlinedIcon,
  },
  {
    title: "Ambientes verdes",
    description:
      "O verde ao seu redor reduz o estresse e aumenta a produtividade – e nós levamos isso a sério.",
    Icon: SpaOutlinedIcon,
  },
  {
    title: "Happy hours e eventos exclusivos",
    description:
      "No XYZ, você não encontra só um espaço de trabalho, mas uma comunidade que compartilha conhecimento e oportunidades.",
    Icon: CelebrationOutlinedIcon,
  },
];
