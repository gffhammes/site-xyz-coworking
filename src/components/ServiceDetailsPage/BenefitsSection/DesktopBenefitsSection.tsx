import { Box, Container, Stack, Typography } from "@mui/material";
import { BenefitCard } from "./BenefitCard";
import { IServiceItem } from "@/data/types";
import { Animate } from "@/components/common/Animate";

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

          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 14rem)"
            gridAutoRows="1fr"
            gap={3}
            sx={{ flex: "0 0 auto" }}
          >
            {benefitsSection.items.map((item, index) => (
              <Animate
                key={item.text}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  delay: index % 2 === 0 ? 0 : 0.5,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30%" }}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <BenefitCard item={item} />
              </Animate>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
