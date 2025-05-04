import { IServiceItem } from "@/data/services";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";

export interface IMobileStepperSectionProps {
  service: IServiceItem;
}

export const MobileStepperSection = ({
  service,
}: IMobileStepperSectionProps) => {
  const { stepsSection } = service.detailsPage;

  return (
    <Box>
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
