import React from 'react';
import img from "./icons8-loading-sign-96.png";

const Loader = ({message = "Loading ..."}) => {
  return (
    <div className='flex'>
         
        <img className='w-7 h-7 animate-spin' src={img}/>
        <span className='ml-2 font-medium'> {message} </span>

    </div>
  )
}

export default Loader;