import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../features/todo/todoSlice';

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  const bgStyle = {
    backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  }

  return (
    <div className="px-5 py-10">
      <form onSubmit={addTodoHandler}>
        <span >
          <input className="bg-slate-100 w-96 h-12 rounded-3xl mr-8 px-3 border-none outline-none text-black" 
            placeholder="Enter the note" 
            type='text' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}>
          </input>
        </span>
        <button type='submit' className=" text-blue-950 p-3 rounded-3xl " style={{...bgStyle}}>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
