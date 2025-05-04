import { ReactElement } from "react";
import { ResponsiveComponent } from "../ResponsiveComponent";
import { DesktopHeroSectionTemplate } from "./DesktopHeroSectionTemplate";
import { MobileHeroSectionTemplate } from "./MobileHeroSectionTemplate";

export interface IHeroSectionTemplateProps {
  mobileContent: ReactElement;
  desktopContent: ReactElement;
  bgImage: string;
}

export const HeroSectionTemplate = ({
  mobileContent,
  desktopContent,
  bgImage,
}: IHeroSectionTemplateProps) => {
  return (
    <ResponsiveComponent
      xs={
        <MobileHeroSectionTemplate content={mobileContent} bgImage={bgImage} />
      }
      md={
        <DesktopHeroSectionTemplate
          content={desktopContent}
          bgImage={bgImage}
        />
      }
    />
  );
};
