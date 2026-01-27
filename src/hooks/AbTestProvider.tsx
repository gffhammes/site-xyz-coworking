"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AbTestContext = createContext<boolean>(false);

export const AbTestProvider = ({ children }: { children: React.ReactNode }) => {
  const [active] = useState<boolean>(() => {
    const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";
    if (!isJoinville) return false;

    try {
      if (typeof window === "undefined") return false;

      const pathname = window.location.pathname || "";
      const startedWithGoogle = pathname.startsWith("/google");

      if (startedWithGoogle) {
        sessionStorage.setItem("ab_google_active", "1");
        return true;
      }

      const stored = sessionStorage.getItem("ab_google_active");
      return stored === "1";
    } catch (e) {
      return false;
    }
  });

  return <AbTestContext.Provider value={active}>{children}</AbTestContext.Provider>;
};

export const useAbTestContext = () => useContext(AbTestContext);

export default AbTestProvider;
