import React from "react";
function Dropdown() {
  function checkPrice(e) {
    document.getElementById("txtprice").value = e;
    e.target.selectedIndex = -1;
  }

  return (
    <div>
      <select
        onChange={(e) => {
          checkPrice(e.target.value);
        }}
      >
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="red">red</option>
      </select>
      <input
        class="m-2"
        type="text"
        id="txtprice"
        onChange={() => {
          checkPrice();
        }}
      />
    </div>
  );
}

export default Dropdown;
