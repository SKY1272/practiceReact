import React, { useState, useMemo } from "react";
import axios from "axios";

function UseMemo() {
  const [user, setUser] = useState([]);
  const [filter, setFilter] = useState("");
  useMemo(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .then((err) => console.log(err));
  }, []);
  const filterUser = useMemo(() => {
    return user.filter((users) => users.name.includes(filter));
  }, [user, filter]);
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filterUser.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseMemo;
