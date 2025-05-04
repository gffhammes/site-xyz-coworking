import { ResponsiveComponent } from "../common/ResponsiveComponent";
import { DesktopReviewsSection } from "./DesktopReviewsSection";
import { MobileReviewsSection } from "./MobileReviewsSection";

export interface IReviewsSectionProps {}

export const ReviewsSection = (props: IReviewsSectionProps) => {
  return (
    <ResponsiveComponent
      xs={<MobileReviewsSection />}
      md={<DesktopReviewsSection />}
    />
  );
};

export const reviewsSectionData = {
  h2: "Veja o que falam sobre nós",
  description: "",
};
