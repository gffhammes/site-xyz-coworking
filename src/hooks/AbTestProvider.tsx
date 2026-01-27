"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AbTestContext = createContext<boolean>(false);

export const AbTestProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";
    if (!isJoinville) return;

    try {
      const pathname = window.location.pathname || "";

      // If app started on /google (or /google/...), enable experiment and persist
      const startedWithGoogle = pathname.startsWith("/google");

      if (startedWithGoogle) {
        setActive(true);
        sessionStorage.setItem("ab_google_active", "1");
        return;
      }

      // Otherwise, restore from session if previously enabled
      const stored = sessionStorage.getItem("ab_google_active");
      if (stored === "1") setActive(true);
    } catch (e) {
      // ignore (window/sessionStorage not available)
    }
  }, []);

  return <AbTestContext.Provider value={active}>{children}</AbTestContext.Provider>;
};

export const useAbTestContext = () => useContext(AbTestContext);

export default AbTestProvider;
