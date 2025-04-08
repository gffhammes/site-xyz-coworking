import {
  Box,
  Button,
  colors,
  Container,
  Stack,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import parse from "html-react-parser";

export interface ICharacteristicsSectionProps {}

export const CharacteristicsSection = (props: ICharacteristicsSectionProps) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          rowGap={10}
          columnGap={10}
        >
          {characteristicItems.map((item) => (
            <Box
              key={item.title}
              sx={{
                transition: ".3s ease all",
                border: "2px solid transparent",
                borderRadius: 8,
                overflow: "hidden",
                cursor: "pointer",

                "&:hover": {
                  borderColor: item.bgColor,

                  "& .footer::before": {
                    transform: "none",
                  },

                  "& .icon": {
                    backgroundColor: item.bgColor,
                  },
                },
              }}
            >
              <Stack gap={2} alignItems="flex-start" sx={{ p: 2 }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  fontSize={32}
                  className="icon"
                  sx={{
                    backgroundColor: "#b4b4b4",
                    height: "3rem",
                    width: "3rem",
                    borderRadius: "3rem",
                    transition: ".3s ease all",
                  }}
                >
                  <item.Icon fontSize="inherit" />
                </Stack>

                <Stack>
                  <Typography fontWeight={700} fontSize={24}>
                    {item.title}
                  </Typography>
                  <Typography>{parse(item.description)}</Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                gap={0.5}
                sx={{
                  p: 2,
                  position: "relative",
                  zIndex: 1,

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    backgroundColor: item.bgColor,
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    transform: "translateY(100%)",
                    transition: ".5s ease all",
                    zIndex: 0,
                  },
                }}
                className="footer"
              >
                <Typography fontWeight={700} sx={{ position: "relative" }}>
                  SAIBA MAIS
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

interface ICharacteristicItem {
  title: string;
  description: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  bgColor: string;
}

export const characteristicItems: ICharacteristicItem[] = [
  {
    title: "Endereço Fiscal",
    description:
      "Perfeito para quem quer registrar sua empresa em um <strong>endereço estratégico</strong> e atender clientes com <strong>mais autoridade.</strong>",
    Icon: LocationOnOutlinedIcon,
    bgColor: "#F0B62B",
  },
  {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
    Icon: VpnKeyOutlinedIcon,
    bgColor: "#ED005B",
  },
  {
    title: "Estações de Trabalho",
    description:
      "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
    Icon: WorkOutlineOutlinedIcon,
    bgColor: "#28BB67",
  },
  {
    title: "Reserva de sala por hora",
    description:
      "Precisa de uma sala para uma reunião? Fazemos o agendamento do período de uma hora para seu conforto e de seus clientes!",
    Icon: QueryBuilderOutlinedIcon,
    bgColor: "#F0B62B",
  },
];
