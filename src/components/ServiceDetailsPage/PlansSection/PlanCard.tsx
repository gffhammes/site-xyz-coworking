import { Box, Button, Stack, Typography } from "@mui/material";
import { PlanCardPrice } from "./PlanCardPrice";
import { PlanCardIncluded } from "./PlanCardIncluded";
import { IServicePlan } from "@/data/types";

export interface IPlanCardProps {
  selectedPlan: IServicePlan;
}

export const PlanCard = ({ selectedPlan }: IPlanCardProps) => {
  return (
    <Box sx={{ backgroundColor: "#363636", borderRadius: 8, p: 4 }}>
      <Stack gap={2}>
        <PlanCardPrice selectedPlan={selectedPlan} />

        <PlanCardIncluded selectedPlan={selectedPlan} />

        <Button variant="contained">CONTRATAR AGORA</Button>
      </Stack>
    </Box>
  );
};
