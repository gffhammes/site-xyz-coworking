import { useEffect, useState } from "react";

export function useFloatingCardTrigger(startId: string, endId: string) {
  const [show, setShow] = useState(false);

  const screenPercentage = 0.8;

  useEffect(() => {
    const startElem = document.getElementById(startId);
    const endElem = document.getElementById(endId);
    if (!startElem || !endElem) return;

    const handleScroll = () => {
      const startElementRect = startElem.getBoundingClientRect();
      const endElementRect = endElem.getBoundingClientRect();

      const passedStart =
        startElementRect.top <= window.innerHeight * screenPercentage;

      const notReachedEnd =
        endElementRect.top > window.innerHeight * screenPercentage;

      setShow(passedStart && notReachedEnd);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [startId, endId]);

  return { show };
}
