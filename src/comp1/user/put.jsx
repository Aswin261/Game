import React, { useState } from "react";
import axios from "axios";
function Put() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/userLog/${id}`, {
        First_name: fname,
        Last_name: lname,
      })
      .then((response) => {
        console.log(response.data);
        alert("updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form class="border rounded p-3  m-5 " onSubmit={handleSubmit}>
          <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Id: {""}
            <input
              type="text"
              name="id"
              placeholder="Id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              pattern="[0-9]+"
              required
              class="mb-1"
            />
          </label>
          <br />
          <label>
            Firstname:{" "}
            <input
              type="text"
              name="First_name"
              placeholder="FirstName"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              required
              class="mb-1"
            />
          </label>
          <br />
          <label>
            Lastname:{" "}
            <input
              type="text"
              name="Last_name"
              placeholder="LastName"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
              required
              class="mb-1"
            />
          </label>
          <br />

          <button
            class="bg-primary text-light border rounded p-1"
            type="submit"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Put;
