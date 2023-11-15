import React from 'react'

function Header() {

  const bg_style = {
    //backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  }

  return (
    <div className='flex items-center h-16 w-full' style={{...bg_style}}>
      <h1 className='mx-6 text-red-950 text-2xl font-bold'>Todo App</h1>
    </div>
  )
}

export default Header
