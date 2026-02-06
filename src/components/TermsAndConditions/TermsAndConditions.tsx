import { Box } from "@mui/material";
import parse from "html-react-parser";

export interface ITermsAndConditionsProps {
  content: string;
}

export const TermsAndConditions = ({ content }: ITermsAndConditionsProps) => {
  return <Box>{parse(content)}</Box>;
};
