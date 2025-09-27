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
      viewport={{ once: true, margin: "0px" }}
    >
      <Box
        sx={{
          backgroundColor: "#363636",
          borderRadius: 8,
          p: { xs: 3, sm: 4 },      // padding geral responsivo
          pb: { xs: 6, sm: 4 },     // padding extra embaixo no mobile
          overflow: "visible",      // garante que o botão não seja cortado
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
              sx={{ mt: 0 }} // não empurra conteúdo acima
            >
              CONTRATAR AGORA
            </Button>
          </TrackingWrapper>
        </Stack>
      </Box>
    </Animate>
  );
};
