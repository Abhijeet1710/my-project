import React from 'react'
import DonorFirstCard from './Inside Components/DonorFirstCard';
import { useEffect,useState } from 'react';
import DonorSecondCard from './Inside Components/DonorSecondCard';
import Message from './Inside Components/Message';
import Loader from "../Layout Pages/Loader";
import LeftPart from './Inside Components/LeftPart';
import RightPart from './Inside Components/RightPart';
import Navbar2 from '../Layout Pages/Navbar2';
import web3 from 'web3';

function DonorPage( {actor, my_account, deployed_contract} ) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const[size, setSize] = useState(-1);
  let len;

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
        len = n;
      }

      if(size > 0) {
        let obj = await deployed_contract.methods.charityProjects(size).call();
        if(size != 1) setData([...data, obj]);
        setSize(size-1);
      }
    }
  }, [size]); 

  async function donate(id, eth) {

    let ind;

    for(let i=0; i<data.length; i++) if(id === data[i].projectId) {
      ind = i;
      break;
    }

    if(eth+data[ind].amountGot > data[ind].amountRequire) {
      alert('Please donate inBound');
      return;
    }

    await deployed_contract.methods.donateEther(data[ind].createrAddress, ind).send({ from: my_account, value: 1000000000000000000 * eth  })
    .once('receipt', (receipt) => {
      // setApproved(true);
      // alert("Succes");
        setData([]);
        setSize(-1);

    });
  }

  
  if(loading) 
  return (
    <>
    <Navbar2 my_account={my_account} actor={actor} />
    <div className='w-full flex justify-center mt-6'> 
      <Loader />
    </div> 
    </>
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
  });

  const approved = data.filter((it) => it.isApproved);

  return ( 
    <>
      <Navbar2 my_account={my_account} actor={actor} />

      <div className="mx-auto mt-8 w-3/4 p-4 mb-16">
        {/* Profile Section */}
        <div className="flex flex-row">
          <LeftPart actor={actor} my_account={my_account} />
          <RightPart chartData={chartData} />
        </div>
      

        {/* Participated Projets */}
        

        <div className="mt-12 w-full h-0.5 "></div>

        {/* All Projets */}

        <div className="mt-4 card p-4 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Approved Projects & Amount Required</h1>
          
          {
            approved.length === 0 ? 
            <Message /> : 
            approved.map((it, ind) => {
              return <DonorSecondCard key={it.projectId} donate={donate} item={it} deployed_contract={deployed_contract} my_account={my_account} />
            } )
          }

        </div>

      </div>

      </>
      )
}

export default DonorPage;

/*
TITLE   PID
p1      2     3
p2      3     2
p3      4     1
p4      5     0

len = 5

len - PID - 1
5 - 5

*/