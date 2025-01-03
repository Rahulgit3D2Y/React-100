import { useState } from "react";
import "./App.css";
import { data as initialData } from "./data";

function App() {
  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState("asc");

  const sorting = (col) => {
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      } else {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      }
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("first_name")}>First Name</th>
            <th onClick={() => sorting("last_name")}>Last Name</th>
            <th onClick={() => sorting("email")}>Email</th>
            <th onClick={() => sorting("phone")}>Phone</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
