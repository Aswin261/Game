import React, { useState } from "react";

function Conversation() {
  const [message1, setMessage1] = useState("");
  const [list, setList] = useState([]);
  const [message2, setMessage2] = useState("");

  const handleClick = (sender) => {
    const time = new Date().toLocaleTimeString();
    setList([
      ...list,
      {
        sender,
        message: sender === 1 ? message1 : message2,
        time,
      },
    ]);
    setMessage1("");
    setMessage2("");
  };

  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      {/* sender1 */}
      <div>
        <form>
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
            type="submit"
            class="btn btn-success p-0 mb-1 px-1 mx-1"
            onClick={() => handleClick(1)}
          >
            send
          </button>
        </form>
      </div>

      {/* sender2 */}
      <div>
        <form>
          <input
            type="text"
            name="message2"
            value={message2}
            placeholder="sender2"
            required
            onChange={(e) => {
              setMessage2(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => handleClick(2)}
            class="btn btn-danger p-0 mb-1 px-1 mx-1"
          >
            send
          </button>
        </form>
      </div>

      {/* Messages */}
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {list.map((item, index) => (
          <li
            style={{
              backgroundColor:
                item.sender === 1 ? "hsl(157, 79%, 79%)" : "white",
              width: "max-content",
              maxWidth: "60%",
              marginLeft: item.sender === 1 ? 5 : "auto",
              marginRight: item.sender === 2 ? 5 : "auto",
              textAlign: "left",
              borderRadius: "15px",
              wordBreak: "break-word",
              alignItems: "stretch",
              marginBottom: 5,
              padding: "5px",
            }}
            key={index}
          >
            {item.message}
            <p
              style={{
                marginBottom: 2,
                marginTop: "0px",
                lineHeight: 0,
              }}
            >
              <sub
                style={{
                  fontSize: "7px",
                  marginLeft: "180px",
                  textAlign: "right",
                }}
              >
                {" "}
                {item.time}
              </sub>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conversation;
