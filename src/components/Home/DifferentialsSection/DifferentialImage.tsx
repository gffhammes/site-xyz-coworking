import { Box } from "@mui/material";
import Image from "next/image";
import { Animate } from "../../common/Animate";
import {
  differentialItems,
  mdImageSize,
  xsImageSize,
} from "./DifferentialSection";

export interface IDifferentialImageProps {
  selectedIndex: number;
}

export const DifferentialImage = ({
  selectedIndex,
}: IDifferentialImageProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        pointerEvents: "none",
      }}
    >
      <Animate
        key={selectedIndex}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Box
          sx={{
            height: { xs: xsImageSize, md: mdImageSize },
            width: { xs: xsImageSize, md: mdImageSize },
            borderRadius: { xs: xsImageSize, md: mdImageSize },
            transform: `translate(40%, 10%)`,
            overflow: "hidden",
          }}
        >
          <Image
            src={differentialItems[selectedIndex].image}
            alt="Imagem"
            fill
            priority
            objectFit="cover"
            sizes="320px"
          />
        </Box>
      </Animate>
    </Box>
  );
};
