import {
  Box,
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
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import { ServiceCard } from "./ServiceCard";
import { Carousel } from "../Carousel/Carousel";
import { JSXElementConstructor, ReactElement } from "react";
import { BusinessPlan } from "../Svg/BusinessPlan";
import { MyLocation } from "../Svg/MyLocation";
import { InTheOffice } from "../Svg/InTheOffice";
import { SharedWorkspace } from "../Svg/SharedWorkspace";

export interface IServicesSectionProps {}

export const ServicesSection = (props: IServicesSectionProps) => {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Stack gap={4}>
        <Container>
          <Stack gap={2} alignItems="center">
            <Typography textAlign="center" variant="h2" maxWidth="20ch">
              Tudo o que você precisa para crescer
            </Typography>

            <Typography textAlign="center">
              Do endereço fiscal à sala privativa — escolha o serviço que faz
              sentido pro seu negócio.
            </Typography>
          </Stack>
        </Container>

        <Carousel
          options={{ loop: true, align: "center" }}
          slides={servicesItems.map((item) => (
            <Box key={item.title} sx={{ flex: "0 0 80%", px: 1 }}>
              <ServiceCard serviceData={item} />
            </Box>
          ))}
        />
      </Stack>
    </Box>
  );
};

export interface IServiceItem {
  title: string;
  description: string;
  Image: OverridableComponent<any>;
}

export const servicesItems: IServiceItem[] = [
  {
    title: "Endereço Fiscal",
    description:
      "Perfeito para quem quer registrar sua empresa em um <strong>endereço estratégico</strong> e atender clientes com <strong>mais autoridade.</strong>",
    Image: MyLocation,
  },
  {
    title: "Salas Privativas",
    description:
      "Ideal para pequenas empresas, startups e autônomos que precisam de um espaço exclusivo.",
    Image: InTheOffice,
  },
  {
    title: "Estações de Trabalho",
    description:
      "Esqueça a solidão do home office! Aqui, você trabalha cercado de boas ideias e grandes oportunidades.",
    Image: SharedWorkspace,
  },
  {
    title: "Reserva de Sala",
    description:
      "Precisa de uma sala para uma reunião? Você pode agendar por hora para seu conforto e de seus clientes!",
    Image: BusinessPlan,
  },
];
