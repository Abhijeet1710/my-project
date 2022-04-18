import React from "react";
import Card from "../Actor pages/Inside Components/CardPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../Layout Pages/Navbar";

function LearnPage( {setLogin, login } ) {
  // 1 -> Admin Page
  // 2 -> Donor Page
  // 3 -> Benifactor Page

  const letsStartBtnClicked = () => {
    localStorage.setItem("newUser", false);
    // console.log(localStorage.getItem("newUser"));
    (login !== 0) ? setLogin(0) : setLogin(-1);
  }

  return (
    <>
    <div className="mx-auto w-3/4 h-full pb-12">
        <Card data-aos="fade-up" title="What is CharityChain ?"
              description="Benefactors don’t have trust about how donated
              money is being used. Charities are vulnerable to the same
              types of fraud that afflict businesses, such as embezzlement
              and executive misuse of money. Recently, blockchain
              technology have been implemented in different sectors. The
              use of blockchain technology allows you to make the process
              of giving and receiving money more transparent. It is
              necessary to build a single platform for tracking donations
              that will track all information regarding gifts, transactions,
              and donors. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. Based on blockchain technology, the system
              provides transparent accounting of operations for donors,
              charitable foundations, and recipients. A transparent
              contribution channel should be available on a philanthropic
              platform, allowing public users and contributors to follow
              and monitor where, when, and to whom charity donations
              were disbursed." />
        <Card data-aos="fade-up" title="What is CharityChain ?"
              description="Benefactors don’t have trust about how donated
              money is being used. Charities are vulnerable to the same
              types of fraud that afflict businesses, such as embezzlement
              and executive misuse of money. Recently, blockchain
              technology have been implemented in different sectors. The
              use of blockchain technology allows you to make the process
              of giving and receiving money more transparent. It is
              necessary to build a single platform for tracking donations
              that will track all information regarding gifts, transactions,
              and donors. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. Based on blockchain technology, the system
              provides transparent accounting of operations for donors,
              charitable foundations, and recipients. A transparent
              contribution channel should be available on a philanthropic
              platform, allowing public users and contributors to follow
              and monitor where, when, and to whom charity donations
              were disbursed Benefactors don’t have trust about how donated
              money is being used. Charities are vulnerable to the same
              types of fraud that afflict businesses, such as embezzlement
              and executive misuse of money. Recently, blockchain
              technology have been implemented in different sectors. The
              use of blockchain technology allows you to make the process
              of giving and receiving money more transparent. It is
              necessary to build a single platform for tracking donations
              that will track all information regarding gifts, transactions,
              and donors. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. Based on blockchain technology, the system
              provides transparent accounting of operations for donors,
              charitable foundations, and recipients. A transparent
              contribution channel should be available on a philanthropic
              platform, allowing public users and contributors to follow
              and monitor where, when, and to whom charity donations
              were disbursed.Benefactors don’t have trust about how donated
              money is being used. Charities are vulnerable to the same
              types of fraud that afflict businesses, such as embezzlement
              and executive misuse of money. Recently, blockchain
              technology have been implemented in different sectors. The
              use of blockchain technology allows you to make the process
              of giving and receiving money more transparent. It is
              necessary to build a single platform for tracking donations
              that will track all information regarding gifts, transactions,
              and donors. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. The purpose of this article is to describe the
              creation of a blockchain-based infrastructure for tracking
              donations. Based on blockchain technology, the system
              provides transparent accounting of operations for donors,
              charitable foundations, and recipients. A transparent
              contribution channel should be available on a philanthropic
              platform, allowing public users and contributors to follow
              and monitor where, when, and to whom charity donations
              were disbursed." />

        <div className="flex justify-end mt-4 mb-12">
          <button className="flex px-4 py-3 font-semibold rounded-md letsStart" onClick={letsStartBtnClicked}> Lets Start
           <img width="22px" height="22px" className="ml-2" src="https://img.icons8.com/plumpy/96/000000/chevron-right.png"/>  
          </button> 
        </div>
    </div>
    </>
  );
}

export default LearnPage;

// Persistent

// CTC = 4.71
// basic = 11800
// Gross = 4.3, Monthly = 35.8K = 36K


// InHand = Fixed - PF - Gratiuity - Taxes


// Accolite Digital

// CTC = 5 + 2L Tenour Bonus (40K every 6 months 5 times)
// basic = 18496
// Gross = 4.23, Monthly = 35.1K = 35 + 7K => 42K
// Fixed = 4.43

//Inhand = 36916 - 1800 - 896 = 34220

