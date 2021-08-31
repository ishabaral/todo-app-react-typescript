import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './todoStyles.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const Pages = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const registeredUser =  JSON.parse(localStorage.getItem('user')!);
  console.log(registeredUser.id)

  useEffect(()=> {
   axios.get(`http://localhost:4000/users/${registeredUser.id}/todos`)
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

  const handleAddTodos = (text:string)=>{
    const addedTodos = {
      text: text,
      completed: false,
      userId: registeredUser.id
    }
    axios.post(`http://localhost:4000/users/${registeredUser.id}/todos`, addedTodos, {
      headers: {
        "Content-type": "application/json"
  }
  })
    .then(res => setTodos([...todos, res.data]))
    .catch(e => console.log(e))
  }

  const handleDeleteTodos = async (id:number)=> {
    await axios.delete(`http://localhost:4000/todos/${id}`)
    .then(() => {
      const filteredTodos= todos.filter(todo => todo.id !== id);
      setTodos(filteredTodos)
    })

    .catch(e => console.log(e))
  }

  return (
      <div className= "pages">
          <button className= "logout-btn">Logout</button>
         
          <div className= "todo-list">
      {/* <h1 className="title">Stuffs I need to do</h1> */}
      <div className="todo-header">
        <h2 className="list-title">My Todos</h2>
        {/* <p className="list-count">3 task remaining</p> */}
      </div>
      <div className="todo-body">
        <AddTodoForm handleAddTodos = {handleAddTodos}/>
        <TodoList todos= {todos} toggleTodo= {toggleTodo} handleDeleteTodos= {handleDeleteTodos} />
      </div>
    </div>
      </div>
    
  );
}

export default Pages;

