import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(getSize());

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  useEffect(() => {
    if (!isClient) return false;
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
