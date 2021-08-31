import TodoListItem from './TodoListItem'

interface TodoListProps{
    todos: Todo[]
    toggleTodo: ToggleTodo,
    handleDeleteTodos: (id:number) => void
}

const TodoList = ({todos, toggleTodo, handleDeleteTodos}: TodoListProps) => {
    return (
        <div className="tasks">
            <ul>
           {todos.map(todo => {
              return  <TodoListItem key = {todo.text} todo= {todo} toggleTodo={toggleTodo} handleDeleteTodos= {handleDeleteTodos}  />
           })}
        </ul>
        </div>
    )
}

export default TodoList
