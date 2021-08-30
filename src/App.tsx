import Login from './components/Login'
import Pages from './components/Pages'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  
  const logged = (param: boolean)=> {
    setIsLogged(param)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/login">
          <Login logged = {logged} />
        </Route>
        <ProtectedRoute path = "/" isLogged= {isLogged} component = {Pages} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
