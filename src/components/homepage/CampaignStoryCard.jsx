import React from "react";
import Image from "next/image";
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CampaignStoryCard = () => {
  const router = useRouter();
  const { success, canceled } = router.query;

	useEffect(() => {
		if (success !== undefined || canceled !== undefined) {
			if (success) {
				console.log(
					'Order placed! You will receive an email confirmation.'
				);
			}

			if (canceled) {
				console.log(
					'Order canceled -- continue to shop around and checkout when you’re ready.'
				);
			}
		}
	}, [success, canceled]);

  return (
    <form action='/api/checkout_sessions' method='POST'>
   <>
   <div className="relative bg-whitesmoke w-full h-[132.63rem] overflow-hidden flex flex-col items-center justify-start gap-[6.56rem] text-center text-[2rem] text-black font-roboto">
      
      <div className="w-[55.63rem] overflow-hidden flex flex-row py-[1.06rem] px-[1.88rem] box-border items-start justify-start mt-[10rem]">
        <div className="relative leading-[1.99rem] font-extrabold w-[55rem]">
          PROJECT TITLE
        </div>
      </div>

      <div className="rounded-md mt-[-3rem] bg-text-primary-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[57.31rem] h-[24.81rem] shrink-0 overflow-hidden flex flex-col py-[1.13rem] px-[0rem] items-center justify-start gap-[3.88rem] text-left text-[1.05rem] text-darkslategray-400 border-[3px] border-solid border-black bg-[gray]">
        <div className="overflow-hidden flex flex-col py-[2.5rem] px-[0.63rem] items-start justify-start ">
          <div className="relative w-[22.38rem] h-[1.88rem] shrink-0 ">
            <div className="absolute top-[0.03rem] left-[0.03rem] w-[0.75rem] h-[1.88rem] bg-[white]" />
            <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01) ">{`raised of  `}</div>
            </div>
            <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden bg-[white]" />
            <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden bg-[white]" />
          </div>
          {/*<ProgressBar className="w-[22.42rem] relative" /> progess bar yeta*/}
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[#B2BB1E] relative rounded-8xs w-[17.75rem] h-[3.75rem] shrink-0 overflow-hidden hover:bg-lightskyblue hover:shadow-[0px_4px_4px_rgba(100,_171,_211,_0.25)] hover:animate-[3s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] rounded-md"
        
        >
          <div className="absolute top-[0rem] left-[3.1rem] text-[1.5rem] tracking-[6px] leading-[1.95rem] font-roboto text-darkslategray-600 text-center inline-block w-[12.06rem]">
            Donate Now
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-[50px] w-[12.5rem] h-[3.13rem] shrink-0">
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]" />
          <div className="absolute h-full w-full top-[0rem] left-[0rem] text-[0.75rem] font-inter text-darkslategray-700 text-center flex items-center justify-center bg-[#64abd3] rounded-md">
            FOLLOW THIS CAMPAIGN
            
          
          </div>
        </button>
      </div>


      <div className="rounded-md mt-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] overflow-hidden flex flex-col py-[3.56rem] px-[2rem] items-center justify-start gap-[0.94rem] text-[1.5rem] text-yellowgreen-200 border-[2px] border-solid border-black">
        <div className="rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-gray-100">
          <Image
            className="relative w-[22rem] h-[16.56rem] shrink-0 object-cover"
            alt=""
            src="/../public/assets/profilepic.png"
            width = '352'
            height = '265'
          />
        </div>
        <div className="relative w-[53.13rem] h-[42.81rem] shrink-0 overflow-hidden">
          <i className="absolute top-[1.19rem] left-[11.31rem] tracking-[1.2px] leading-[1.8rem] uppercase flex font-extralight items-center justify-center w-[29.5rem] h-[5.25rem]">
            CAMPAIGN STORY
          </i>
          
          <i className="absolute top-[5rem] left-[0.25rem] tracking-[1.2px] leading-[1.8rem] uppercase flex font-extralight text-black items-center w-[51.5rem] h-[31.31rem]">
            <span className="[line-break:anywhere] w-full">
              <p>
                I hope this letter finds you in good health and spirits. I am
                writing to you on behalf of [Organization's Name], a non-profit
                organization dedicated to [Cause/mission of the organization].
                We are reaching out to you today with a humble request for your
                support through a donation.
             
             
                As you may know, [Briefly explain the importance and impact of
                the cause/mission of your organization]. Our organization has
                been working tirelessly to [Highlight the accomplishments and
                ongoing efforts of your organization]. However, in order to
                continue our vital work, we rely heavily on the generosity of
                individuals like you who share our passion for making a
                difference in the lives of those in need.
              </p>
            </span>
          </i>
        </div>
      </div>
    </div>
   
   </>
   </form>
     )
};

export default CampaignStoryCard;
