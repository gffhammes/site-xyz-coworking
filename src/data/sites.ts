import { balnearioData } from "./balneario-camboriu/balneario-camboriu";
import { joinvilleData } from "./joinville/joinville";

export const sites = {
  bc: balnearioData,
  joinville: joinvilleData,
  //   floripa: floripaData,
};

export type SiteKey = keyof typeof sites;

export const siteKey: SiteKey =
  (process.env.NEXT_PUBLIC_SITE_KEY as SiteKey) || "joinville";

export const siteData = sites[siteKey];
