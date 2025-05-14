import { Box, Button, Stack, Typography } from "@mui/material";
import { PlanCardPrice } from "./PlanCardPrice";
import { PlanCardIncluded } from "./PlanCardIncluded";
import { IServicePlan } from "@/data/types";
import { getWhatsappLink } from "@/utils/utils";

export interface IPlanCardProps {
  selectedPlan: IServicePlan;
}

export const PlanCard = ({ selectedPlan }: IPlanCardProps) => {
  const buttonHref = getWhatsappLink(selectedPlan.whatsappMessage);

  return (
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
  );
};
