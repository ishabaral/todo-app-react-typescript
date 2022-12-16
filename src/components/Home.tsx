import React, { useEffect } from 'react'
import './todoStyles.css'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import { useDispatch } from 'react-redux'
import { clearTodos, logout } from '../redux/actions'
import { fetchTodos } from '../redux/actions/fetchTodos'
import { fetchUsers } from '../redux/actions/fetchUser'

const Home = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearTodos())
    dispatch(fetchUsers())
    localStorage.removeItem('user')
  }
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='pages'>
      <div className='todo-list'>
        {/* <h1 className="title">Stuffs I need to do</h1> */}
        <div className='todo-header'>
          <h2 className='list-title'>My Todos</h2>
          <button
            className='log-out-btn tooltip'
            onClick={() => handleLogout()}
          >
            <i className='fa fa-sign-out' aria-hidden='true'></i>
            <span className='tooltiptext'>Logout</span>
          </button>
        </div>
        <div className='todo-body'>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default Home
