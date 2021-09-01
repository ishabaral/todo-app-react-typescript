import axios from 'axios';
import  { SyntheticEvent, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchTodos } from '../redux/actions/fetchTodos';


const AddTodoForm= () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [text, setText] = useState("")
    
    const registeredUser =  JSON.parse(localStorage.getItem('user')!);

    const handleClick = async (e: SyntheticEvent) => {
        e.preventDefault()
        const addedTodos = {
            text: text,
            completed: false,
            userId: registeredUser.id
          }
          await axios.post(`http://localhost:4000/users/${registeredUser.id}/todos`, addedTodos, {
            headers: {
              "Content-type": "application/json"
        }
        })
        setText('')
        dispatch(fetchTodos())
        history.push("/")
    }

    return (
        <div className= "add-todo">
            <form className= "add-todo-form">
            <input 
                className= "input-form"
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
