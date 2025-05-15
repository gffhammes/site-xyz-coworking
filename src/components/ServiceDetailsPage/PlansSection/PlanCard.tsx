import { Box, Button, Stack, Typography } from "@mui/material";
import { PlanCardPrice } from "./PlanCardPrice";
import { PlanCardIncluded } from "./PlanCardIncluded";
import { IServicePlan } from "@/data/types";
import { getWhatsappLink } from "@/utils/utils";
import { Animate } from "@/components/common/Animate";

export interface IPlanCardProps {
  selectedPlan: IServicePlan;
}

export const PlanCard = ({ selectedPlan }: IPlanCardProps) => {
  const buttonHref = getWhatsappLink(selectedPlan.whatsappMessage);

  return (
    <Animate
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 2, type: "spring" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30%" }}
    >
      <Box sx={{ backgroundColor: "#363636", borderRadius: 8, p: 4 }}>
        <Stack gap={4}>
          <Stack gap={4}>
            <PlanCardPrice selectedPlan={selectedPlan} />

            <PlanCardIncluded selectedPlan={selectedPlan} />
          </Stack>

          <Button
            LinkComponent="a"
            href={buttonHref}
            target="_blank"
            variant="contained"
          >
            CONTRATAR AGORA
          </Button>
        </Stack>
      </Box>
    </Animate>
  );
};
