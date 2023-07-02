import React, { useState } from "react";

const Drop = () => {
  const [selected, setSelected] = useState("");

  const changeSelect = (event) => {
    setSelected(event.target.value);
  };

  const algorithm = [
    "Searching Algorithm",
    "Sorting Algorithm",
    "Graph Algorithm",
  ];
  const language = ["C++", "Java", "Python", "C#"];
  const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

  let type = null;
  let options = null;
  if (selected === "Algorithm") {
    type = algorithm;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }

  if (type) {
    options = type.map((e) => <option key={e}>{e}</option>);
  }
  return (
    <div>
      <form>
        <div>
          <select onChange={changeSelect}>
            <option>Choose...</option>
            <option>Algorithm</option>
            <option>Language</option>
            <option>Data Structure</option>
          </select>
        </div>
        <div>
          <select>{options}</select>
        </div>
      </form>
    </div>
  );
};

export default Drop;
