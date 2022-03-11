import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faCircleDollarToSlot, faUserGear, faUserLarge, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function LoginPage( {setLogin} ) {
  AOS.init();
  const [active, setActive] = useState(1);

  //Active
  // 1 -> Admin
  // 2 -> Donor
  // 3 -> Benifactor

  // 0 -> Login Page
  // 1 -> Admin Page
  // 2 -> Donor Page
  // 3 -> Benifactor Page

  const loginBtnClicked = () => {
    setLogin(active);
  }

  return (
    <div className="">
      
      <div className="w-4/5 overflow-hidden card lg:w-3/12 py-4 px-6 my-6 mx-auto h-200px rounded-xl "
        data-aos="zoom-up"
        data-aos-delay="20"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        > 
        <h1 className="text-xl mt-2 font-medium drop-shadow-xl text-orange-600">LOG-IN</h1>
        
        <div className="px-2">
          <div className="w-full mt-6 border-b border-orange-400">
            <label className="drop-shadow-xl text-xs font-medium text-neutral-400"> Full Name </label>
            <div className="flex flex-row">
              <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faUserLarge} />   
              <input className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
            </div>
            
          </div>

          <div className="w-full mt-4 border-b border-orange-400">
            <label className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> Email Addres </label>
            <div className="flex flex-row">
              <FontAwesomeIcon className="drop-shadow-xl mr-3 ml-1 py-2" icon={faEnvelope} />   
              <input className="drop-shadow-xl w-full bg-transparent outline-none font-medium"/>
            </div>
          </div>

          
          <h2 className=" grow-0 text-sm drop-shadow-xl mt-8 font-medium text-black-600">Your Address </h2>
          <label className="drop-shadow-xl text-xs font-medium text-neutral-400 placeholder"> 0x78D6ABFCE9264a08d019f3938D18AB6d04212C88 </label>


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

          <button className="drop-shadow-lg hover:drop-shadow-xl w-full text-md font-medium text-orange-600 border rounded-3xl py-2 mt-10 mb-6 border-orange-500 bg-primary"
          onClick={loginBtnClicked}> Log in </button>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
