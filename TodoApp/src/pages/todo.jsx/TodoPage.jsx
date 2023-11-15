import React from 'react'
import AddTodo from '../../components/todos/AddTodo'
import Todos from '../../components/todos/Todos'

function TodoPage() {

    const bgStyle = {
        backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    }

  return (
    <div className='w-full flex justify-center min-h-[400px]'>
        <div className='m-4 p-4 border-4'>
            <AddTodo />
            <Todos/>
        </div>
    </div>
  )
}

export default TodoPage
