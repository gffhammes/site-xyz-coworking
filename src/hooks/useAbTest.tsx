"use client";

import { usePathname } from "next/navigation";
import { useAbTestContext } from "./AbTestProvider";

export const useAbTest = () => {
  const contextFlag = useAbTestContext();
  const pathname = usePathname() || "";
  const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";

  // If context was set (app started with /google) use it. Otherwise fall back to current pathname.
  if (!isJoinville) return false;

  if (contextFlag) return true;

  return pathname.includes("/google");
};

export default useAbTest;
