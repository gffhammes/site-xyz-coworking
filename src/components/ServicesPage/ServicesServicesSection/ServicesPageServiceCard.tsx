import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { IServiceItem } from "@/data/types";
import { TrackingWrapper } from "@/components/common/TrackingWrapper";

export interface IServicesPageServiceCardProps {
  serviceData: IServiceItem;
}

export const ServicesPageServiceCard = ({
  serviceData,
}: IServicesPageServiceCardProps) => {
  return (
    <TrackingWrapper
      section="lista-servicos"
      action={`ver-${serviceData.slug}`}
    >
      <Stack
        sx={{
          transition: ".3s ease all",
          backgroundColor: "#f4f4f4",
          border: "1px solid #d0d0d0",
          borderRadius: 8,
          overflow: "hidden",
          cursor: "pointer",
          width: "100%",
          height: "100%",
        }}
        component={Link}
        href={`/servicos/${serviceData.slug}`}
      >
        <Stack
          alignItems="flex-start"
          sx={{ flex: "0 0 10rem", width: "100%", position: "relative" }}
        >
          <Image
            fill
            src={serviceData.image}
            alt="Imagem Serviço"
            objectFit="cover"
          />
        </Stack>

        <Stack gap={4} alignItems="flex-start" sx={{ p: 3, flex: "1 1 100%" }}>
          <Stack justifyContent="space-between" height="100%" gap={4}>
            <Stack gap={2}>
              <Typography fontWeight={700} fontSize={24} lineHeight={1}>
                {serviceData.title}
              </Typography>

              <Typography>{parse(serviceData.description)}</Typography>
            </Stack>

            <Typography
              color="secondary"
              fontWeight={700}
              sx={{ position: "relative" }}
            >
              SAIBA MAIS
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </TrackingWrapper>
  );
};
