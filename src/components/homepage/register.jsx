import React from "react";
import Link from "next/link";
function Register() {
  return (
    <div className="absolute top-[294.63rem] left-[0rem] flex flex-row items-start justify-start text-[2.17rem] text-darkslateblue font-poppins border-[1px] border-solid border-black w-full h-[498] ">
      <div className="relative bg-[#64ABD3] w-[50%] h-[31.13rem] shrink-0">
        <div className="absolute top-[5.03rem] left-[6.53rem] w-[32.03rem] h-[21rem]">
          <div className="absolute top-[0.08rem] left-[1.95rem] w-[28.13rem] h-[2.93rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[2.93rem] inline-block w-[28.13rem]">
              Start a fundraiser
            </div>
          </div>
          <div className="absolute top-[5.35rem] left-[0.04rem] w-[32.03rem] h-[8.7rem] text-[1.27rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[2.16rem] inline-block w-[32.03rem]">
              Register here, in order to begin this journey. Register your
              project, and get your own dashboard. Submit your statement of
              purpose. Link your financial medium and receive donations.
            </div>
          </div>
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[16.5rem] left-[5rem] rounded-3xs-6 box-border w-[12.45rem] h-[4.58rem] border-[2.4px] border-solid border-darkslateblue">
            <div className="absolute top-[1.27rem] left-[1.65rem] text-[1.2rem] leading-[2.04rem] font-poppins text-darkslateblue text-center inline-block w-[9.15rem]">
              <Link href = '/fundraiser'>Register</Link>
            </div>
          </button>
        </div>
      </div>

      <div className="relative bg-[#B2BB1E] w-[50%] h-[31.13rem] shrink-0">
        <div className="absolute top-[5.25rem] left-[6.53rem] w-[32.03rem] h-[21rem]">
          <div className="absolute top-[-0.15rem] left-[3.45rem] w-[25.13rem] h-[2.93rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[2.93rem] inline-block w-[25.13rem]">
              Partner as non-profit
            </div>
          </div>
          <div className="absolute top-[3.75rem] left-[0rem] w-[32.03rem] h-[8.7rem] text-[1.27rem]">
            <div className="absolute top-[0.69rem] left-[0.16rem] leading-[2.16rem] inline-block w-[32.03rem]">
              Partner with us as non-profits. Register your campaign by filling
              a form containing the purpose for donations. Link the financial
              medium and begin receiving donations.
            </div>
          </div>
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[16.27rem] left-[9.75rem] rounded-3xs-6 box-border w-[12.6rem] h-[4.58rem] border-[2.4px] border-solid border-darkslateblue">
            <div className="absolute top-[1.27rem] left-[1.65rem] text-[1.2rem] leading-[2.04rem] font-poppins text-darkslateblue text-center inline-block w-[9.3rem]">
              <Link href = '/Orgform'>Join</Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
