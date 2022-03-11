import React, { useState } from "react";
import LearnPage from "../Layout Pages/LearnPage";
import AdminPage from "../Actor pages/AdminPage";
import BenifactorPage from "../Actor pages/BenifactorPage";
import DonorPage from "../Actor pages/DonorPage";
import LoginPage from "../Layout Pages/LoginPage";

function StartPage() {
  const[login, setLogin] = useState(-1);

  const firstTime = (localStorage.getItem("newUser") != null) ? localStorage.getItem("newUser") : true;

  console.log("Start Page " + firstTime + " "+ login);
  // 0 -> Log in Page
  // 1 -> Admin Page
  // 2 -> Donor Page
  // 3 -> Benifactor Page
  if(firstTime === true) {
    return (
      <LearnPage setLogin={setLogin}login={login} />
    );
  }else if(login === 0) {
    return (
      <LoginPage setLogin={setLogin} />
    );
  }
  else if(login === 1) {
    return (
      <AdminPage actor={"Admin"}  />
    );
  } else if(login === 2) {
    return (
      <DonorPage actor={"Donor"} />
    );
  } else if(login === 3) {
    return (
      <BenifactorPage actor={"Benifactor"}  />
    );
  } 
  
  return (
    <LoginPage setLogin={setLogin} />
  );
}

export default StartPage;