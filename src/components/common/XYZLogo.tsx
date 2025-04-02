import { Box } from "@mui/material";
import blackLogo from "../../../public/images/logo XYZ_preta 3.svg";
import Image from "next/image";

export interface IXYZLogoProps {
  height?: string;
  width?: string;
}

export const XYZLogo = ({ height, width }: IXYZLogoProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        aspectRatio: blackLogo.width / blackLogo.height,
      }}
    >
      <Image src={blackLogo.src} alt="XYZ" fill />
    </Box>
  );
};
