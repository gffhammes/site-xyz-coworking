import { balnearioData } from "./balneario-camboriu/balneario-camboriu";
import { florianopolisData } from "./florianopolis/florianopolis";
import { joinvilleData } from "./joinville/joinville";

export const sites = {
  bc: balnearioData,
  joinville: joinvilleData,
  florianopolis: florianopolisData,
};

export type SiteKey = keyof typeof sites;

export const siteKey: SiteKey =

  (process.env.NEXT_PUBLIC_SITE_KEY as SiteKey) || "florianopolis";

export const siteData = sites[siteKey];
