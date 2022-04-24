import React from 'react';
import lg from '../Resources/logo.png';
import Avatar from 'react-avatar';
import Tooltip from '@mui/material/Tooltip';


const Navbar2 = ( {my_account, actor = ""} ) => {

  return (
    <div className='w-full flex border-b border-slate-300 py-3 px-8'>
        
        <div className='flex h-full w-3/4 mx-auto justify-between'>
              <div className='flex cursor-pointer'>
                  <img src={lg} height='20px' width='30px' /> 
                  <span className='font-medium text-md ml-2 mt-1 '> CHARITYCHAIN  </span>
                  <Tooltip title={`Loged in as ${actor}`} arrow>
                    <p className={` ${actor === "" ? 'hidden' : 'block'} text-sm ml-4 mt-1 cursor-pointer	text-slate-500	hover:text-slate-800 `}> {actor} </p>
                  </Tooltip>
              </div>
            <div className='flex'>
                <span className=' mr-1 mt-1 font-medium text-sm'> {my_account}  </span>
                <Tooltip title={my_account} arrow>
                 <div className="ml-1"> <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size='25' name="C C" /> </div>
               </Tooltip>
            </div>
        </div>

    </div>
  )
}

export default Navbar2