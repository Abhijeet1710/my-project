import React from 'react';
// import img from "./icons8-loading-sign-96.png";
import img from "./icons8-spinner-48.png";

const Loader = ({message = "Loading ..."}) => {
  return (
    <div className='flex justify-center mt-64'>
         
        <img className='w-7 h-7 animate-spin' src={img}/>
        <span className='ml-2 font-medium'> {message} </span>

    </div>
  )
}

export default Loader;