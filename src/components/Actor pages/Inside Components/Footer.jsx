import React from "react";
import Tooltip from '@mui/material/Tooltip';

function Footer() {
  return (
    <div className="footer pt-6">
        <div className="divide-y divide-slate-300">
          <div className=""> </div>
          <div className="w-3/4 mx-auto flex justify-between  px-4 text-sm pt-4 pb-4">
            <div className="flex">
              <p> Copyright © 2022 </p> 
              <p> CharityChain </p>
              <Tooltip title="Learn more about CharityChain" arrow>
                 <p className="ml-4 cursor-pointer	text-slate-500	hover:text-slate-800	"> Learn More </p>
               </Tooltip>
            </div>
            <div className="flex align-middle">
              <span> Made with ❤️ by Prathamesh & Abhijeet </span>
              <span className="ml-2 font-bold"> Ind </span>
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
