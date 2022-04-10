import React, { useState } from "react";
import LearnPage from "../Layout Pages/LearnPage";
import AdminPage from "../Actor pages/AdminPage";
import BenifactorPage from "../Actor pages/BenifactorPage";
import DonorPage from "../Actor pages/DonorPage";
import LoginPage from "../Layout Pages/LoginPage";

function StartPage( {my_account, deployed_contract} ) {
  const[login, setLogin] = useState(-1);
  const[data, setData] = useState([]);

  const firstTime = (localStorage.getItem("newUser") != null) ? localStorage.getItem("newUser") : true;

  // 0 -> Log in Page
  // 1 -> Admin Page
  // 2 -> Donor Page
  // 3 -> Benifactor Page
  if(firstTime === true) {
    return (
      <LearnPage setLogin={setLogin}login={login} />
    );
  }
  else if(login === 1) {
    return (
      <AdminPage actor={"Admin"} my_account={my_account} deployed_contract={deployed_contract}  />
    );
  } else if(login === 2) {
    return (
      <DonorPage actor={"Donor"} data={data} />
    );
  } else if(login === 3) {
    return (
      <BenifactorPage actor={"Benifactor"}  />
    );
  } 
  
  return (
    <LoginPage setLogin={setLogin} my_account={my_account} setData={setData} deployed_contract={deployed_contract}  />
  );
}

export default StartPage;