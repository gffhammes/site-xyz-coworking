import { useEffect, useState } from "react";

export function useFloatingCardTrigger(startId: string, endId: string) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const startElem = document.getElementById(startId);
    const endElem = document.getElementById(endId);
    if (!startElem || !endElem) return;

    const handleScroll = () => {
      const startRect = startElem.getBoundingClientRect();
      const endRect = endElem.getBoundingClientRect();

      const passedStart = startRect.top <= window.innerHeight * 0.5;
      const notReachedEnd = endRect.top > 0;

      console.log({ passedStart, notReachedEnd });

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
