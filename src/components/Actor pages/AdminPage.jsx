import React from 'react';
import AdminFirstCard from './Inside Components/AdminFirstCard';
import { useEffect,useState } from 'react';
import Loader from '../Layout Pages/Loader';
import Message from '../Actor pages/Inside Components/Message';
import LeftPart from './Inside Components/LeftPart';
import RightPart from './Inside Components/RightPart';
import Navbar2 from '../Layout Pages/Navbar2';
import CompletedCard from './Inside Components/CompletedCard';

function AdminPage( {userData, my_account, actor, deployed_contract} ) {

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
        if(size != 1) setData([...data, obj]);  //size = 1 project is dummy created by contract.
        setSize(size-1);
      }
    }
  }, [size]);  
  
  if(loading) return (
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
    })

    const other = data.filter((it) => !it.isCompleted);
    const completed = data.filter((it) => it.isCompleted);

  return ( 
    <>
      <Navbar2 my_account={my_account} actor={actor} />

      <div className="mx-auto mt-8 w-3/4 p-4 mb-16">
        {/* Profile Section */}
        <div className="flex flex-row">
          <LeftPart userData={userData} actor={actor} my_account={my_account} />
          <RightPart chartData={chartData} />
        </div>

        {/* All Projets */}

        <div className="my-12 card px-4 py-8 rounded-lg">
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600"> All Projects </h1>
          <div className="px-4"> 
          {
            other.length === 0 ? 
            <Message /> : 
            other.map((it) => <AdminFirstCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
          }
          </div>
        </div>

        {/* Completed Projets */}

        <div className="card p-4 rounded-lg mb-8" >
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600"> Completed Projects</h1>
          
          {
            completed.length === 0 ? 
            <Message /> : 
            completed.map((it, ind) => {
              return <CompletedCard key={it.projectId} item={it} />
            } )
          }

        </div>

      </div>
      </>
      )
}

export default AdminPage