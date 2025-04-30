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
import { servicesHeroSectionData } from "./ServiceDetailsHeroSection";
import { useState } from "react";
import Link from "next/link";
import { scrollTo } from "@/utils/utils";
import { servicesItems } from "@/data/services";

export interface IServicesSelectProps {
  align?: "center" | "flex-start";
}

export const ServicesSelect = ({ align = "center" }: IServicesSelectProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <Stack>
      <Typography>O que você busca?</Typography>

      <Box
        display="grid"
        columnGap={1}
        rowGap={1}
        gridTemplateColumns="1fr 1fr"
        gridAutoRows="1fr"
      >
        {servicesItems.map((option) => {
          return (
            <Stack
              key={option.target}
              alignItems="center"
              justifyContent="center"
              sx={{
                py: 1,
                px: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
              }}
              component={Link}
              href={`/servicos/${option.target}`}
            >
              <Typography textAlign="center" fontSize={14}>
                {option.heroText}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );

  return (
    <Stack
      width={align === "center" ? "100%" : "30rem"}
      gap={4}
      alignItems={align}
    >
      <Stack
        gap={2}
        width={align === "center" ? "100%" : "30rem"}
        alignItems={align}
      >
        <Typography>O que você busca?</Typography>

        <FormControl fullWidth>
          <Select
            value={String(value)}
            onChange={handleChange}
            sx={{
              color: "primary.main",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.light",
              },
              ".MuiSvgIcon-root": {
                color: "primary.main",
              },
            }}
          >
            {/* {servicesHeroSectionData.selectOptions.map((option, index) => (
              <MenuItem value={index}>{option.label}</MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </Stack>

      <Button fullWidth={align === "center"} variant="contained">
        {servicesHeroSectionData.buttonText}
      </Button>
    </Stack>
  );
};
