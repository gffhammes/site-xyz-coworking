import { NavigationList } from "./NavigationList";
import { ResponsiveComponent } from "./ResponsiveComponent";

export interface IMenuProps {}

export const Menu = (props: IMenuProps) => {
  return <ResponsiveComponent xs={<></>} sm={<NavigationList />} />;
};
