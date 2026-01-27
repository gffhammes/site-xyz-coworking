"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AbTestContext = createContext<boolean>(false);

export const AbTestProvider = ({ children }: { children: React.ReactNode }) => {
  const [active] = useState<boolean>(() => {
    const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";
    console.log("[AB Test Debug] NEXT_PUBLIC_SITE_KEY:", process.env.NEXT_PUBLIC_SITE_KEY);
    console.log("[AB Test Debug] isJoinville:", isJoinville);
    
    if (!isJoinville) return false;

    try {
      if (typeof window === "undefined") {
        console.log("[AB Test Debug] window is undefined (SSR)");
        return false;
      }

      const pathname = window.location.pathname || "";
      const startedWithGoogle = pathname.startsWith("/google");
      
      console.log("[AB Test Debug] pathname:", pathname);
      console.log("[AB Test Debug] startedWithGoogle:", startedWithGoogle);

      if (startedWithGoogle) {
        sessionStorage.setItem("ab_google_active", "1");
        console.log("[AB Test Debug] Set sessionStorage to 1");
        return true;
      }

      const stored = sessionStorage.getItem("ab_google_active");
      console.log("[AB Test Debug] sessionStorage value:", stored);
      return stored === "1";
    } catch (e) {
      console.log("[AB Test Debug] Error:", e);
      return false;
    }
  });

  return <AbTestContext.Provider value={active}>{children}</AbTestContext.Provider>;
};

export const useAbTestContext = () => useContext(AbTestContext);

export default AbTestProvider;
