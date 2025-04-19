import { Box } from "@mui/material";
import Image from "next/image";
import { differentialItems } from "./DifferentialSection";
import { Animate } from "../common/Animate";

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
        height: "15rem",
        overflow: "hidden",
        width: "100%",
        top: "100%",
        transform: "translateY(-75%)",
        zIndex: 90,
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
            height: "15rem",
            width: "15rem",
            borderRadius: "15rem",
            overflow: "hidden",
            left: "100%",
            position: "absolute",
            transform: "translateX(-75%)",
          }}
        >
          <Image
            src={differentialItems[selectedIndex].image}
            alt="Imagem"
            fill
            objectFit="cover"
          />
        </Box>
      </Animate>
    </Box>
  );
};
