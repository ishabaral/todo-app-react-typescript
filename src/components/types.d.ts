interface ReducerAction{
  type:string,
  payload? : string
}

interface Todo{
    text: string,
    completed: boolean,
    userId:number,
    id: number
}

interface User{
  email:string,
  password: string,
  id?:number,
  isLogged?:boolean
}

interface AppProps{
    initialTodos: Array<Todo>
  }

type FetchAPiType = () => void



