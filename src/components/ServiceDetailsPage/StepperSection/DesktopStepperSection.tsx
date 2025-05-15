import { Box, Container, Stack, Typography } from "@mui/material";
import { ServiceStepper } from "./ServiceStepper";
import { IServiceItem } from "@/data/types";
import parse from "html-react-parser";
import { Animate } from "@/components/common/Animate";

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
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2" textAlign="center">
                {parse(stepsSection.h2)}
              </Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography textAlign="center" maxWidth="46ch">
                {parse(stepsSection.subtitle)}
              </Typography>
            </Animate>
          </Stack>

          <ServiceStepper steps={stepsSection.items} />
        </Stack>
      </Container>
    </Box>
  );
};
