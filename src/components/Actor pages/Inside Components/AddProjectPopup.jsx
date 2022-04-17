import { Popover, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { useState } from 'react';
import React from 'react';
import {motion} from 'framer-motion';

export default function AddProjectPopup( {addProject} ) {

    function add() {

      // alert("Adding");

        let title = document.getElementById("projectName").value;
        let desc = document.getElementById("projectDesc").value;
        let amt = document.getElementById("amtReq").value;

        addProject(title, desc, amt);
    }

  return (
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`text-white group bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span> Add Project </span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="card mt-4 rounded rounded-xl w-3/6 px-10 py-6">
                <div>

                    <div className="w-full mt-6 border-b border-orange-400">
                        <label className="drop-shadow-xl text-xs font-medium text-neutral-400">Project Name </label>
                        <div className="flex flex-row">
                            {/* <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faUserLarge} />    */}
                            <input id="projectName" className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-orange-400">
                        <label className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> Project Description </label>
                        <div className="flex flex-row">
                            {/* <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faEnvelope} />    */}
                            <textarea rows="3" id="projectDesc" className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
                        </div>
                    </div>

                    <div className='flex mt-4'>
                        <div className="w-full border-b border-orange-400 mr-4">
                            <label  className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> Amount Require (in ETH) </label>
                            <div className="flex flex-row">
                                {/* <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faEnvelope} />    */}
                                <input  type="number" id="amtReq" className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
                            </div>
                        </div>

                        <div onClick={() => add() } className='flex align-center rounded rounded-full text-center rounded bg-green-300 hover:bg-green-400 cursor-pointer px-4 ml-4'>
                            <button className=''> Add </button>
                        </div>
                    </div>
                    
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
  )
}