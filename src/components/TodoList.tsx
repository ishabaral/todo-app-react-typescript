import TodoListItem from './TodoListItem'

interface TodoListProps{
    todos: Todo[]
    toggleTodo: ToggleTodo
}

const TodoList = ({todos, toggleTodo}: TodoListProps) => {
    return (
        <div className="tasks">
            <ul>
           {todos.map(todo => {
              return  <TodoListItem key = {todo.text} todo= {todo} toggleTodo={toggleTodo} />
           })}
        </ul>
        </div>
    )
}

export default TodoList
