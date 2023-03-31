import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchApiUsingAxios() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", gap: "1rem" }}>
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default FetchApiUsingAxios;
