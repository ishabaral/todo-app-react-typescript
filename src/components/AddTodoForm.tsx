import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'

interface Props{
    // addTodo: AddTodo
    fetchAPI : FetchAPiType
}

const AddTodoForm= () => {
    const [text, setText] = useState("")

    const handleClick = (e: SyntheticEvent) => {
        const todos = {
            text: text,
            completed: false,
            userId: 1
        }
        e.preventDefault()
        axios.post("http://localhost:4000/todos", todos, {
            headers: {
                "Content-type": "application/json"
            }
        })
        setText('')
    }

    return (
        <div className= "add-todo">
            <form>
            <input 
                className= "new task name"
                aria-label= "new task name" 
                type="text" 
                value= {text}
                onChange = {(e)=> setText(e.target.value)}
                placeholder= "Enter your Todo"
            />
            <button className= "btn task" type="submit" onClick= {(e) => handleClick(e)}>
                +
            </button>
            </form>
        </div>
    )
}

export default AddTodoForm
