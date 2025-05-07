import { useEffect, useState } from "react";

export function useFloatingCardTrigger(startId: string, endId: string) {
  const [show, setShow] = useState(false);

  const startScreenPercentage = 0.8;
  const endScreenPercentage = 0.1;

  useEffect(() => {
    const startElem = document.getElementById(startId);
    const endElem = document.getElementById(endId);
    if (!startElem || !endElem) return;

    const handleScroll = () => {
      const startElementRect = startElem.getBoundingClientRect();
      const endElementRect = endElem.getBoundingClientRect();

      const passedStart =
        startElementRect.top <= window.innerHeight * startScreenPercentage;

      const notReachedEnd =
        endElementRect.top > window.innerHeight * endScreenPercentage;

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
