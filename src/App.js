import React, { useEffect, useState } from "react";
import Helloabi from "./abi/Hello.json";
import Web3 from "web3";
import Navbar from './components/Layout Pages/Navbar';
import StartPage from './components/Layout Pages/StartPage';

function App() {

  const [account, setAccount] = useState([]);
  const [deployedContract, setContract] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    if (typeof window.ethereum == "undefined" ) {
      return;
    }
    
    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    if (accounts.length == 0) {
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
  };

  return (
    <div className="overflow-x-hidden main-page">
        <Navbar />
        <StartPage my_account={account} deployed_contract={deployedContract} />
      </div>
  );
}

export default App;
