import axios from 'axios';

interface Props{
    todo: Todo
    toggleTodo: ToggleTodo
    handleDeleteTodos: (id:number) => void
}

const TodoListItem = ({todo, toggleTodo, handleDeleteTodos}: Props) => {

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

    const handleClick = async (id:number) => {
        handleDeleteTodos(id)
    //   dispatch(fetchEvent());
    }

    return (
        <div className= "task">
            <label  style= {{textDecoration: todo.completed? "line-through" : undefined}}>
                <div>
                    <input type="checkbox" checked= {todo.completed} onChange= {()=> handleToggle(todo)} />
                    {/* <span  className="custom-checkbox" ></span> */}
                    <div>{todo.text}</div>
                    </div>
                <button className= "btn trash" onClick = {e => handleClick(todo.id)}><i className="fa fa-trash"/></button>
            </label>
            
            
        </div>
    )
}

export default TodoListItem

