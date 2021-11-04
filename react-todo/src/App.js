import React from "react";
import TodoList from "./Todo/TodoList.js";

function App() {
  const todos = [
    { id: 1, completed: false, tittle: "Купить хлеб" },
    { id: 2, completed: false, tittle: "Купить масло" },
    { id: 3, completed: false, tittle: "Купить молоко" },
  ];
  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
