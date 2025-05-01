import { IServiceServiceItem } from "@/data/services";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";

export interface IStepperSectionProps {
  service: IServiceServiceItem;
}

export const StepperSection = ({ service }: IStepperSectionProps) => {
  const { stepsSection } = service.detailsPage;

  return (
    <Box id="passos">
      <Container>
        <Stack gap={4}>
          <Stack gap={2}>
            <Typography variant="h2">{stepsSection.h2}</Typography>
            <Typography>{stepsSection.subtitle}</Typography>
          </Stack>

          <ServiceStepper steps={stepsSection.items} />
        </Stack>
      </Container>
    </Box>
  );
};
