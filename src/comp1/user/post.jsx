import React, { useState } from "react";
import axios from "axios";

function Post() {
  const [form, setForm] = useState({
    id: "",
    First_name: "",
    Last_name: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/userLog", form);
      console.log(res.data);
      alert("Data added successfully");
    } catch (err) {
      console.error(err);
      if (err.response.status === 409) {
        alert(err.response.data.error);
      } else {
        alert("Data cannot be added");
      }
    }
    setForm({
      id: "",
      First_name: "",
      Last_name: "",
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form class="border rounded p-3  m-5" onSubmit={handleSubmit}>
          <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id:&nbsp;
          </label>
          <input
            type="text"
            name="id"
            placeholder="Id"
            value={form.id}
            onChange={handleChange}
            pattern="[0-9]+"
            required
            class="mb-1"
          />
          <br />
          Firstname:&nbsp;
          <input
            type="text"
            name="First_name"
            placeholder="First_Name"
            value={form.First_name}
            onChange={handleChange}
            required
            class="mb-1"
          />
          <br />
          <label>
            LastName:&nbsp;
            <input
              type="text"
              name="Last_name"
              placeholder="Last_Name"
              value={form.Last_name}
              onChange={handleChange}
              required
              class="mb-1"
            />
          </label>
          <br />
          <button
            class="bg-success text-light border rounded p-1"
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
