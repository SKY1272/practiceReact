import "./styles.css";
// import React, { useState } from "react";
// import Lifting from "./components/Lifting";
import UseMemo from "./components/UseMemo";
export default function App() {
  // const [data, setData] = useState(0);
  // function PropsHandle() {
  //   setData(data + 1);
  // }
  return (
    <div className="App">
      <UseMemo />
      {/* <Lifting funct={PropsHandle} name={data} style={{ color: "red" }} /> */}
    </div>
  );
}
