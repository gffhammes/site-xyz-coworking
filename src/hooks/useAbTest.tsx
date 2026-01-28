"use client";

import { usePathname } from "next/navigation";
import { useAbTestContext } from "./AbTestProvider";

export const useAbTest = () => {
  const contextFlag = useAbTestContext();
  const pathname = usePathname() || "";
  const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";

  if (!isJoinville) return false;
  if (contextFlag) return true;

  // Detecta /google no início ou final: /google/servicos ou /servicos/google
  return pathname.startsWith("/google") || pathname.endsWith("/google");
};

export default useAbTest;
