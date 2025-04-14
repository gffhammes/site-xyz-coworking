import { LoadingImage } from "../common/LoadingImage";
import image from "../../../public/images/Group 32.png";
import { Box } from "@mui/material";
import Image from "next/image";

export interface IHeroSectionImageProps {
  height?: string;
  width?: string;
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export const HeroSectionImage = ({
  height,
  width,
  margin = {
    right: -5,
    top: -5,
  },
}: IHeroSectionImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        aspectRatio: image.width / image.height,
        justifySelf: "flex-end",
        mr: margin.right,
        mt: margin.top,
        pointerEvents: "none",
      }}
    >
      <Image src={image.src} alt="XYZ" fill style={{ left: 0 }} />
    </Box>
  );
};
