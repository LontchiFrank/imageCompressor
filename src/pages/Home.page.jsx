import React, { useState, useEffect } from "react";
import TodoCard from "../components/TodoCard.component";

const data = [{ title: "" }];

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // This will run when the component has mounted

    // Fetch todos from the external url (api)
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((res) => res.json())
      .then((responseJson) => setTodos(responseJson));
  }, []); // Component did mount

  useEffect(() => {
    if (todos.length) {
      alert("Please help out");
    }
  }, [todos]); // Listen to todos, in case anything changes

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id == id) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container-fluid p-5">
      <h1 className="text-center">Welcome to my todo list</h1>
      {todos.map((todo, index) => (
        <TodoCard
          onDelete={deleteTodo}
          onDelete={(id) => deleteTodo(id)}
          key={index}
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default Home;
