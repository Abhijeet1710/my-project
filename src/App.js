import React, { useEffect, useState } from "react";
import Helloabi from "./abi/Hello.json";
import Web3 from "web3";
import './index.css';
import Navbar from './components/Layout Pages/Navbar';
import StartPage from './components/Layout Pages/StartPage';

function App() {

  const [refresh, setrefresh] = useState(0);
  const [loading2, setloading2] = useState(false);
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [methodOp, setMethodOp] = useState("Click Here");
  const [deployedContract, setContract] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setLoading(true);
    if (typeof window.ethereum == "undefined" ) {
      return;
    }
    
    const web3 = new Web3(window.ethereum);

    let url = window.location.href;
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
      console.log(ContractInstance);
      
      // const onr = await ContractInstance.methods.getA().call();
      // setMethodOp(onr);

      setLoading(false);
    } catch {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
    }
  };

  const setMsg = async() => {
      const onr = await deployedContract.methods.getA().call();
      setMethodOp(onr);
  }

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <div className="overflow-x-hidden main-page">
        <Navbar />
        <StartPage />
        {/* <Footer /> */}
      </div>
  );
}

export default App;
