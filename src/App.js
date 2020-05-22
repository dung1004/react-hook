import React, { useState, useEffect } from "react";

import "./app.css";
// import BoxColor from './component/BoxColor';
import TodoList from "./component/TodoList";
import ReactHookForm from "./component/react_hook_form";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "nau an" },
    { id: 2, title: "di cau ca" },
    { id: 3, title: "di hoc" },
    { id: 4, title: "choi game" },
    { id: 5, title: "da banh" },
  ]);

  function handleRemoveItem(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      {/* <BoxColor /> */}
      {/* <TodoList todos={todos} handleRemoveItem={handleRemoveItem} /> */}

      <ReactHookForm />


    </div>
  );
}

export default App;
