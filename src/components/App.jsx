import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // holds the list
  const [input, setInput] = useState(""); // holds current input value

  const handleAdd = () => {
    if (input.trim() === "") return; // avoid empty input
    setItems([...items, input]); // add new item
    setInput(""); // clear input field
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // key is important
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
