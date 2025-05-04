import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import parse from "html-react-parser";

export interface IBenefitCardProps {
  item: {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | null;
    text: string;
  };
}

export const BenefitCard = ({ item }: IBenefitCardProps) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      gap={2}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "secondary.main",
        px: 2,
        py: 2,
        fontSize: { xs: 28, md: 38 },
        transition: ".3s ease all",
        "&:hover": {
          backgroundColor: "secondary.light",
        },
      }}
    >
      {item.icon && <item.icon color="secondary" fontSize="inherit" />}

      <Typography maxWidth="27ch">{parse(item.text)}</Typography>
    </Stack>
  );
};
