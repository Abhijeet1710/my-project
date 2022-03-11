import React from 'react'

function Message( {title} ) {
  return (
      <div className='flex flex-row'>
          <img className='w-12 h-12'  src="https://img.icons8.com/cotton/64/000000/empty-box.png"/>
          <h1 className="flex drop-shadow-xl ml-4 mt-4 text-black"> {title} ! </h1>
      </div>
    
  )
}

export default Message