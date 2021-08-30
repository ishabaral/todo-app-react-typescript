import axios from 'axios';
import React, { FC, SyntheticEvent } from 'react'

interface Props{
    todo: Todo
    toggleTodo: ToggleTodo
}

const TodoListItem = ({todo, toggleTodo}: Props) => {

    const handleToggle = async (todo: Todo) => {
        toggleTodo(todo)
        console.log(todo)
        await axios.patch(`http://localhost:4000/todos/${todo.id}`, todo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    //   dispatch(fetchEvent());
    }

    const handleDelete = async (id:number) => {
        await axios.delete(`http://localhost:4000/todos/${id}`);
    //   dispatch(fetchEvent());
    }

    return (
        <div className= "task">
            <label  style= {{textDecoration: todo.completed? "line-through" : undefined}}>
                <input type="checkbox" checked= {todo.completed} onChange= {()=> handleToggle(todo)} />
                <span  className="custom-checkbox" ></span>
                <div>{todo.text}</div>
                <button className= "btn" onClick = {e => handleDelete(todo.id)}><i className="fa fa-trash"/></button>
            </label>
            
            
        </div>
    )
}

export default TodoListItem

