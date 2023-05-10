import React from 'react'
import Image from 'next/image';
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
function FooterForAboutPage () {
  return (
    <div className="absolute top-[142.63rem] left-[0rem] box-border w-full h-[21.38rem] border-[1px] border-solid border-whitesmoke mt-[7rem] ">

        
        <div className="absolute top-[0rem] left-[48.6rem] w-[25.2rem] h-[15.08rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[8.7rem] h-[15.08rem]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] w-[3.75rem] h-[2.03rem]">
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black text-left inline-block w-[3.75rem]">
                About
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[3.38rem] left-[0rem] w-[8.7rem] h-[2.03rem]">
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black text-left inline-block w-[8.7rem]">
                Current Funds
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[6.6rem] left-[0rem] w-[8.7rem] h-[2.03rem]"
             //onclick here
            >
              <div  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black text-left inline-block w-[8.7rem]">
                Partnerships
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9.82rem] left-[0rem] w-[8.7rem] h-[2.03rem]">
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black text-left inline-block w-[8.7rem]">
                Impact
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[13.05rem] left-[0rem] w-[8.7rem] h-[2.03rem]">
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black text-left inline-block w-[8.7rem]">
                Contact
              </div>
            </button>
          </div>
          <div className="absolute top-[0rem] left-[16.5rem] w-[8.7rem] h-[15.08rem]">
            
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] w-[3.75rem] h-[2.03rem]"
             // onClick={onFooterAboutTitle1Click}
            >
              <div  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black  text-left inline-block w-[4.5rem]">
                Donate
              </div>
            </button>

            <button className="absolute top-[3.35rem] left-[0.03rem] w-[4.25rem] h-[2.06rem]">
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[-3rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black -left inline-block w-[8.7rem]">
                FAQs
              </div>
            </button>
            <div className="absolute top-[6.6rem] left-[0.03rem] w-[6.88rem] h-[2rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black  text-left inline-block w-[8.7rem]">
                Financials
              </button>
            </div>
            <div className="absolute top-[9.85rem] left-[0.03rem] w-[13.63rem] h-[2rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black  text-left inline-block w-[13.65rem]">
                Policies & Disclosures</button>
            </div>
            
            <div className="absolute top-[13.04rem] left-[-0.04rem] w-[14.31rem] h-[2rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.35rem] leading-[2.03rem] font-roboto text-black  text-left inline-block w-[14.33rem]">
                Off-Platform Donations
              </button>
            </div>

          </div>
        </div>

        <Image
          className="absolute top-[-1.84rem] left-[0rem] w-[43.75rem] h-[17.5rem] overflow-hidden"
          alt="/"
          src="/../public/assets/logoaasha 3.png"
          width = '700'
          height = '280'
        />
        <div className="flex items-center  mt-[17rem] justify-start gap-[2rem] w-full sm:w-[80%] ml-[5rem]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:nscale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
        
    </div>

  )
}

export default FooterForAboutPage;
