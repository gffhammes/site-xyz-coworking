import { IServiceItem } from "@/data/services";
import { Box, Container, Stack, Typography } from "@mui/material";
import { BenefitCard } from "./BenefitCard";

export interface IMobileBenefitsSectionProps {
  service: IServiceItem;
}

export const MobileBenefitsSection = ({
  service,
}: IMobileBenefitsSectionProps) => {
  const { benefitsSection } = service.detailsPage;

  return (
    <Box>
      <Container>
        <Stack gap={4}>
          <Stack gap={2}>
            <Typography variant="h2">{benefitsSection.h2}</Typography>

            <Typography>{benefitsSection.subtitle}</Typography>
          </Stack>

          <Stack gap={3}>
            {benefitsSection.items.map((item) => (
              <BenefitCard key={item.text} item={item} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
