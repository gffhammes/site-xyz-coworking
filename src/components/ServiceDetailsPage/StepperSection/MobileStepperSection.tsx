import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";
import { IServiceItem } from "@/data/types";
import { Animate } from "@/components/common/Animate";

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
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2">
                {stepsSection.h2.replaceAll("<br/>", " ")}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography>
                {stepsSection.subtitle.replaceAll("<br/>", " ")}
              </Typography>
            </Animate>
          </Stack>

          <ServiceStepper steps={stepsSection.items} />
        </Stack>
      </Container>
    </Box>
  );
};
