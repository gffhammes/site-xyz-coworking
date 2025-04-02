"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { scrollTo } from "@/utils/utils";
import { Button, ButtonProps } from "@mui/material";

export interface IScrollButtonProps extends ButtonProps {
  targetSection: string;
}

export const ScrollButton = ({
  targetSection,
  ...props
}: IScrollButtonProps) => {
  const { md } = useBreakpoint();

  return (
    <Button {...props} onClick={() => scrollTo(targetSection, md ? 50 : 0)} />
  );
};
