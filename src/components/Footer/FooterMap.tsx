import { siteData } from "@/data/sites";

export interface IFooterMapProps {}

export const FooterMap = (props: IFooterMapProps) => {
  return (
    <iframe
      src={siteData.homeData.mapSection.mapAddress}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      id="Mapa"
      title="Mapa"
    ></iframe>
  );
};
