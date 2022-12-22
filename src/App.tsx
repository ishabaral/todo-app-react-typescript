import LoginRegister from './components/LoginRegister'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme='colored' />
      <Switch>
        <Route path='/login' component={LoginRegister} />
        <Route path='/register' component={LoginRegister} />
        <ProtectedRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
