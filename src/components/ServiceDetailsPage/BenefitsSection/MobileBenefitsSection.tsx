import { Box, Container, Stack, Typography } from "@mui/material";
import { BenefitCard } from "./BenefitCard";
import { IServiceItem } from "@/data/types";
import { Animate } from "@/components/common/Animate";

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
            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography variant="h2">{benefitsSection.h2}</Typography>
            </Animate>

            <Animate
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
            >
              <Typography>{benefitsSection.subtitle}</Typography>
            </Animate>
          </Stack>

          <Stack gap={3}>
            {benefitsSection.items.map((item) => (
              <Animate
                initial={{ opacity: 0, x: -20 }}
                key={item.text}
                transition={{ duration: 1, type: "spring" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30%" }}
              >
                <BenefitCard item={item} />
              </Animate>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
