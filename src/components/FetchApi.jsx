import React, { useState, useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th style={{ border: "1px solid green" }}>Id</th>
          <th style={{ border: "1px solid pink" }}>Name</th>
          <th style={{ border: "1px solid pink" }}>UserName</th>
          <th style={{ border: "1px solid pink" }}>email</th>

          <tr>
            <th style={{ border: "1px solid pink" }}>Address</th>
            <th>street</th>
          </tr>
        </tr>

        {data.map((item) => (
          <tr key={item.id}>
            <td style={{ border: "1px solid red" }}>{item.id}</td>
            <td style={{ border: "1px solid blue" }}>{item.name}</td>
            <td style={{ border: "1px solid blue" }}>{item.username}</td>
            <td style={{ border: "1px solid blue" }}>{item.email}</td>
            <td style={{ border: "1px solid blue" }}>{item.address.street}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default FetchApi;
