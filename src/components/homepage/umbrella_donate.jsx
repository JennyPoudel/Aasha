//umbrella.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Umbrella_donate() { 

  return (
    <div className="relative w-full h-[55.81rem] text-[1.88rem] text-slategray-100 ">
      {/* Image */}
      <div className="relative w-full h-[0px] pb-[58.5%]">
        <Image
          src="/../public/assets/umbrella.png"
          alt="/"
          layout="fill"
          objectFit="cover"
        />
      </div>

     {/* Text */}
     <div className="absolute inset-0 flex justify-center items-center text-center">
        <div className="text-white tracking-wider leading-[1.95rem] font-bold absolute top-[9rem]">
          Together, We Can Make a Difference
        </div>
      </div>


      {/* Button */}
{/* Button */}
<div className="absolute bottom-[35rem] left-0 right-0 flex justify-center mt-8">
  <button className="cursor-pointer border-none p-0 bg-lightsteelblue 
  w-64 h-8 sm:w-72 sm:h-12 md:w-80 md:h-12 lg:w-[22rem] lg:h-16 xl:w-[25rem] xl:h-20 2xl:w-[30rem] 2xl:h-20 shadow-xl shadow-gray-400 rounded-xl uppercase bg-[#B2BB1E]">
    <div className="flex justify-center items-center h-full text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <Link href = '/Allprojects'>Donate Now</Link>
    </div>
  </button>
</div>
</div>



    
  );
}

export default Umbrella_donate;