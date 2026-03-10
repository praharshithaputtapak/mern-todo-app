import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>MERN ToDo App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;