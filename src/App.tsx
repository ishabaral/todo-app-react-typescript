import Login from './components/Login'
import Pages from './components/Pages'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import { RootStateOrAny, useSelector } from 'react-redux'

function App() {
  const isLogged = useSelector((state:RootStateOrAny) => state.isLogged)

  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/login">
          <Login />
        </Route>
        <ProtectedRoute path = "/" isLogged= {isLogged} component= {Pages} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
