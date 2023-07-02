import React, { useState, useEffect } from "react";
import axios from "axios";
function Get() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/userLog")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div class="d-flex">
      <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-left table-responsive">
        <tbody>
          <tr>
            <th style={{ border: "solid" }}>
              <b>Id</b>
            </th>
            <th style={{ border: "solid" }}>
              <b>First Name</b>
            </th>
            <th style={{ border: "solid" }}>
              <b>Last Name</b>
              <br />
            </th>
          </tr>
          {item.map((data) => (
            <tr class="center">
              <td style={{ border: "solid" }}>{data.id}</td>
              <td style={{ border: "solid" }}>{data.First_name}</td>
              <td style={{ border: "solid" }}>{data.Last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Get;
