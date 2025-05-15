import { IServiceItem } from "@/data/types";
import { MobilePlansSection } from "./MobilePlansSection";
import { ResponsiveComponent } from "@/components/common/ResponsiveComponent";
import { DesktopPlansSection } from "./DesktopPlansSection";
import { Box } from "@mui/material";

export interface IPlansSectionProps {
  service: IServiceItem;
}

export const PlansSection = ({ service }: IPlansSectionProps) => {
  return (
    <Box
      id="planos"
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        height: { xs: "90svh", md: "100svh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          height: { xs: "90svh", md: "100svh" },
          width: { xs: "90svh", md: "100svh" },
          borderRadius: "100rem",
          backgroundColor: "#f4f4f4",
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <ResponsiveComponent
          xs={<MobilePlansSection service={service} />}
          md={<DesktopPlansSection service={service} />}
        />
      </Box>
    </Box>
  );
};
