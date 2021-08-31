import Login from './components/Login'
import Pages from './components/Pages'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/login">
          <Login setIsLogged= {setIsLogged} isLogged= {isLogged}/>
        </Route>
        <ProtectedRoute path = "/" isLogged= {isLogged} component= {Pages} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
