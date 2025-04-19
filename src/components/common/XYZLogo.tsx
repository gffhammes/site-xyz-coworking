import { Box } from "@mui/material";
import blackLogo from "../../../public/images/logo XYZ_preta 3.svg";
import whiteLogo from "../../../public/images/logo XYZ_branca.svg";
import Image from "next/image";

export interface IXYZLogoProps {
  height?: string;
  width?: string;
  color?: "black" | "white";
}

export const XYZLogo = ({ height, width, color = "black" }: IXYZLogoProps) => {
  const srcToUse = color === "black" ? blackLogo.src : whiteLogo.src;

  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        aspectRatio: blackLogo.width / blackLogo.height,
      }}
    >
      <Image src={srcToUse} alt="XYZ" fill />
    </Box>
  );
};
