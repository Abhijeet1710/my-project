import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faCircleDollarToSlot, faUserGear, faUserLarge, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function LoginPage( {setLogin, my_account, deployed_contract, setData} ) {
  AOS.init();
  const [active, setActive] = useState(1);
  const [useCase, setUseCase] = useState("LOG-IN");

  //Active
  // 1 -> Admin
  // 2 -> Donor
  // 3 -> Benifactor

  // 0 -> Login Page
  // 1 -> Admin Page
  // 2 -> Donor Page
  // 3 -> Benifactor Page

  const btnClicked = async () => {

    // await deployed_contract.methods.addNewProject("pro 3", "desc 3", 90).send({ from: my_account })
    //   .once('receipt', (receipt) => {
    //   console.log(receipt);
    // });

    // console.log(active);
    setLogin(active);
    return;

    const ipName = document.getElementById("ipName").value;
    const ipEmail = document.getElementById("ipEmail").value;

    if(ipName == "" || ipEmail == "" || my_account == "") {
      alert("Please fill all fields");
      return;
    }

    if(useCase == "LOG-IN") {
      if(active == 2) { //Donor
        const onr = await deployed_contract.methods.donors(my_account).call();
        if(onr.donorName == "") {
          alert("Account not found !");
          return;
        }
        console.log(onr);

      }else if(active == 3) { //Benifactor
        const onr = await deployed_contract.methods.benifactors(my_account).call();
        if(onr.donorName == "") {
          alert("Account not found !");
          return;
        }
        console.log(onr);
      }
      
    }else {
      if(active == 3) { //Benifactor
        deployed_contract.methods.addNewBenifactor(ipName, ipEmail).send({ from: my_account })
        .once('receipt', (receipt) => {
          console.log(receipt);
        });

      }
      else if(active == 2) {  //Donor
        deployed_contract.methods.addNewDonor(ipName, ipEmail).send({from: my_account})
        .once('receipt', (receipt) => {
          console.log(receipt);
        });

      }
    }

  }

  return (
    <div className="">
      
      <div className="w-4/5 overflow-hidden card lg:w-3/12 pt-2 pb-8 px-6 mt-6 mx-auto h-200px rounded-xl"
        data-aos="zoom-up"
        data-aos-delay="20"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        > 
        <h1 className="text-xl mt-2 font-medium drop-shadow-xl text-orange-600"> { useCase } </h1>
        
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

          <button className="my-2 drop-shadow-lg hover:drop-shadow-xl w-full text-md font-medium text-orange-600 border rounded-3xl py-2 mt-4 border-orange-500 bg-primary"
          onClick={btnClicked}> {useCase == "LOG-IN" ? "Log in" : "Sign up"} </button>
          <label className=" drop-shadow-xl text-xs font-medium text-neutral-400"> {` ${useCase == "LOG-IN" ? "Don't have an Account ?" : "Already have an Account"} `}  
            <span className="text-blue-500 cursor-pointer" onClick={ () => {setUseCase( useCase == "LOG-IN" ? "SIGN-UP" : "LOG-IN")} }> {` ${useCase == "LOG-IN" ? "Create One" : "Log in"} `} </span>
          </label>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
