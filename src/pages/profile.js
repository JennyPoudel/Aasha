

import React from "react";
import { Session } from "next-auth"
import Image from "next/image";
import Navbar from "../components/homepage/nav";
import RadioComponent from "../components/homepage/RadioComponent";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react"
import { useState } from "react";
import { useRouter } from 'next/router';

const IndividualForm = () => {
  

  const { data: session } = useSession();
  //const session = getSession({ req });
  //  if (!session) {
  //     res.status(401).json({ error: 'Unauthorized' });
  //   return;
        //}
  const [userI, setUserI] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    District: "" ,
    PhoneNo: "" ,
    Email:"" ,
    DOB: ""  ,
    State: ""
 });



  const handleSubmit = async (event) => {
  
   event.preventDefault();
    const response = await fetch('/api/INDapi', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json'
       },
       body: JSON.stringify({userI}),
      });
          const data = await response.json();
          if(response.ok) console.log(data)
          if(response.ok) router.push("/newpage")
        };

  return (
    
    <>
    
    <Navbar/>
    <div className="relative bg-whitesmoke w-full h-[83.94rem] overflow-hidden text-left text-[0.72rem] text-black font-paragraph-ibm-plex-sans-medium">
      <Image
        className="absolute top-[11.31rem] left-[49.5rem] w-[40.5rem] h-[72.63rem] object-cover"
        alt=""
        src="/../public/assets/bighand.png"
        width = '648'
        height = '1162'
      />
    {/* <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user._doc.username}</p>
            <div>)} */}

      <div className="absolute h-[4.09%] w-[20.3%] top-[32.39%] right-[70.88%] bottom-[63.52%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Email
        </div>
        <input
          className="[border:none] font-paragraph-ibm-plex-sans-medium text-[0.72rem] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="email"
          value={userI.Email}
          onChange={({target})=>
          setUserI({...userI,Email:target.value})}
        />
      </div>
      <div className="absolute w-[14.24%] top-[calc(50%_-_321.5px)] right-[60.42%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          D.O.B
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="date"
          value={userI.DOB}
          onChange={({target})=>
          setUserI({...userI,DOB:target.value})}
        
          
        />
      </div>
      <div className="absolute w-[13.47%] top-[calc(50%_-_321.5px)] right-[78.13%] left-[8.4%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Phone No.
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="number"
          value={userI.PhoneNo}
          onChange={({target})=>
          setUserI({...userI,PhoneNo:target.value})}
        
         
        
        />
      </div>
      <div className="absolute h-[4.1%] w-[20.24%] top-[38.94%] right-[60.42%] bottom-[56.96%] left-[9%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          State
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={userI.State}
          onChange={({target})=>
          setUserI({...userI,State:target.value})}
        
        />
      </div>
      {/* <div className="absolute w-[18.26%] top-[calc(50%_-_58.68px)] right-[56.39%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          National I.D
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          required
        />
      </div> */}
     
      <div className="absolute w-[13.89%] top-[calc(50%_-_60.68px)] right-[77.29%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[150%]">
          District
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={userI.District}
          onChange={({target})=>
          setUserI({...userI,District:target.value})}
        
        />
      </div>
     
      {/* <input
        className="absolute top-[47.47rem] left-[7.38rem] rounded-smi-5 box-border w-[12.78rem] h-[12.31rem] overflow-hidden border-[0.5px] border-solid border-black"
        type="file"
        required
      />
      <div className="absolute top-[45.06rem] left-[7.38rem] text-[0.75rem] leading-[0.75rem] font-noto-sans inline-block w-[12.19rem] h-[1.5rem]">
        PROFILE PICTURE
      </div> */}
     
      <Link href = '/SignUpIndividual'>
      <button className="cursor-pointer [border:none] p-0 bg-[#64abd3] absolute top-[63.44rem] left-[18.56rem] w-[7.17rem] h-[2.09rem] flex flex-col items-start justify-start rounded-md"
      onClick={handleSubmit}
      >
        <div className="self-stretch rounded-[4.28px] bg-text-link h-[2.14rem] shrink-0 overflow-hidden flex flex-col py-[0.18rem] px-[0.71rem] box-border items-center justify-center">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="self-stretch relative text-[0.8rem] font-medium font-paragraph-ibm-plex-sans-medium text-text-primary-white text-center flex items-center justify-center">
            Next
            </div>
          </div>
        </div>
      </button>
      </Link>
      <div className="absolute h-[4.09%] w-[20.3%] top-[13.48%] right-[71.3%] bottom-[82.43%] left-[8.4%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          FirstName
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={userI.FirstName}
          onChange={({target})=>
          setUserI({...userI,FirstName:target.value})}
        
        />
      </div>
      <div className="absolute h-[4.09%] w-[20.3%] top-[19.06%] right-[71.23%] bottom-[76.84%] left-[8.47%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          LastName
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={userI.LastName}
          onChange={({target})=>
          setUserI({...userI,LastName:target.value})}
        
        />
      </div>
      
      <div className="absolute h-[4.09%] w-[20.3%] top-[13.48%] right-[49.22%] bottom-[79.45%] left-[30.49%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
      <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          MiddleName
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={userI.MiddleName}
          onChange={({target})=>
          setUserI({...userI,MiddleName:target.value})}
        
        />
      </div>

      {/* <div className="absolute h-[6.3%] w-[20.3%] top-[19%] right-[49.22%] bottom-[79.45%] left-[30.49%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <RadioComponent/>
      </div> */}
    </div>
   
    </>
  );
};

export default IndividualForm;


