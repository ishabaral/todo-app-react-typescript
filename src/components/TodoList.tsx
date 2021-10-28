import { RootStateOrAny, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
    const todos = useSelector((state:RootStateOrAny) => state.todosReducer.todos)

    const sortByDate = (arr: Todo[])=> {
        const sorter = (a: Todo, b:Todo) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        }
        todos.sort(sorter)
    }
    sortByDate(todos)

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
