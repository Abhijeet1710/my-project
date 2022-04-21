import React from 'react'
import BenifactorFirstCard from './Inside Components/BenifactorFirstCard';
import Message from './Inside Components/Message';
import { useEffect,useState } from 'react';
import Loader from '../Layout Pages/Loader';
import LeftPart from './Inside Components/LeftPart';
import RightPart from './Inside Components/RightPart';
import FormDialog from './Inside Components/FormDialog';

function BenifactorPage( {my_account, actor, deployed_contract} ) {
 
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
        if(size != 1) setData([...data, obj]);
        setSize(size-1);
      }
    }
  }, [size]); 

  async function addProject (title, desc, amtReq) {
    // console.log(title, desc, amtReq);

    await deployed_contract.methods.addNewProject(title, desc, amtReq).send({ from: my_account })
      .once('receipt', (receipt) => {
        setData([]);
        setSize(-1);
    });


  }

  if(loading) 
  return (
    <div className=''> 
      <Loader />
    </div> 
  );

  const chartData = {
    allProjects: 0,
    approvedProjects: 0,
    completedProjects: 0,
    myProjects: 0
  }

  data.map((it) => {
    chartData.allProjects++;
    if(it.isApproved) chartData.approvedProjects++;
    if(it.isCompleted) chartData.completedProjects++;
    if(it.createrAddress === my_account) chartData.myProjects++;
  })

  const myProjects = data.filter((item) => item.createrAddress === my_account);

  const approved = data.filter(item => item.isApproved);

  return ( 
    <>
      <div className="mx-auto w-3/4 mt-8 p-4 mb-16">
        {/* Profile Section */}
        <div className="flex flex-row">
          <LeftPart actor={actor} my_account={my_account} />
          <RightPart chartData={chartData} />
        </div>

        {/* Add New Project Section */}
      
        <div className='mt-12 flex justify-end'>
           <FormDialog addProject={addProject} /> 
        </div>

        {/* Participated Projets */}

        <div className="mt-8 card px-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Participated Projects & Amount Received</h1>
          
          <div className="px-4 ">
            
          {
            myProjects.length === 0 ? 
            <Message /> : 
            myProjects.map((it) => <BenifactorFirstCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
          }

          </div>
        </div>

        {/* All Projets */}

        <div className="mt-8 mb-8 card p-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Approved Projects</h1>
          
          <div className="px-4">
            
          {
            approved.length === 0 ? 
            <Message /> : 
            approved.map((it) => <BenifactorFirstCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
          }

          </div>
        </div>

      </div>
      
      </>
      )
}


export default BenifactorPage