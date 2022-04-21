import React from 'react';
import lg from '../Resources/logo.png';
import Avatar from 'react-avatar';
import Tooltip from '@mui/material/Tooltip';


const Navbar2 = ( {my_account} ) => {
  return (
    <div className='w-full flex border-b border-slate-300 py-2'>
        
        <div className='flex h-full w-3/4 mx-auto justify-between'>
            <Tooltip title="CharityChain-A Blockchain based charity application" arrow>
              <div className='flex cursor-pointer'>
                  <img src={lg} height='20px' width='30px' /> 
                  <span className='font-medium text-md ml-2 mt-1 '> CHARITYCHAIN  </span>
              </div>
            </Tooltip>
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