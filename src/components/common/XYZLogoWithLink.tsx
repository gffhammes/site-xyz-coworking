import Link from "next/link";
import { IXYZLogoProps, XYZLogo } from "./XYZLogo";

export interface IXYZLogoWithLinkProps extends IXYZLogoProps {
  href?: string;
}

export const XYZLogoWithLink = ({
  href = "/",
  ...logoProps
}: IXYZLogoWithLinkProps) => {
  return (
    <Link href={href}>
      <XYZLogo {...logoProps} />
    </Link>
  );
};
