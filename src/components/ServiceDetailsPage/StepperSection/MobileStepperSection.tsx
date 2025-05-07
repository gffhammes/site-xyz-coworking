import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";
import { IServiceItem } from "@/data/types";

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
            <Typography variant="h2">
              {stepsSection.h2.replaceAll("<br/>", " ")}
            </Typography>
            <Typography>
              {stepsSection.subtitle.replaceAll("<br/>", " ")}
            </Typography>
          </Stack>

          <ServiceStepper steps={stepsSection.items} />
        </Stack>
      </Container>
    </Box>
  );
};
