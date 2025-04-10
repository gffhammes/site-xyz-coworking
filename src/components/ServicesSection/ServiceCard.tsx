import { Box, Stack, Typography, useTheme } from "@mui/material";
import { IServiceItem } from "./ServicesSection";
import parse from "html-react-parser";

export interface IServiceCardProps {
  serviceData: IServiceItem;
}

export const ServiceCard = ({ serviceData }: IServiceCardProps) => {
  return (
    <Box
      sx={{
        transition: ".3s ease all",
        border: "1px solid #a9a9a9",
        backgroundColor: "#363636",
        borderRadius: 8,
        overflow: "hidden",
        cursor: "pointer",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack gap={4} alignItems="flex-start" height="100%" sx={{ p: 4 }}>
        <Box sx={{ height: "5rem" }}>
          <serviceData.Image />
        </Box>

        <Stack justifyContent="space-between" height="100%" gap={4}>
          <Stack gap={2}>
            <Typography
              fontWeight={700}
              fontSize={24}
              lineHeight={1}
              color="white"
            >
              {serviceData.title}
            </Typography>
            <Typography color="white">
              {parse(serviceData.description)}
            </Typography>
          </Stack>

          <Typography
            color="primary"
            fontWeight={700}
            sx={{ position: "relative" }}
          >
            SAIBA MAIS
          </Typography>
        </Stack>
      </Stack>

      {/* <Stack
        direction="row"
        alignItems="center"
        gap={0.5}
        sx={{
          p: 2,
        }}
        className="footer"
      >
        <Typography fontWeight={700} sx={{ position: "relative" }}>
          SAIBA MAIS
        </Typography>
      </Stack> */}
    </Box>
  );
};
