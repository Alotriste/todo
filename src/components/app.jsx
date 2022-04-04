import React, { useState } from "react";
import "./fonts.css";
import "./app.css";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          <div className="title">Todo list</div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
