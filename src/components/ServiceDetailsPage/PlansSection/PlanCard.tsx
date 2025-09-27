import { Box, Button, Stack, Typography } from "@mui/material";
import { PlanCardPrice } from "./PlanCardPrice";
import { PlanCardIncluded } from "./PlanCardIncluded";
import { IServicePlan } from "@/data/types";
import { getWhatsappLink } from "@/utils/utils";
import { Animate } from "@/components/common/Animate";
import { TrackingWrapper } from "@/components/common/TrackingWrapper";

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
      viewport={{ once: true, margin: "50px 0px 50px 0px" }} // margem para não cortar no mobile
    >
      <Box
        sx={{
          backgroundColor: "#363636",
          borderRadius: 8,
          p: { xs: 3, sm: 4 },      // padding geral
          pb: { xs: 10, sm: 4 },    // padding inferior maior no mobile
          overflow: "visible",      // garante que o botão não seja cortado
          minHeight: "auto",        // altura flexível
        }}
      >
        <Stack gap={4}>
          <Stack gap={4}>
            <PlanCardPrice selectedPlan={selectedPlan} />
            <PlanCardIncluded selectedPlan={selectedPlan} />
          </Stack>

          <TrackingWrapper
            section="card-preco"
            action={`contato-${selectedPlan.label}`}
          >
            <Button
              LinkComponent="a"
              href={buttonHref}
              target="_blank"
              variant="contained"
              sx={{ mb: { xs: 3, sm: 0 } }} // margem inferior extra no mobile
            >
              CONTRATAR AGORA
            </Button>
          </TrackingWrapper>
        </Stack>
      </Box>
    </Animate>
  );
};
