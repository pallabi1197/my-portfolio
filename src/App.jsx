import React, { useState } from "react";
import Formlist from "./Formlist";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new Title1",
      description: "This is brand new Description1",
    },
    {
      id: 2,
      title: "This is brand new Title2",
      description: "This is brand new Description2",
    },
    {
      id: 3,
      title: "This is brand new Title3",
      description: "This is brand new  Description3",
    },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };

  const [id, setId] = useState("");
  console.log(id);

  return (
    <div>
      <Formlist todos={todos} setTodos={setTodos}  id={id} setId={setId}/>
      <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
    </div>
  );
  
};

export default App;
