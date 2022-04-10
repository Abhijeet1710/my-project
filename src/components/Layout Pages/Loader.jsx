import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className='flex align-items-center'>
         
        <ImSpinner2 className='w-7 h-7 animate-spin' />
        <span className='ml-4 font-medium'> Loading ... </span>

    </div>
  )
}

export default Loader;