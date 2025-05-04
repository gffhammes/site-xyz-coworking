import { IServicePlan, IServiceItem } from "@/data/services";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export interface IPlanPeriodSelectorProps {
  plans: IServicePlan[];
  selectedPlan: number;
  onSelectedPlanChange: (newPlan: number) => void;
}

export const PlanPeriodSelector = ({
  plans,
  selectedPlan,
  onSelectedPlanChange,
}: IPlanPeriodSelectorProps) => {
  const anualPeriodRef = useRef<HTMLDivElement | null>(null);
  const monthlyPeriodRef = useRef<HTMLDivElement | null>(null);
  const selectedBoxRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!anualPeriodRef.current) return;
    if (!monthlyPeriodRef.current) return;
    if (!selectedBoxRef.current) return;
    if (!containerRef.current) return;

    const anualRects = anualPeriodRef.current.getClientRects()[0];
    const monthlyRects = monthlyPeriodRef.current.getClientRects()[0];
    const containerRects = containerRef.current.getClientRects()[0];

    let selectedBoxLeft = 0;
    let selectedBoxWidth = 0;

    switch (selectedPlan) {
      case 0:
        anualPeriodRef.current.setAttribute("style", "color:white;");
        monthlyPeriodRef.current.setAttribute("style", "color:#474747;");

        selectedBoxWidth = anualRects.width;
        selectedBoxLeft = anualRects.x - containerRects.x;
        break;

      case 1:
        anualPeriodRef.current.setAttribute("style", "color:#474747;");
        monthlyPeriodRef.current.setAttribute("style", "color:white;");

        selectedBoxWidth = monthlyRects.width;
        selectedBoxLeft = monthlyRects.x - containerRects.x;
        break;

      default:
        return;
    }

    selectedBoxRef.current.setAttribute(
      "style",
      `width: ${selectedBoxWidth}px; left:${selectedBoxLeft}px; height: ${containerRects.height}px;`
    );
  }, [selectedPlan]);

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#CDCDCD",
        position: "relative",
        borderRadius: "10rem",
      }}
      width="fit-content"
      ref={containerRef}
    >
      <Box
        ref={anualPeriodRef}
        onClick={() => onSelectedPlanChange(0)}
        sx={{
          transition: ".3s ease all",
          position: "relative",
          zIndex: 1,
          px: 2,
          py: 1,
          cursor: "pointer",
        }}
      >
        <Typography>ANUAL</Typography>
      </Box>

      <Box
        ref={monthlyPeriodRef}
        onClick={() => onSelectedPlanChange(1)}
        sx={{
          transition: ".3s ease all",
          position: "relative",
          zIndex: 1,
          px: 2,
          py: 1,
          cursor: "pointer",
        }}
      >
        <Typography>MENSAL</Typography>
      </Box>

      <Box
        ref={selectedBoxRef}
        sx={{
          transition: ".3s ease all",
          backgroundColor: "#474747",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "10rem",
        }}
      ></Box>
    </Stack>
  );
};
