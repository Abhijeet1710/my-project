import React, { useEffect, useState } from "react";
import Helloabi from "./abi/Hello.json";
import Web3 from "web3";
import Navbar from './components/Layout Pages/Navbar';
import StartPage from './components/Layout Pages/StartPage';
import Footer from "./components/Actor pages/Inside Components/Footer";
import Navbar2 from "./components/Layout Pages/Navbar2";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearnPage from "./components/Layout Pages/LearnPage";

function App() {

  const [account, setAccount] = useState([]);
  const [deployedContract, setContract] = useState();

  useEffect(() => {
    init();

    async function init() {
      if (window.ethereum) {
        await window.ethereum.enable();
      if (typeof window.ethereum == "undefined" ) {
        return;
      }
      
      const web3 = new Web3(window.ethereum);
  
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      if (accounts.length === 0) {
        return;
      }
      const networkId = await web3.eth.net.getId();
      let deployedNetwork = Helloabi.networks[networkId];

      try {
        const ContractInstance = new web3.eth.Contract(
          Helloabi.abi,
          deployedNetwork && deployedNetwork.address
        );
        
        setContract(ContractInstance);
  
      } catch {
        window.alert("the contract not deployed to detected network.");
      }
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
    
  }, []);

  return (
      <>
        {/* <Navbar2 my_account={account} /> */}
        <Routes>
         <Route path="/" exact 
         element={ 
          <div className="overflow-x-hidden main-page">
            <StartPage my_account={account} deployed_contract={deployedContract} />
            <Footer />
          </div>
          } /> 
         <Route path="/Learn-More" exact 
         element={ 
          <>
            <LearnPage />
          </> 
          } /> 
        </Routes>

      </>
  );
}

export default App;
