import React from 'react'
import DonorSecondCard from './Inside Components/DonorSecondCard';
import ChartOne from './Inside Components/ChartOne';
import Message from './Inside Components/Message';
import AddProjectPopup from './Inside Components/AddProjectPopup';
import { useEffect,useState } from 'react';
import Loader from '../Layout Pages/Loader';

function BenifactorPage( {my_account, actor, deployed_contract} ) {
 
  const numbers = [];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const[size, setSize] = useState(-1);

  useEffect(() => {
    if(size === 0) {
      setLoading(false);
      return;
    } 

    loadData();

    async function loadData() {
      if(size === 0) {
        setLoading(false);
        return;
      } 

      if(size === -1) {
        let n = await deployed_contract.methods.totalProjects().call();
        setSize(n);
      }
      if(size > 0) {
        let obj = await deployed_contract.methods.charityProjects(size).call();
        setData([...data, obj]);
        setSize(size-1);
      }
    }
  }, [size]); 

  async function addProject (title, desc, amtReq) {
    console.log(title, desc, amtReq);

    await deployed_contract.methods.addNewProject(title, desc, amtReq).send({ from: my_account })
      .once('receipt', (receipt) => {
        alert('Project added Succesfully');
    });
  }

  if(loading) 
  return (
    <div className='w-full flex justify-center mt-6'> 
      <Loader />
    </div> 
  );

  const myProjects = data.filter((item) => item.createrAddress === my_account);

  const approved = data.filter(item => item.isApproved);

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
              <h1 className="drop-shadow-xl  font-medium text-black"> Khamkar Abhijeet P. </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4"> Email Id </h1>
              <h1 className="drop-shadow-xl  font-medium text-black"> abhijeetkhamkar30"gmail.com </h1>
              <h1 className="drop-shadow-xl text-xs font-medium text-neutral-400 mt-4">
                 <span className='drop-shadow-xl  font-medium text-orange-600'> {actor} </span> Address
              </h1>
              <h1 className="drop-shadow-xl text-sm font-medium text-black"> {my_account} </h1>
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

        {/* Add New Project Section */}
      
        <div className='mt-10'>
           <AddProjectPopup addProject={addProject} /> 
        </div>

        {/* Participated Projets */}

        <div className="mt-4 card px-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Participated Projects & Amount Received</h1>
          
          <div className="px-4">
            
          {
            myProjects.length === 0 ? 
            <Message /> : 
            myProjects.map((it) => <DonorSecondCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
          }

          </div>
        </div>

        {/* All Projets */}

        <div className="mt-4 mb-8 card p-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Approved Projects</h1>
          
          <div className="px-4">
            
          {
            approved.length === 0 ? 
            <Message /> : 
            approved.map((it) => <DonorSecondCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
          }

          </div>
        </div>

      </div>
      
      </>
      )
}


export default BenifactorPage