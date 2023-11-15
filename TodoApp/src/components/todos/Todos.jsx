import React, {useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../features/todo/todoSlice';

function Todos() {
    
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleRemove = (id) =>{
      dispatch(removeTodo(id))
    }

  return (
    <div className=' mb-2 bg-white'>
      <div className="flex justify-items-start w-full mb-4">
        <div className="text-blue-700 text-xl">Todos</div>
      </div>
      <div id='div1' className='flex flex-col w-full h-[200px] shadow overflow-auto'>
        {todos.map((todo) => (
          <div className='flex flex-row justify-center border-b-2 hover:bg-blue-600  hover:text-white text-black cursor-pointer relative'>
            <div key={todo.id} className='my-0.5'>{todo.text}</div>
            <DeleteIcon onClick={() => handleRemove(todo.id)} className="hover:text-red-700 text-white absolute right-0 hidden"/>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Todos
