import axios from 'axios'
import { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchTodos } from '../redux/actions/fetchTodos'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { toast } from 'react-toastify'

const AddTodoForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [text, setText] = useState('')
  const [startDate, setStartDate] = useState(new Date())

  const registeredUser = JSON.parse(localStorage.getItem('user')!)

  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault()
    const addedTodos = {
      text: text,
      completed: false,
      date: moment(startDate).format('LL'),
      userId: registeredUser.id,
    }
    if (text) {
      await axios.post(
        `http://localhost:4000/users/${registeredUser.id}/todos`,
        addedTodos,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      toast.success('Added successfully')
      setText('')
      dispatch(fetchTodos())
      history.push('/')
    } else {
      toast.error('Todo is empty')
    }
  }

  return (
    <div className='add-todo'>
      <form className='add-todo-form' action=''>
        <input
          className='input-form'
          type='text'
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter your Todo'
        />
        <DatePicker
          selected={startDate}
          dateFormat='dd/MM/yyyy'
          onChange={(date: any) => setStartDate(date)}
        />

        <button
          className='btn task'
          type='submit'
          onClick={(e) => handleClick(e)}
        >
          +
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
