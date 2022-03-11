import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function DonorFirstCard() {
    AOS.init();

  return (
    <div className="rounded-xl card py-4 px-8 mt-4"
    // data-aos="slide-up"
    // data-aos-delay="20"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center"
    >
        <div>
            <h1 className="drop-shadow-xl  font-medium text-black"> Khamkar Abhijeet P. </h1>
        </div>
        <div className="flex flex-row justify-between">
            <h1 className="mr-6 text-xs font-medium text-neutral-400 mt-2"> Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
            Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
            Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine.
            Get information on back to school for kids, kindergarten, tests and exams, homework, homeschooling, and college from the editors of Parents magazine. </h1>
            <h1 className="drop-shadow-xl  font-medium text-black"> 1243 </h1>
        </div>
    </div>
  )
}

export default DonorFirstCard