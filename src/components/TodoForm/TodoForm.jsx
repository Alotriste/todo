import React, { useState } from "react";
import './TodoForm.css'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const hendleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={hendleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
