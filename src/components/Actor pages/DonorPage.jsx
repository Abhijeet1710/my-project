import React from 'react'
import DonorFirstCard from './Inside Components/DonorFirstCard';
import Footer from '../Actor pages/Inside Components/Footer';
import DonorSecondCard from './Inside Components/DonorSecondCard';
import ChartOne from './Inside Components/ChartOne';

function DonorPage( {actor, data} ) {

  const numbers = [1, 2, 3, 4, 5,6,7,8,9,14];

  return ( 
    <>
      <div className="mx-auto w-3/4 p-4 mb-16">
        {/* Profile Section */}
        <div className="flex flex-row">
          {/* Left Part */}
          <div className="w-1/3 card rounded-xl p-2 pb-4 m-2">
            <h1 className="text-md mt-1 font-medium drop-shadow-xl text-orange-600">MY PROFILE</h1>
            <div className="p-2">
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-2"> Name </h1>
              <h1 className="drop-shadow-xl  font-medium text-black"> {data.donorName} </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Email Id </h1>
              <h1 className="drop-shadow-xl  font-medium text-black"> { data.donorEmail } </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4">
                 <span className='drop-shadow-xl  font-medium text-orange-600'> {actor} </span> Address
              </h1>
              <h1 className="drop-shadow-xl font-medium font-medium text-black"> {data.donorAddress} </h1>
            </div>
          </div>

        {/* Right Part */}
          <div className="w-1/3 grow card rounded-xl p-2 m-2">
            <h1 className="text-md mt-1 font-medium drop-shadow-xl text-orange-600">OVERALL</h1>
            <div className="flex flex-row ">
              <div className="w-2/5 mr-4 border-r-2 cursor-pointer  border-purple-300">
                <ChartOne  />
              </div>

              <div className="w-2/5 grow text-center">
                <div className="">
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-2"> All Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> 452 </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Approved Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> 256 </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Completed Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> 65 </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Approved Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> 256 </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Approved Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> 256 </span> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      

        {/* Participated Projets */}

        <div className="mt-12 card px-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Participated Projects & Amount Donated</h1>
          
          <div className="px-4">
            
            {
              numbers.map((item, index) => {
                return <DonorSecondCard i={index} />;
              })
            }

          </div>
        </div>

        <div className="mt-12 w-full h-0.5 "></div>

        {/* All Projets */}

        <div className="mt-4 card p-4 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Approved Projects & Amount Required</h1>
          
          <div className="px-4">
            <DonorSecondCard /> 
            <DonorSecondCard /> 
            <DonorSecondCard /> 
            <DonorSecondCard /> 
            <DonorSecondCard /> 
            <DonorSecondCard /> 
          </div>
        </div>

      </div>

      </>
      )
}

export default DonorPage;