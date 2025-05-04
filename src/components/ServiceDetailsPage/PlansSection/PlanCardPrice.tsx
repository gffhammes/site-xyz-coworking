import { IServicePlan } from "@/data/services";
import { Stack, Typography } from "@mui/material";

export interface IPlanCardPriceProps {
  selectedPlan: IServicePlan;
}

export const PlanCardPrice = ({ selectedPlan }: IPlanCardPriceProps) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Typography
        color="primary"
        fontSize={16}
        fontWeight="bold"
        alignSelf="flex-start"
      >
        R$
      </Typography>

      <Typography
        color="primary"
        fontSize={64}
        fontWeight="bold"
        alignSelf="center"
        lineHeight={0.8}
      >
        {selectedPlan.price}
      </Typography>

      <Typography
        color="primary"
        fontSize={16}
        fontWeight="bold"
        textTransform="uppercase"
        alignSelf="flex-end"
        lineHeight={1}
      >
        /{selectedPlan.period}
      </Typography>
    </Stack>
  );
};
