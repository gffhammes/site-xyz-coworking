"use client";

import { SEARCH_PARAMS } from "@/data/global";
import {
  normalizeUtmSource,
  WHATSAPP_UTM_SOURCE_STORAGE_KEY,
} from "@/utils/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const UtmSourceUrlSync = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const queryUtmSource = normalizeUtmSource(
      searchParams.get(SEARCH_PARAMS.utmSource),
    );

    if (queryUtmSource) {
      try {
        sessionStorage.setItem(WHATSAPP_UTM_SOURCE_STORAGE_KEY, queryUtmSource);
      } catch {
        // Ignora falhas de storage para não interromper a navegação.
      }

      return;
    }

    let storedUtmSource: string | undefined;

    try {
      storedUtmSource = normalizeUtmSource(
        sessionStorage.getItem(WHATSAPP_UTM_SOURCE_STORAGE_KEY),
      );
    } catch {
      storedUtmSource = undefined;
    }

    if (!storedUtmSource) {
      return;
    }

    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.set(SEARCH_PARAMS.utmSource, storedUtmSource);

    router.replace(`${pathname}?${nextSearchParams.toString()}`, {
      scroll: false,
    });
  }, [pathname, router, searchParams]);

  return null;
};
