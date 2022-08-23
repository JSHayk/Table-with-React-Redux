import { useState } from "react";

export const useDebaunce = () => {
  const [timer, setTimer] = useState("");

  const debaunce = (func, ms) => {
    clearTimeout(timer);
    const timeout = setTimeout(() => {
        func();
    }, ms);
    setTimer(timeout);
  }

  return debaunce
}