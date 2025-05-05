import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";
import { IServiceItem } from "@/data/types";

export interface IDesktopStepperSectionProps {
  service: IServiceItem;
}

export const DesktopStepperSection = ({
  service,
}: IDesktopStepperSectionProps) => {
  const { stepsSection } = service.detailsPage;

  return (
    <Box>
      <Container>
        <Stack gap={12} alignItems="center">
          <Stack gap={2} alignItems="center">
            <Typography variant="h2" textAlign="center" maxWidth="21ch">
              {stepsSection.h2}
            </Typography>

            <Typography textAlign="center" maxWidth="46ch">
              {stepsSection.subtitle}
            </Typography>
          </Stack>

          <ServiceStepper steps={stepsSection.items} />
        </Stack>
      </Container>
    </Box>
  );
};
