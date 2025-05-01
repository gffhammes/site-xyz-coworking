import { IServiceServiceItem } from "@/data/services";
import { Box, Container, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";

export interface IBenefitsSectionProps {
  service: IServiceServiceItem;
}

export const BenefitsSection = ({ service }: IBenefitsSectionProps) => {
  const { benefitsSection } = service.detailsPage;
  return (
    <Box id="beneficios">
      <Container>
        <Stack gap={4}>
          <Stack gap={2}>
            <Typography variant="h2">{benefitsSection.h2}</Typography>

            <Typography>{benefitsSection.subtitle}</Typography>
          </Stack>

          <Stack gap={3}>
            {benefitsSection.items.map((item) => (
              <Stack direction="row" gap={1}>
                {item.icon && <item.icon color="secondary" />}

                <Typography maxWidth="30ch">{parse(item.text)}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
