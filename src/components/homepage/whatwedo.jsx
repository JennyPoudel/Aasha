import React from 'react'
import Image from 'next/image';
function Whatwedo() {
  return (
  <div>
  <div className="absolute top-[133.25rem] left-[30rem] box-border w-[34.06rem] h-[6.44rem] text-[3.38rem] text-darkslategray-100 border-[1px] border-solid border-whitesmoke ">
        <div className="absolute top-[0.19rem] left-[3rem] tracking-[0.96px] leading-[2.76rem] inline-block w-[33.94rem] h-[6.25rem] font-medium text:6xl ">
          What We Do
        </div>
      </div>

      <div className="absolute top-[142.06rem] left-[5.38rem] box-border w-[71.18rem] h-[43.13rem] text-left text-[4.05rem] text-lightskyblue border-[1px] border-solid border-whitesmoke">
        <Image
          className="absolute top-[0rem] left-[0rem] rounded-17xl w-[30rem] h-[43.13rem] object-cover"
          alt="/"
          src="/../public/assets/a.png"
          width= '480'
          height='690'
        />
        <div className="absolute top-[8.4rem] left-[42.75rem] w-[28.43rem] h-[26.25rem]">
          <div className="absolute top-[0rem] left-[0rem] tracking-[1.44px] leading-[4.05rem] uppercase font-medium inline-block w-[28.43rem]">
            We provide crisis relief
          </div>
          <div className="absolute top-[9.98rem] left-[0rem] w-[26.25rem] h-[10.8rem] text-[1.8rem] text-darkslategray-100">
            <div className="absolute top-[0rem] left-[0rem] leading-[2.7rem] text-[inherit] inline-block w-[26.25rem] [text-decoration:none]">
              Quickly distributing donations to on-the-ground aid organizations
              and people impacted by emergencies.
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[lightsteelblue] absolute top-[22.65rem] left-[0rem] rounded-9xl-8 w-[15.15rem] h-[3.6rem]">
            <div className="absolute top-[0.9rem] left-[2.4rem] text-[1.35rem] tracking-[0.65px] leading-[1.8rem] font-roboto text-slategray-300 text-left inline-block w-[10.35rem]">
              Browse projects
            </div>
          </button>
        </div>
      </div>



      <div className="absolute top-[245.84rem] left-[5.69rem] box-border w-[70.65rem] h-[43.13rem] text-left border-[1px] border-solid border-whitesmoke">
        <Image
          className="absolute top-[0rem] left-[0rem] rounded-17xl w-[30rem] h-[43.13rem] object-cover"
          alt="/"
          src="/../public/assets/b.png"
          width='480'
          height='690'
        />
        <div className="absolute top-[3.66rem] left-[42.75rem] w-[27.9rem] h-[33rem]">
        <button className="cursor-pointer [border:none] p-0 bg-[lightsteelblue] absolute top-[29.65rem] left-[0rem] rounded-9xl-8 w-[15.15rem] h-[3.6rem]">
            <div className="absolute top-[0.9rem] left-[2.4rem] text-[1.35rem] tracking-[0.65px] leading-[1.8rem] font-roboto text-slategray-300 text-left inline-block w-[10.35rem]">
              Browse projects
            </div>
          </button>
          <div className="absolute top-[0rem] left-[0rem] w-[27.9rem] h-[12.15rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[1.44px] leading-[4.05rem] uppercase font-medium inline-block w-[27.9rem]  text-6xl">
              We drive long-term change
            </div>
          </div>
          <div className="absolute top-[14.03rem] left-[0rem] w-[26.4rem] h-[13.5rem] text-[1.8rem] text-slategray-300">
            <div className="absolute top-[0rem] left-[0rem] leading-[2.7rem] inline-block w-[26.4rem]">
              Funding critical work on some of the world’s biggest challenges,
              from social equality and climate change to public education and
              beyond.
            </div>
          </div>
        </div>
      </div>


      <div className="absolute top-[193.94rem] left-[15.69rem] box-border w-[68.06rem] h-[43.13rem] text-left border-[1px] border-solid border-whitesmoke">
        <Image
          className="absolute top-[0rem] left-[38.25rem] rounded-17xl w-[30rem] h-[43.13rem] object-cover"
          alt="/"
          src="/../public/assets/c.png"
          width = '480'
          height = '690'
        />
        <div className="absolute top-[1.5rem] left-[3.06rem] tracking-[1.44px] leading-[4.05rem] uppercase font-medium inline-block w-[22.8rem] h-[16rem]">
        <div className='font-medium text-6xl'>
        We support important movements
        </div>
       
       </div>
        <div className="absolute top-[19.13rem] left-[3.06rem] w-[26.4rem] h-[13.5rem] text-[1.8rem] text-darkslategray-100">
          <div className="absolute top-[0rem] left-[0rem] leading-[2.7rem] inline-block w-[26.4rem]">
            Collaborating with partners like community leaders and celebrity
            activists to create a central, trustworthy place where people can
            help.
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[lightsteelblue] absolute top-[34.56rem] left-[3.06rem] rounded-9xl-8 w-[18.23rem] h-[3.6rem]">
          <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.85rem] left-[3.63rem] text-[1.35rem] tracking-[0.65px] leading-[1.8rem] font-roboto text-slategray-300 text-left inline-block w-[10.95rem]">
            Browse projects
          </div>
        </button>
      </div>
  </div>
  )
}

export default Whatwedo;