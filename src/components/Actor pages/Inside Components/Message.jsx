import React from 'react';

function Message( {title = "Nothing to show"} ) {
  return (
      <div className='flex align-middle'>
          <img className='w-8 h-8' src="https://img.icons8.com/plumpy/96/000000/empty-box.png"/>
          <p className="flex drop-shadow-xl ml-2 mt-1 text-black"> {title} ! </p>
      </div>
    
  )
}

export default Message;