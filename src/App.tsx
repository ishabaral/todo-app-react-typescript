import LoginRegister from './components/LoginRegister'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import { RootStateOrAny, useSelector } from 'react-redux'

function App() {
   return (
    <BrowserRouter>
      <Switch>
        <Route path= "/login" component= {LoginRegister} />
        <Route path = "/register" component = {LoginRegister}/>
        <ProtectedRoute path = "/"  component= {Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
