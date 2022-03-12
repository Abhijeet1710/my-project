import React, { useEffect, useState } from "react";
import Helloabi from "./abi/Hello.json";
import Web3 from "web3";
import Navbar from './components/Layout Pages/Navbar';
import StartPage from './components/Layout Pages/StartPage';

function App() {

  const [refresh, setrefresh] = useState(0);
  const [loading2, setloading2] = useState(false);
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [methodOp, setMethodOp] = useState("Click Here");
  const [deployedContract, setContract] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
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

      setLoading(false);
    } catch {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
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
        {/* <Footer /> */}
      </div>
  );
}

export default App;
