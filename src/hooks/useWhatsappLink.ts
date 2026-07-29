"use client";

import { SEARCH_PARAMS } from "@/data/global";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  getWhatsappLink,
  normalizeUtmSource,
  WHATSAPP_UTM_SOURCE_STORAGE_KEY,
} from "@/utils/utils";

export const useWhatsappLink = (messageSuffix?: string) => {
  const searchParams = useSearchParams();
  const [storedUtmSource, setStoredUtmSource] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    try {
      setStoredUtmSource(
        normalizeUtmSource(
          sessionStorage.getItem(WHATSAPP_UTM_SOURCE_STORAGE_KEY),
        ),
      );
    } catch {
      setStoredUtmSource(undefined);
    }
  }, []);

  const currentUtmSource = useMemo(() => {
    const queryUtmSource = normalizeUtmSource(
      searchParams.get(SEARCH_PARAMS.utmSource),
    );

    return queryUtmSource ?? storedUtmSource;
  }, [searchParams, storedUtmSource]);

  useEffect(() => {
    if (!currentUtmSource) {
      return;
    }

    try {
      sessionStorage.setItem(WHATSAPP_UTM_SOURCE_STORAGE_KEY, currentUtmSource);
    } catch {
      // Ignora falhas de storage para não bloquear a renderização.
    }
  }, [currentUtmSource]);

  const whatsappLink = useMemo(
    () => getWhatsappLink(messageSuffix, currentUtmSource),
    [messageSuffix, currentUtmSource],
  );

  return whatsappLink;
};
