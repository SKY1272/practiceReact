import React, { useState, useEffect } from "react";

function WindowClickCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timers = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    const clickListener = () => {
      setCount(count + 1);
    };
    window.addEventListener("click", clickListener);
    return () => {
      clearInterval(timers);
      window.removeEventListener("click", clickListener);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default WindowClickCount;
