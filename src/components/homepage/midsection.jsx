//midsection.js
import React from "react";
import Image from "next/image";

function Midsection() {
  return (
    <div>
      {/*father div*/}
      <div className="absolute top-[80.1rem] left-[11rem] box-border w-[61.5rem] h-[28.2rem] 
       text-[1.05rem] text-darkslategray-400 font-open-sans border-[1px] border-solid border-white  lg:flex bg-white">
        <div className="absolute top-[4.53rem] left-[13.25rem] w-[16.56rem] h-[23.75rem]">
          <Image
            className="absolute top-[0rem] left-[0.6rem] w-[12rem] h-[12rem] overflow-hidden object-cover"
            alt="/"
            src="/../public/assets/w.png"
            width="192"
            height="192"
          />
          <div className="absolute top-[13.8rem] left-[0rem] tracking-[0.19px] leading-[1.65rem] inline-block w-[13.13rem]">
            People like you give to your favorite projects; you feel great when
            you get updates about how your money is put to work by trusted
            organizations.
          </div>
        </div>
        <div className="absolute top-[4.84rem] left-[33.38rem] w-[16.75rem] h-[23.75rem]">
          <Image
            className="absolute top-[0rem] left-[0.68rem] w-[12rem] h-[12rem] overflow-hidden object-cover"
            alt=""
            src="/../public/assets/y.png"
            width = "192"
            height = "192"
          />
          <div className="absolute top-[13.8rem] left-[0rem] tracking-[0.19px] leading-[1.65rem] inline-block w-[13.35rem]">
            Projects have the funding they need to listen to feedback and try
            out new ways to work; communities all over the globe get more
            awesome!
          </div>
        </div>
        <div className="absolute top-[5.59rem] left-[52.75rem] w-[16.81rem] h-[21.63rem] text-darkslategray-300 font-roboto">
          <Image
            className="absolute top-[0rem] left-[1.13rem] w-[12rem] h-[12rem] overflow-hidden object-cover"
            alt=""
            src="/../public/assets/z.png"
            width = "192"
            height = "192"
          />
          <div className="absolute top-[12.75rem] left-[0rem] leading-[1.95rem] inline-block w-[13.35rem]">
            Your donation makes a meaningful difference for some of the poorest
            people in the world.
          </div>
        </div>

        <div className="absolute top-[5.21rem] left-[-7.87rem] w-[16.75rem] h-[23.75rem]">
          <Image
            className="absolute top-[0rem] left-[0.6rem] w-[12rem] h-[12rem] overflow-hidden object-cover"
            alt=""
            src="/../public/assets/x.png"
            width = "192"
            height = "192"
          />
          <div className="absolute top-[13.8rem] left-[0rem] tracking-[0.19px] leading-[1.65rem] inline-block w-[13.28rem]">
            Nonprofits around the world apply and join Aasha to access more
            funding, to build new skills, and to make important connections.
          </div>
        </div>
        {/*changes baby */}
        <div className="absolute top-[-23.53rem] left-[-12rem] bg-[lightskyblue] flex flex-row py-[3.63rem] pl-[3.81rem] pr-[3.81rem] items-center justify-start gap-[2.8rem] text-[1.35rem] text-white font-roboto w-[86rem]">

          <div className="relative w-[22.58rem] h-[5.4rem] shrink-0 ml-[18rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[1.8rem] inline-block w-[40rem] text-white">
            Aasha connects nonprofits, donors and companies in nearly every country in the world. We help fellow nonprofits access the funding, tools, training, and support they need to serve their communities.
            </div>
          </div>
        </div>
        <div className="absolute top-[-3.79rem] left-[21.5rem] w-[20.69rem] h-[6.13rem] text-[3.38rem]  bg-white text-darkslategray-100 font-roboto">
          <div className="absolute top-[0.5rem] left-[-0.06rem] tracking-[0.96px] leading-[2.76rem]">
            How It Works
          </div>
        </div>




        {/* below div: look at the bg of first div, you'll know that div is this */}
        <div className="absolute top-[33.53rem] left-[-12rem] bg-[lightskyblue] flex flex-row py-[3.63rem] pl-[3.81rem] pr-[3.81rem] items-center justify-start gap-[2.8rem] text-[1.35rem] text-white font-roboto w-[86rem]">

          <div className="relative w-[22.8rem] h-[3.6rem] shrink-0">
            <div className="absolute top-[0rem] left-[0rem] leading-[1.8rem] inline-block w-[22.8rem]">
              We only accept verified and genuine projects.
            </div>
          </div>

          <div className="relative bg-[#ECF0F3] w-[0.25rem] h-[7.2rem] shrink-0" />

          <div className="relative w-[22.8rem] h-[3.6rem] shrink-0">
            <div className="absolute top-[0rem] left-[0rem] leading-[1.8rem] inline-block w-[22.8rem]">
              We spend a meaningful amount of time researching for charity.
            </div>
          </div>

          <div className="relative bg-[#ECF0F3] w-[0.25rem] h-[7.2rem] shrink-0" />

          <div className="relative w-[22.58rem] h-[5.4rem] shrink-0">
            <div className="absolute top-[0rem] left-[0rem] leading-[1.8rem] inline-block w-[22.58rem]">
              Aasha is independently supported by donors who give directly to
              the projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midsection;