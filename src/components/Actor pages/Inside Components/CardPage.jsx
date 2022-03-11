import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Card( {title, description} ) {

  AOS.init();

    return (
      <div
      //  data-aos="zoom-up"
      //   data-aos-delay="20"
      //   data-aos-duration="1000"
      //   data-aos-easing="ease-in-out"
      //   data-aos-once="false"
      //   data-aos-anchor-placement="top-center"
       className="w-full my-10 card rounded-2xl">
          <div className="px-12 py-4">
            <h1 className="text-lg font-medium my-3 text-orange-600"> {title} </h1>
            <p className="my-4 text-gray-600"> {description} </p>
          </div>
      </div>
    );
  }
  
  export default Card;
  