import React from 'react';
import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function DonorSecondCard( {i, item} ) {
  AOS.init();

  return (
    <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={` ${ i % 2 != -1 ? "bg-overlay" : ""}   mt-4 flex justify-between w-full px-8 py-4 text-lg font-large text-left text-purple-900  rounded-lg `}>
                <h1 className="drop-shadow-xl  font-medium text-black"> {i} </h1>

                <div className="flex flex-row">
                    <span className="mr-2 rounded-full px-3 font-medium py-1 text-white text-sm bg-green-600"> Approved </span>
                    <span className="mr-4 rounded-full px-3 font-medium py-1 text-white text-sm bg-red-500"> 258 </span>
                    <FontAwesomeIcon className={`${
                        open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`} icon={faAngleDown} />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 mb-6 text-sm text-gray-500">
                <div className="">
                    <h1 className="mr-6 text-xs font-medium text-neutral-400 mt-2"> Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
                    Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
                    Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
                    Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine. </h1>
                    <span className="drop-shadow-xl mt-4 font-medium text-black"> Amount Required  : </span>
                    <span className="drop-shadow-xl text-xl mt-4 font-medium text-black"> 1243 </span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
  )
}

export default DonorSecondCard