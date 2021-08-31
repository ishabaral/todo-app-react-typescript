import  { SyntheticEvent, useState } from 'react'

interface AddTodoFormProps{
    handleAddTodos: (text:string) => void
}

const AddTodoForm= ({handleAddTodos}: AddTodoFormProps ) => {
    const [text, setText] = useState("")

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault()
        handleAddTodos(text)
        setText('')
    }

    return (
        <div className= "add-todo">
            <form className= "add-todo-form">
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
