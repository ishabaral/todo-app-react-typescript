import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './todoStyles.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const Pages = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])

  useEffect(()=> {
  axios.get("http://localhost:4000/todos")
  .then(res => {
    setTodos(res.data)
  })
  .catch(e => {
    console.log(e)
  })
}, [])

  const toggleTodo = (selectedTodo: Todo)=> {
    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        todo.completed= !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
      <div className= "pages">
          <div className= "todo-list">
      {/* <h1 className="title">Stuffs I need to do</h1> */}
      <div className="todo-header">
        <h2 className="list-title">My Todos</h2>
        {/* <p className="list-count">3 task remaining</p> */}
      </div>
      <div className="todo-body">
        <AddTodoForm />
        <TodoList todos= {todos} toggleTodo= {toggleTodo} />
      </div>
    </div>
      </div>
    
  );
}

export default Pages;

