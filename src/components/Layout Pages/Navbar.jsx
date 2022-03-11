import React from "react";


function Navbar() {
  return (
    <div className="">
      <div className="mx-auto w-4/5 flex justify-around">
        <div className="flex text-center justify-center">
          <img src={require('../Resources/clearhead1.png')} className="w-30 h-16 mt-12 mb-6" alt='Logo' />
        </div>     
      </div>
    </div>
  );
}

export default Navbar;
