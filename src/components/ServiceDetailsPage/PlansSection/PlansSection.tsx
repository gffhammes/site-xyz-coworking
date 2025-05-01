import { IServiceServiceItem } from "@/data/services";
import { Box, Container, Typography } from "@mui/material";

export interface IPlansSectionProps {
  service: IServiceServiceItem;
}

export const PlansSection = (props: IPlansSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 10 }} id="planos">
      <Container>
        <Typography variant="h2">Planos</Typography>
      </Container>
    </Box>
  );
};
