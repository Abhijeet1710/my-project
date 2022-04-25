import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faCircleDollarToSlot, faUserGear, faUserLarge, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {CgSpinner} from 'react-icons/cg';
import Loader from './Loader';
import Navbar2 from './Navbar2';

function LoginPage( {setLogin, my_account, deployed_contract, setUserData} ) {
  AOS.init();

  const LOG_IN = "LOG_IN";
  const SIGN_UP = "SIGN_UP";

  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);

  const[loginState, setLoginState] = useState(true);


  function validate(ipName, ipEmail) {
    // const ipName = document.getElementById("ipName").value;
    // const ipEmail = document.getElementById("ipEmail").value;

    if(ipName === "" || ipEmail === "" || my_account === "") {
      alert("Please fill all fields");
      return false;
    }

    return true;
  }

  async function login(ipName, ipEmail) {

    switch(active) {
      case 1: {
        let admin = await deployed_contract.methods.getAdmin().call();

        if(admin === my_account && ipName === "admin" && ipEmail === "admin@charitychain.in") {
          setUserData({name: "admin", email: "admin@charitychain.in"});
          setLoading(false);
          setLogin(1);
        }
        else {
          setLoading(false);
          alert("You are not Admin");
        } 

        break;
      }

      case 2: {
        const onr = await deployed_contract.methods.donors(my_account).call();

        if(onr.donorName === "") {
          setLoading(false);
          alert("Account not found !");
        } 
        else if(onr.donorName !== ipName || onr.donorEmail !== ipEmail) {
          setLoading(false);
          alert("Wrong Username or email!");
        } else{
          setUserData({name: onr.donorName, email: onr.donorEmail});
          setLoading(false);
          setLogin(2);
        } 

        break;
      }

      case 3: {
        const onr = await deployed_contract.methods.benifactors(my_account).call();

        if(onr.benifactorName === ""){
          setLoading(false);
          alert("Account not found !");
        } 
        else if(onr.benifactorName !== ipName || onr.benifactorEmail !== ipEmail) {
          setLoading(false);
          alert("Wrong Username or email!");
        }
        else {
          setUserData({name: onr.benifactorName, email: onr.benifactorEmail});
          setLoading(false);
          setLogin(3);
        } 

        break;
      }
    }

  }

  async function signup(ipName, ipEmail){
    setLoading(false);
    
    switch(active) {
      case 2: {
        await deployed_contract.methods.addNewDonor(ipName, ipEmail).send({from: my_account})
        .once('receipt', (receipt) => {
          alert("You can Log in now");
          // if(receipt.events.returnMessage.returnValues.status) {
          //   alert("Account Created Succesfully You can Login Now");
          //   setLoginState(!loginState);
          // }
          // else {
          //   alert(receipt.events.returnMessage.returnValues.message);
          // } 

        });

        break;
      }

      case 3: {
        await deployed_contract.methods.addNewBenifactor(ipName, ipEmail).send({ from: my_account })
        .once('receipt', (receipt) => {
            alert("You can Log in now");
          // if(receipt.events.returnMessage.returnValues.status) {
          //   alert("Account Created Succesfully You can Login Now");
          //   setLoading(false);
          //   setLoginState(!loginState);
          // }
          // else {
          //   setLoading(false);
          //   alert(receipt.events.returnMessage.returnValues.message);
          // } 
        });

        break;
      }
    }

  }

  const btnClicked = async () => {

    const ipName = document.getElementById("ipName").value;
    const ipEmail = document.getElementById("ipEmail").value;
    if(!validate(ipName, ipEmail)) return;

    setLoading(true);
    loginState ? await login(ipName, ipEmail) : await signup(ipName, ipEmail);
    setLoading(false);
  }

  if(my_account.length === 0) { 
    return ( 
      <>
      <Navbar2 my_account={my_account} />
      <div className=''>
        <Loader /> 
      </div>
      </>
    )
  };

  return (
    <>
    <Navbar2 my_account={my_account} />
    <div className="mt-16">
      
      <div className="w-4/5 overflow-hidden card lg:w-3/12 pt-2 pb-8 px-6 mt-6 mx-auto h-200px rounded-xl"
        data-aos="zoom-up"
        data-aos-delay="20"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        > 
        <h1 className="text-xl mt-2 font-medium drop-shadow-xl text-orange-600"> { loginState ? LOG_IN : SIGN_UP } </h1>
        
        <div className="px-2">
          <div className="w-full mt-6 border-b border-orange-400">

            <label className="drop-shadow-xl text-xs font-medium text-neutral-400"> Full Name </label>
            <div className="flex flex-row">
              <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faUserLarge} />   
              <input id="ipName" className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
            </div>
            
          </div>

          <div className="w-full mt-4 border-b border-orange-400">
            <label className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> Email Addres </label>
            <div className="flex flex-row">
              <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faEnvelope} />   
              <input id="ipEmail" className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
            </div>
          </div>
          
          <h2 className=" grow-0 text-sm drop-shadow-xl mt-8 font-medium text-black-600">Your Address </h2>
          <label className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> {my_account} </label>

          <h2 className=" grow-0 text-sm drop-shadow-xl mt-2 font-medium text-black-600">Log in As </h2>
            
          <div className="flex flex-row justify-between mx-12 mt-4">

            <div className="flex flex-col justify-center text-center">
              <button
              className={`w-11 h-11 rounded-full border-orange-400 border drop-shadow-2xl ${active === 1 ? "` bg-orange-500 text-white" : ""}`}> 
                <FontAwesomeIcon className="" icon={faUserGear}
                onClick={ () => setActive(1)} />  
              </button>
              <span className="drop-shadow-2xl text-xs font-medium text-neutral-400 mt-1">Admin</span>
            </div>

            <div className="flex flex-col justify-center text-center">
              <button
              className={`w-11 h-11 rounded-full drop-shadow-2xl border-orange-400 border ${active === 2 ? "` bg-orange-500 text-white" : ""}`}> 
                <FontAwesomeIcon className="" icon={faCircleDollarToSlot} 
                onClick={ () => setActive(2)} />   
              </button>
              <span className="drop-shadow-2xl text-xs font-medium text-neutral-400 mt-1">Donor</span>
            </div>

            <div className="flex flex-col justify-center text-center">
              <button
              className={`w-11 h-11 rounded-full drop-shadow-2xl border-orange-400 border ${active === 3 ? "` bg-orange-500 text-white" : ""}`}> 
                <FontAwesomeIcon className="" icon={faHandHoldingDollar} 
                onClick={ () => setActive(3)} />   
              </button>
              <span className="drop-shadow-2xl text-xs font-medium text-neutral-400 mt-1">Needy</span>
            </div>

          </div>

          
          {/* Login SignUp Button  */}
          <div 
            onClick={btnClicked}
            className='loginBtn cursor-pointer text-white flex justify-center py-2 my-2 drop-shadow-lg w-full text-md font-medium rounded-3xl mt-4'>
              <CgSpinner className={`animate-spin my-1 ${loading ? "block" : "hidden"}`} />
              <span className='ml-2'> 
                    { loginState ? LOG_IN : SIGN_UP }
              </span>
          </div>


          {/* Navigate between sign up and login Button */}
          <label className="drop-shadow-xl text-xs font-medium text-neutral-400"> {` ${loginState ? "Don't have an Account ?" : "Already have an Account"} `}  
              <span 
                className="text-blue-500 cursor-pointer"
                onClick={ () => {setLoginState(!loginState)} }>
                  {` ${loginState ? SIGN_UP : LOG_IN} `} 
              </span>
          </label>

        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
