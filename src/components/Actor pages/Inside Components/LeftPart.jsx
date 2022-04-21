import React from 'react'

const LeftPart = ( {actor, my_account} ) => {
  return (
    <div className="w-1/3 card rounded-xl p-2 pb-4 m-2">
            <h1 className="text-md mt-1 font-medium drop-shadow-xl text-orange-600">MY PROFILE</h1>
            <div className="p-2">
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-2"> Name </h1>
              <h1 className="drop-shadow-xl  font-medium text-black"> Khamkar Abhijeet P. </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Email Id </h1>
              <h1 className="drop-shadow-xl  font-medium text-black"> abhijeetkhamkar30"gmail.com </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4">
                 <span className='drop-shadow-xl  font-medium text-orange-600'> {actor} </span> Address
              </h1>
              <h1 className="drop-shadow-xl text-sm font-medium text-black"> {my_account} </h1>
            </div>
    </div>
  )
}

export default LeftPart