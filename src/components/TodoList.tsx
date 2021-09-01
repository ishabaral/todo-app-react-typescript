import { RootStateOrAny, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
    const todos = useSelector((state:RootStateOrAny) => state.todosReducer.todos)

    return (
        <div className="tasks">
            <ul>
           { todos.map((todo: Todo) => {
              return  <TodoListItem key = {todo.text} todo= {todo}  />
           })}
        </ul>
        </div>
    )
}

export default TodoList
