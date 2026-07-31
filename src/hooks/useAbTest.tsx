"use client";

import { useAbTestContext } from "./AbTestProvider";
import { useState, useEffect } from "react";

export const useAbTest = () => {
  const contextFlag = useAbTestContext();
  const [isGoogleUrl, setIsGoogleUrl] = useState(false);
  const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";

  // Verifica a URL original do browser (antes do rewrite) no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalPathname = window.location.pathname;
      const hasGoogle =
        originalPathname.startsWith("/google") ||
        originalPathname.endsWith("/google");
      setIsGoogleUrl(hasGoogle);
    }
  }, []);

  if (!isJoinville) return false;
  if (contextFlag) return true;

  return isGoogleUrl;
};

export default useAbTest;
