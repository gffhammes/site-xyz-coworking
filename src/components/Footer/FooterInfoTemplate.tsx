import { Stack, SxProps, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface IFooterInfoTemplateProps extends PropsWithChildren {
  title: string;
}

export const FooterInfoTemplate = ({
  title,
  children,
}: IFooterInfoTemplateProps) => {
  return (
    <Stack>
      <Typography sx={titleSx}>{title}</Typography>

      {children}
    </Stack>
  );
};

const titleSx: SxProps = {
  fontWeight: 700,
  fontSize: 20,
  whiteSpace: "nowrap",
};
