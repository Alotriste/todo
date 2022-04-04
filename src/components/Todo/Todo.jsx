import React from "react";
import "./Todo.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="text">
        
        {todo.text}</div>
      
      <div className="Btn">
        <button className="completeBtn" onClick={() => completeTodo(index)}>Complete</button>
        <button className="removeBtn" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

export default Todo;
