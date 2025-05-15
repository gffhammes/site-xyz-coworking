"use client";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { servicesHeroSectionData } from "./ServicesHeroSection";
import { useState } from "react";
import Link from "next/link";
import { scrollTo } from "@/utils/utils";
import { services } from "@/data/balneario-camboriu/services/services";
import parse from "html-react-parser";
import { balnearioData } from "@/data/balneario-camboriu/balneario-camboriu";

export interface IServicesSelectProps {
  align?: "center" | "flex-start";
}

export const ServicesSelect = ({ align = "center" }: IServicesSelectProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <Stack gap={2} alignItems="center" width="100%">
      <Typography
        fontWeight="bold"
        textTransform="uppercase"
        fontSize={{ xs: 12, md: 16 }}
        letterSpacing={1.3}
      >
        {servicesHeroSectionData.selectLabel}
      </Typography>

      <Box
        display="grid"
        columnGap={1}
        rowGap={1}
        gridTemplateColumns="1fr 1fr"
        gridAutoRows="1fr"
        width="100%"
      >
        {balnearioData.services.map((option) => {
          return (
            <Stack
              key={option.slug}
              alignItems="center"
              justifyContent="center"
              sx={{
                py: 1,
                px: { xs: 1, md: 2 },
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                transition: ".3s ease all",
                "&:hover": {
                  backgroundColor: "rgba(240, 181, 43, 0.553)",
                },
              }}
              component={Link}
              href={`/servicos/${option.slug}`}
            >
              <Typography textAlign="center" fontSize={{ xs: 14, md: 16 }}>
                {parse(option.heroText)}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
};
