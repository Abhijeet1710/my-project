import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

function DonorSecondCard( {item, deployed_contract, my_account, key, donate} ) {

  async function donateEther(id) {

    let eth = document.getElementById('ethers').value;
    if(eth === "") alert("Please fill value");
    else await donate(id, parseInt(eth));
    
  }

  return (
    <div>      
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`  mt-4 flex justify-between bg-cyan2 w-full px-8 py-4 text-lg font-large text-left text-purple-900  rounded-lg `}>
                <h1 className="drop-shadow-xl  font-medium text-black"> {item.projectName} </h1>

                <div className="flex flex-row">
                  <span
                      className={`mr-2 rounded-full  px-2 font-medium text-gray-500 text-sm bg-green-600 ${item.isCompleted ? ' bg-green-300' : ' bg-red-200'}`}>
                         {item.isCompleted ? "Completed" : "Not Complete"}
                    </span>
                  <span
                      className={`mr-2 rounded-full  px-2 font-medium text-gray-500 text-sm bg-green-600 ${item.isApproved ? ' bg-green-300' : ' bg-red-200'}`}>
                         {item.isApproved ? "Approved" : "Not Approved"}
                    </span>

                    <span className={` ${item.isCompleted ? 'hidden' : 'block'} mr-2 rounded-full  px-2 font-medium text-gray-500 text-sm bg-cyan-200  `}>
                       {item.amountRequire - item.amountGot} Eth 
                    </span>

                    <FontAwesomeIcon className={`${
                        open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`} icon={faAngleDown} />
                </div>
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 mb-6 text-sm text-gray-500">
                <div className="">
                    <h1 className="mr-6 text-xs font-medium text-neutral-400 mt-2">
                       {item.projectDescription} 
                    </h1>
                    <div className='flex justify-between mt-4'>
                      <div className=''>
                        <div>
                          <span className="drop-shadow-xl font-medium text-black"> Total Amount Required  : </span>
                          <span className="drop-shadow-xl text-xl font-medium text-black"> {item.amountRequire} </span>
                        </div>
                        <div>
                          <span className="drop-shadow-xl font-medium text-black"> Amount Received  : </span>
                          <span className="drop-shadow-xl text-xl font-medium text-black"> {item.amountGot} </span>
                        </div>
                      </div>
                      <div className={`mt-4 ${item.isCompleted ? 'hidden' : 'block'}`}> 
                        <span> 
                         <input className='transparent border-b border-orange-400' type="numder" id="ethers" placeholder="Amount in Eth" />
                         <button
                          className="rounded-full px-4 font-medium py-2 text-white text-sm bg-green-500 cursor-pointer hover:bg-green-600" 
                          onClick={ () => donateEther(item.projectId) }> 
                            Donate 
                         </button>
                        </span>
                      </div>
                    </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
  )
}

export default DonorSecondCard