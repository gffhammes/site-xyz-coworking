import { Stack, Typography } from "@mui/material";

export interface IServiceStepperProps {
  steps: string[];
}

export const ServiceStepper = ({ steps }: IServiceStepperProps) => {
  return (
    <Stack gap={3}>
      {steps.map((step, index) => (
        <Stack key={step} direction="row" gap={1}>
          <Stack
            sx={{
              height: "2rem",
              width: "2rem",
              borderRadius: "2rem",
              backgroundColor: "primary.main",
              flex: "0 0 auto",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography lineHeight={1}>{index + 1}</Typography>
          </Stack>
          <Typography>{step}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
