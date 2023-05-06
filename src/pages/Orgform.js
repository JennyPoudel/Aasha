import React from 'react'
import Image from 'next/image';
import Navbar from 'src/components/homepage/nav';
import DropdownMenu from 'src/components/homepage/dropdown';
import Link from 'next/link';
import FileUploadForm from '../components/homepage/FileUploadForm';
function Orgform() {
  return (
    <div>
      <Navbar/>
      <div className="relative bg-whitesmoke w-full h-[83.94rem] overflow-hidden text-left text-[0.72rem] text-black font-paragraph-ibm-plex-sans-medium">
      <Image
        className="absolute top-[15.63rem] left-[49.5rem] w-[40.5rem] h-[68.31rem] object-cover"
        alt=""
        src="/../public/assets/handy.png"
        width = '648'
        height = '1093'
      />
      
      <div className="absolute h-[4.62%] w-[31.39%] top-[12.62%] right-[59.79%] bottom-[76.77%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Organization Name
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Name"
        />

      </div>
      <div className="absolute h-[4.09%] w-[20.3%] top-[26.70%] right-[70.88%] bottom-[63.52%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Email
        </div>
        <input
          className="[border:none] font-paragraph-ibm-plex-sans-medium text-[0.72rem] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div className="absolute w-[14.24%] top-[20%] right-[60.42%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Contact
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="number"
          placeholder="Phone2"
        />
      </div>
      <div >
        <DropdownMenu/>
      </div>
     
      <div className="absolute w-[13.47%] top-[20%] right-[77.71%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Established Date
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="Date"
          placeholder=""
        />
      </div>
      <div className="absolute h-[4.1%] w-[14.24%] top-[34.94%] right-[60.42%] bottom-[56.96%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          State
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Bagmati"
        />
      </div>
      <div className="absolute w-[18.26%] top-[42%] right-[56.39%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Organization Registration No.
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
        />
      </div>
      <div className="absolute h-[4.1%] w-[13.89%] top-[34.94%] right-[77.29%] bottom-[56.96%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Country
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Nepal"
        />
      </div>
      <div className="absolute w-[13.89%] top-[42%] right-[77.29%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[150%]">
          District
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Kathmandu"
        />
      </div>
    
      <FileUploadForm/>
      <div className="absolute top-[42.06rem] left-[7rem] text-[0.75rem] leading-[0.75rem] font-noto-sans inline-block w-[12.19rem] h-[1.5rem]">
        PROFILE PICTURE
      </div>
      <div className="absolute top-[60rem] left-[6.44rem] w-[30.13rem] h-[4.81rem] overflow-hidden text-[0.75rem] font-noto-sans">
        <div className="absolute top-[1rem] left-[1.25rem] w-[32.13rem] h-[3.53rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[32.13rem] h-[2.59rem] flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative leading-[0.56rem]">
              SOCIAL MEDIA LINK
            </div>
            <input
              className="bg-text-primary-white self-stretch rounded flex flex-col p-[0.5rem] items-start justify-start border-[0.5px] border-solid border-lightgray-300"
              type="text"
            />
            <div className="self-stretch relative text-[0.38rem] leading-[0.56rem] text-dimgray-100 hidden [text-shadow:0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25),_0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:0.5px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
      </div>
      
     <Link href = '/SignUpOrg'>
      <button className="cursor-pointer [border:none] p-0  absolute top-[67rem] left-[18.56rem] w-[7.17rem] h-[2.09rem] flex flex-col items-start justify-start bg-[#64abd3] rounded-md">
        <div className="self-stretch rounded-[4.28px] bg-text-link h-[2.14rem] shrink-0 overflow-hidden flex flex-col py-[0.18rem] px-[0.71rem] box-border items-center justify-center">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="self-stretch relative text-[0.8rem] font-medium font-paragraph-ibm-plex-sans-medium text-text-primary-white text-center flex items-center justify-center">
             Next
            </div>
          </div>
        </div>
      </button>
      </Link>
    </div>
  </div>
  )
}

export default Orgform;