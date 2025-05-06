"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { PlanPeriodSelector } from "./PlanPeriodSelector";
import { PlanCard } from "./PlanCard";
import parse from "html-react-parser";
import { IServiceItem } from "@/data/types";

export interface IMobilePlansSectionProps {
  service: IServiceItem;
}

export const MobilePlansSection = ({ service }: IMobilePlansSectionProps) => {
  const { plans, plansMessage } = service.detailsPage;

  const [selectedPlan, setSelectedPlan] = useState<number>(0);

  return (
    <Box>
      <Container>
        <Stack gap={4}>
          <Stack alignItems="center" gap={2}>
            <Typography variant="h2" textAlign="center">
              Planos
            </Typography>

            <PlanPeriodSelector
              plans={plans}
              selectedPlan={selectedPlan}
              onSelectedPlanChange={(newPeriod) => setSelectedPlan(newPeriod)}
            />

            {plansMessage && (
              <Typography color="secondary" textAlign="center" lineHeight={1}>
                {parse(plansMessage)}
              </Typography>
            )}
          </Stack>

          <PlanCard selectedPlan={plans[selectedPlan]} />
        </Stack>
      </Container>
    </Box>
  );
};
