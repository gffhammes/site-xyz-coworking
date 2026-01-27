"use client";

import { usePathname } from "next/navigation";
import { useAbTestContext } from "./AbTestProvider";

export const useAbTest = () => {
  const contextFlag = useAbTestContext();
  const pathname = usePathname() || "";
  const isJoinville = process.env.NEXT_PUBLIC_SITE_KEY === "joinville";

  console.log("[useAbTest] contextFlag:", contextFlag);
  console.log("[useAbTest] pathname:", pathname);
  console.log("[useAbTest] isJoinville:", isJoinville);

  // If context was set (app started with /google) use it. Otherwise fall back to current pathname.
  if (!isJoinville) {
    console.log("[useAbTest] returning false - not Joinville");
    return false;
  }

  if (contextFlag) {
    console.log("[useAbTest] returning true - contextFlag is true");
    return true;
  }

  const result = pathname.includes("/google");
  console.log("[useAbTest] returning", result, "- pathname check");
  return result;
};

export default useAbTest;
