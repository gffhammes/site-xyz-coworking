"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export interface IGTMScriptProps {
  gtmId: string;
}

export const GTMScript = ({ gtmId }: IGTMScriptProps) => {
  return <GoogleTagManager gtmId={gtmId} />;
};
