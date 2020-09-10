import { useEffect } from "react";

export default function useClickOutside(ref, toogleFn) {
  useEffect(() => {
    const hadleClickToToggle = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.parentNode.id !== "cartBtn"
      ) {
        toogleFn();
        return;
      }
    };

    document.addEventListener("mousedown", hadleClickToToggle);

    return () => {
      document.removeEventListener("mousedown", hadleClickToToggle);
    };
  }, [ref]);
}
