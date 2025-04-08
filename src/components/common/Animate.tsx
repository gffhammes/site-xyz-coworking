"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export interface IAnimateProps extends HTMLMotionProps<"div"> {
  responsiveDelay?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const Animate = ({
  children,
  responsiveDelay,
  ...props
}: IAnimateProps) => {
  return (
    <motion.div {...props} transition={{ ...props.transition }}>
      {children}
    </motion.div>
  );
};
