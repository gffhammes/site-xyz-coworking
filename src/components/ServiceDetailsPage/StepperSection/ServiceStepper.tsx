"use client";

import { Animate } from "@/components/common/Animate";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Stack, Typography } from "@mui/material";
import parse from "html-react-parser";

export interface IServiceStepperProps {
  steps: string[];
}

export const ServiceStepper = ({ steps }: IServiceStepperProps) => {
  const { md } = useBreakpoint();

  const animateProps = (index: number) => {
    return md
      ? {
          initial: { opacity: 0, y: 10 },
          transition: { duration: 1, type: "spring", delay: index * 0.5 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-30%" },
        }
      : {
          initial: { opacity: 0, x: -20 },
          transition: { duration: 1, type: "spring" },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-30%" },
        };
  };

  return (
    <Stack gap={{ xs: 3, md: 8 }} direction={{ xs: "column", md: "row" }}>
      {steps.map((step, index) => (
        <Animate key={step} {...animateProps(index)}>
          <Stack direction={{ xs: "row", md: "column" }} gap={1}>
            <Stack
              sx={{
                height: { xs: "2rem", md: "4rem" },
                width: { xs: "2rem", md: "4rem" },
                borderRadius: { xs: "2rem", md: "4rem" },
                backgroundColor: "primary.main",
                flex: "0 0 auto",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                lineHeight={1}
                fontWeight="bold"
                fontSize={{ xs: 16, md: 32 }}
              >
                {index + 1}
              </Typography>
            </Stack>

            <Typography fontWeight="bold" sx={{ mt: 0.5 }} maxWidth="25ch">
              {parse(step)}
            </Typography>
          </Stack>
        </Animate>
      ))}
    </Stack>
  );
};
