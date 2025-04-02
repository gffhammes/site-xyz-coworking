import { LoadingImage } from "../common/LoadingImage";
import image from "../../../public/images/Group 32.png";
import { Box } from "@mui/material";
import Image from "next/image";

export interface IHeroSectionImageProps {
  height?: string;
  width?: string;
}

export const HeroSectionImage = ({ height, width }: IHeroSectionImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        aspectRatio: image.width / image.height,
      }}
    >
      <Image src={image.src} alt="XYZ" fill />
    </Box>
  );
};
