"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AbTestContext = createContext<boolean>(false);

export const AbTestProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Sempre iniciar com false para evitar hydration mismatch (servidor não tem sessionStorage)
  const [active, setActive] = useState<boolean>(false);

  // Verifica sessionStorage apenas no cliente, após o mount
  useEffect(() => {
    const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";
    if (!isJoinville) return;

    try {
      // Detecta /google no início ou final: /google/servicos ou /servicos/google
      const hasGoogle = pathname.startsWith("/google") || pathname.endsWith("/google");

      if (hasGoogle) {
        sessionStorage.setItem("ab_google_active", "1");
        setActive(true);
      } else {
        // Mantém o estado do sessionStorage quando navega para outras páginas
        const stored = sessionStorage.getItem("ab_google_active");
        setActive(stored === "1");
      }
    } catch (e) {
      setActive(false);
    }
  }, [pathname]);

  return <AbTestContext.Provider value={active}>{children}</AbTestContext.Provider>;
};

export const useAbTestContext = () => useContext(AbTestContext);

export default AbTestProvider;
