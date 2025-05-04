import { Stack, Typography } from "@mui/material";
import parse from "html-react-parser";

export interface IServiceStepperProps {
  steps: string[];
}

export const ServiceStepper = ({ steps }: IServiceStepperProps) => {
  return (
    <Stack gap={{ xs: 3, md: 8 }} direction={{ xs: "column", md: "row" }}>
      {steps.map((step, index) => (
        <Stack key={step} direction={{ xs: "row", md: "column" }} gap={1}>
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
      ))}
    </Stack>
  );
};
