import { useState, useEffect } from "react";

const useInfiteScroll = (callback) => {
  const [isAtBottom, setisAtBottom] = useState(false);
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("time to fetch");
    setisAtBottom(true);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!isAtBottom) return;
    console.log("isatbottom");
    callback();
  }, [isAtBottom]);
  return setisAtBottom;
};

export default useInfiteScroll;
