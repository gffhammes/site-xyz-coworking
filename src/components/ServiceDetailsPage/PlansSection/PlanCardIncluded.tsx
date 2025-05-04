import { IServicePlan } from "@/data/services";
import { Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export interface IPlanCardIncludedProps {
  selectedPlan: IServicePlan;
}

export const PlanCardIncluded = ({ selectedPlan }: IPlanCardIncludedProps) => {
  return (
    <Stack gap={2}>
      {selectedPlan.included.map((item) => (
        <Stack key={item} direction="row" sx={{ color: "white" }} gap={1}>
          <CheckCircleOutlineIcon fontSize="small" sx={{ mt: 0.5 }} />

          <Typography>{item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
