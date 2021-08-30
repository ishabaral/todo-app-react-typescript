interface Todo{
    text: string,
    completed: boolean,
    userId:number,
    id: number
}

interface AppProps{
    initialTodos: Array<Todo>
  }
type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (id:number, text: string, userId:number) => void;

type FetchAPiType = () => void