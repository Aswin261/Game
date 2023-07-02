import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/userLog/${id}`)
      .then((response) => {
        console.log(response.data);
        alert("Deleted");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Invalid item");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        Placeholder="Enter Id"
        onChange={(e) => setId(e.target.value)}
      />
      <button
        class="bg-danger text-light border rounded p-1 mx-1"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
