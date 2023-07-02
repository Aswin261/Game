import React, { useState } from "react";

function Conversation() {
  const [message1, setMessage1] = useState("");
  const [list1, setList1] = useState([]);
  const [message2, setMessage2] = useState("");
  const [list2, setList2] = useState([]);

  const handleClick1 = () => {
    setList1([...list1, message1]);
    setMessage1("");
  };

  const handleClick2 = () => {
    setList2([...list2, message2]);
    setMessage2("");
  };
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      <div>
        <input
          type="text"
          name="message1"
          value={message1}
          placeholder="sender1"
          required
          onChange={(e) => {
            setMessage1(e.target.value);
          }}
        />
        <button
          onClick={handleClick1}
          class="btn btn-success p-0 mb-1 px-1 mx-1"
        >
          send
        </button>
      </div>
      {/* sender2 */}
      <div>
        <input
          type="text"
          name="message1"
          value={message2}
          placeholder="sender2"
          required
          onChange={(e) => {
            setMessage2(e.target.value);
          }}
        />
        <button
          onClick={handleClick2}
          class="btn btn-danger p-0 mb-1 px-1 mx-1"
        >
          send
        </button>
      </div>

      {/* sender1message */}
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {list1.map((item, index) => (
          <li
            style={{
              backgroundColor: "hsl(157, 79%, 79%)",
              width: "max-content",
              maxWidth: "60%",
              marginLeft: 5,
              textAlign: "left",
              borderRadius: "15px",
              wordWrap: "break-word",
              wordBreak: "break-all",
              display: "flex",
              alignItems: "flex-start",
            }}
            class="my-1 px-2"
            key={index}
          >
            {item}
          </li>
        ))}
        {/* </ul>

 
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}> */}
        {list2.map((item, index) => (
          <li
            style={{
              backgroundColor: "white",
              width: "max-content",
              maxWidth: "60%",
              textAlign: "left",
              borderRadius: "15px",
              wordWrap: "break-word",
              wordBreak: "break-all",
              display: "flex",
              alignItems: "flex-end",
              marginLeft: "147px",
              padding: "1px",
            }}
            class="my-1 px-2"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Conversation;
