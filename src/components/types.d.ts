interface ReducerAction{
  type:string,
  payload? : string
}

interface Todo{
    text: string,
    completed: boolean,
    userId:number,
    date: Date,
    id: number
}

interface User{
  name?: string,
  email:string,
  password: string,
  id?:number
}

interface AppProps{
    initialTodos: Array<Todo>
  }

type FetchAPiType = () => void



