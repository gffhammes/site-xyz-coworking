"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { PlanPeriodSelector } from "./PlanPeriodSelector";
import { PlanCard } from "./PlanCard";
import parse from "html-react-parser";
import { IServiceItem } from "@/data/types";

export interface IDesktopPlansSectionProps {
  service: IServiceItem;
}

export const DesktopPlansSection = ({ service }: IDesktopPlansSectionProps) => {
  const { plans, plansMessage } = service.detailsPage;

  const [selectedPlan, setSelectedPlan] = useState<number>(0);

  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: 450 }}>
        <Stack gap={4}>
          <Stack alignItems="flex-end" gap={2}>
            <Stack
              direction="row"
              justifyContent={
                service.detailsPage.plans.length === 1
                  ? "center"
                  : "space-between"
              }
              width="100%"
              gap={12}
            >
              <Typography variant="h2" textAlign="center">
                Planos
              </Typography>

              <PlanPeriodSelector
                plans={plans}
                selectedPlan={selectedPlan}
                onSelectedPlanChange={(newPeriod) => setSelectedPlan(newPeriod)}
              />
            </Stack>

            {plansMessage && (
              <Typography color="secondary" textAlign="center" lineHeight={1}>
                {parse(plansMessage.replaceAll("<br />", " "))}
              </Typography>
            )}
          </Stack>

          <PlanCard selectedPlan={plans[selectedPlan]} />
        </Stack>
      </Container>
    </Box>
  );
};
