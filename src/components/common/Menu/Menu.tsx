import { NavigationList } from "../NavigationList";
import { ResponsiveComponent } from "../ResponsiveComponent";
import { MobileMenu } from "./MobileMenu";

export interface IMenuProps {}

export const Menu = (props: IMenuProps) => {
  return <ResponsiveComponent xs={<MobileMenu />} sm={<NavigationList />} />;
};
