import React, { useState, useEffect } from "react";

function Update() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=5")
      .then((response) => response.json())
      .then((data) => setCount(data));
  }, []);

  return (
    <div class="">
      <ul
        style={{
          padding: "2px",
          alignItems: "center",
          border: "2px dashed black",
        }}
        class="px-5 mx-5"
      >
        {count.map((item) => (
          <li style={{ listStyleType: "none" }}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Update;
