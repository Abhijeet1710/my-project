import React from "react";
function Footer() {
  return (
    <div className="footer pt-4 bt-2">
        <div className="divide-y divide-slate-300">
          <div className=""> </div>
          <div className="w-3/4 mx-auto flex justify-between  px-4 text-sm pt-4 pb-4">
            <div className="flex">
              <p> Copyright © 2022 </p> 
              <p> CharityChain </p>
              <p className="ml-4 cursor-pointer	text-slate-500	hover:text-slate-800	"> Learn More </p>
            </div>
            <div className="flex align-middle">
              <span className=""> Ind </span>
              <span className="ml-1">
                 <img width="22px" height="22px" src="https://img.icons8.com/fluency/96/000000/india-circular.png"/>
              </span>
            </div>
          </div> 
        </div>
    </div>
  );
}

export default Footer;
