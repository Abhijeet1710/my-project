import React from 'react';
import ChartOne from '../Inside Components/ChartOne';

const RightPart = ( {chartData} ) => {
  return (
<div className="w-1/3 grow card rounded-xl p-2 m-2">
            {/* <h1 className="text-md mt-1s font-medium drop-shadow-xl text-orange-600">OVERALL</h1> */}
            
            <div className="flex flex-row divide-x divide-blue-500">
              <div className="w-2/5 mr-4 cursor-pointer">
                <ChartOne chartData={chartData}  />
              </div>

              <div className="w-2/5 mx-auto my-auto grow text-center">
                <div className="">
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-2"> All Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> {chartData.allProjects} </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Approved Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> {chartData.approvedProjects} </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Completed Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> {chartData.completedProjects} </span> <br />
                  <span className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> My Projects </span>
                  <span className="drop-shadow-xl text-2xl ml-4 font-medium text-black"> {chartData.myProjects} </span> <br />
                </div>
              </div>
            </div>
          </div>  )
}

export default RightPart