import React from 'react';
import axios from 'axios';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/fetchTodos';
import { toast } from 'react-toastify';


interface Props{
    todo: Todo
}

const TodoListItem = ({todo}: Props) => {
    const todos = useSelector((state:RootStateOrAny) => state.todosReducer.todos)
    const dispatch = useDispatch()

    const handleTogglee = async(selectedTodo:Todo) => {
        const newTodos = todos.map((todo:Todo) => {
            if (todo.id === selectedTodo.id) {
              todo.completed= !todo.completed;
            }
            return todo;
          });
          await axios.patch(`http://localhost:4000/todos/${todo.id}`, todo, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          dispatch(fetchTodos());
          
    }

    const handleDelete = async (id:number) => {
    await axios.delete(`http://localhost:4000/todos/${id}`)
    toast.error("Deleted successfully!!!", {
      icon: () =>  <i style= {{color: "white"}} className="fa fa-trash"/>
    })
      dispatch(fetchTodos());
    }

    return (
        <div className= "task">
            <label  style= {{textDecoration: todo.completed? "line-through" : undefined}}>
                <div>
                    <input type="checkbox" checked= {todo.completed} onChange= {()=> handleTogglee(todo)} />
                    {/* <span  className="custom-checkbox" ></span> */}
                    {todo.text} 
                    <div className= "date">
                    {todo.date}
                    </div>

                    </div>
                <button className= "btn trash" onClick = {e => handleDelete(todo.id)}><i className="fa fa-trash"/></button>
            </label>
            
            
        </div>
    )
}

export default TodoListItem

