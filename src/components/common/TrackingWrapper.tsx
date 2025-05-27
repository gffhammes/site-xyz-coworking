"use client";

import { getElementId } from "@/utils/utils";
import React, {
  useEffect,
  useState,
  ReactElement,
  isValidElement,
} from "react";

interface TrackingWrapperProps {
  section: string;
  action: string;
  children: ReactElement;
}

export function TrackingWrapper({
  section,
  action,
  children,
}: TrackingWrapperProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(getElementId({ section, action }));
  }, [section, action]);

  if (!isValidElement(children)) {
    console.warn(
      "TrackingWrapper requires a single valid React element as child"
    );
    return children;
  }

  const child = children as React.ReactElement<{ id?: string }>;

  // Só adiciona id se ele já estiver definido (no client após useEffect)
  if (!id) {
    return children; // renderiza o filho sem id no primeiro render (server e client)
  }

  return React.cloneElement(child, { id });
}
