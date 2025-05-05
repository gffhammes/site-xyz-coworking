import { Box, Container, Stack, Typography } from "@mui/material";
import { BenefitCard } from "./BenefitCard";
import { IServiceItem } from "@/data/types";

export interface IDesktopBenefitsSectionProps {
  service: IServiceItem;
}

export const DesktopBenefitsSection = ({
  service,
}: IDesktopBenefitsSectionProps) => {
  const { benefitsSection } = service.detailsPage;

  return (
    <Box>
      <Container>
        <Stack
          gap={8}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack gap={2} sx={{ flex: "0 0 23rem" }}>
            <Typography variant="h2">{benefitsSection.h2}</Typography>

            <Typography>{benefitsSection.subtitle}</Typography>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 14rem)"
            gap={3}
            sx={{ flex: "0 0 auto" }}
          >
            {benefitsSection.items.map((item) => (
              <BenefitCard key={item.text} item={item} />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
