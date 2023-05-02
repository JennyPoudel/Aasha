import Donationbox from '../../components/homepage/donationbox'
import Footer from '../../components/homepage/footer'
import Navbar from '../../components/homepage/nav'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
function Allprojects() {
  const router = useRouter();
const handleDonate1 = () => {
  
  router.push(`/Allprojects/${router.query.fundraiserTitle}`);
}


  return (
    <div>
    
      <Navbar/>



      <Image
    className='absolute top-[6rem]'
    alt = ""
    src = '/../public/assets/childs.png'
    width = '1440'
    height = '458'
    />

    <div className="absolute top-[40rem] left-[0rem] bg-text-primary-white w-[75rem] h-[19rem]">
           
            <Image
              className="absolute top-[0.08rem] left-[0.08rem] w-[24.98rem] h-[18.23rem] object-cover"
              alt=""
              src="/../public/assets/project_image.png"
              width = '400'
              height = '300'
            />


            <div className="absolute top-[16.5rem] left-[27.25rem] w-[22.38rem] h-[1.88rem]">
              <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`raised of  `}</div>
              </div>
              <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden" />
              <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden" />
            </div>


            <div className="absolute top-[16rem] left-[56.44rem] w-[13.81rem] h-[2.88rem]">
             
              <button className="cursor-pointer [border:none] p-0 bg-[#8ab61e] absolute top-[0rem] left-[6.3rem] w-[7.5rem] h-[2.85rem] rounded-md"
                //problems  here................
               onClick={handleDonate1}>

                <div className="absolute top-[0rem] left-[0rem] bg-yellowgreen-200 w-[7.5rem] h-[2.85rem]" />
                <div className="absolute top-[0.36rem] left-[2rem] text-[0.75rem] tracking-[1.2px] leading-[1.95rem] uppercase font-roboto text-text-primary-white text-center inline-block w-[3.53rem]">
                  DONATE
                </div>
              </button>
            
             
            </div>


            <div className="absolute top-[8.32rem] left-[27.23rem] w-[45rem] h-[7rem] text-darkslategray-100">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[45rem] h-[7rem]">
                Education in Nepal is currently facing a number of issues from low
                quality, lack of access to poorer communities to unqualied. Please give me money i need it. i need money beacause i really want it please give it to me . I am very desperate and I want money because I really want it to save me from a financial disaster that could possibly rip my family apart. I will be on the streets . Maximum 100 words mandatory. This will make things easier for us.   
              </div>
            </div>


            <div className="absolute top-[5.55rem] left-[27.23rem] w-[20.85rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                by
              </div>
              <div className="absolute top-[0rem] left-[1.58rem] w-[19.27rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[19.27rem]">
                  Project owner from db
                </div>
              </div>
            </div>


            <div className="absolute top-[3.08rem] left-[27.23rem] w-[39.75rem] h-[2.03rem] text-[1.73rem] text-black">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.99rem] inline-block w-[39.75rem] h-[2.03rem]">
                Title of the project from database. 
              </div>
            </div>
          </div>


          <div className="absolute top-[65rem] left-[0rem] bg-text-primary-white w-[75rem] h-[19rem]">
           
            <Image
              className="absolute top-[0.08rem] left-[0.08rem] w-[24.98rem] h-[18.23rem] object-cover"
              alt=""
              src="/../public/assets/project_image.png"
              width = '400'
              height = '300'
            />


            <div className="absolute top-[16.5rem] left-[27.25rem] w-[22.38rem] h-[1.88rem]">
              <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`raised of  `}</div>
              </div>
              <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden" />
              <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden" />
            </div>


            <div className="absolute top-[16rem] left-[56.44rem] w-[13.81rem] h-[2.88rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[#8ab61e] absolute top-[0rem] left-[6.3rem] w-[7.5rem] h-[2.85rem] rounded-md">
                <div className="absolute top-[0rem] left-[0rem] bg-yellowgreen-200 w-[7.5rem] h-[2.85rem]" />
                <div className="absolute top-[0.36rem] left-[2rem] text-[0.75rem] tracking-[1.2px] leading-[1.95rem] uppercase font-roboto text-text-primary-white text-center inline-block w-[3.53rem]">
                  DONATE
                </div>
              </button>
            </div>


            <div className="absolute top-[8.32rem] left-[27.23rem] w-[45rem] h-[7rem] text-darkslategray-100">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[45rem] h-[7rem]">
               {/*Project Description (100 words max) */}
              </div>
            </div>


            <div className="absolute top-[5.55rem] left-[27.23rem] w-[20.85rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                by
              </div>
              <div className="absolute top-[0rem] left-[1.58rem] w-[19.27rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[19.27rem]">
                  {/*Project owner  */}
                </div>
              </div>
            </div>


            <div className="absolute top-[3.08rem] left-[27.23rem] w-[39.75rem] h-[2.03rem] text-[1.73rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.99rem] inline-block w-[39.75rem] h-[2.03rem]">
               { /*Project Title */} 
              </div>
            </div>
          </div>



          <div className="absolute top-[90rem] left-[0rem] bg-text-primary-white w-[75rem] h-[19rem]">
           
            <Image
              className="absolute top-[0.08rem] left-[0.08rem] w-[24.98rem] h-[18.23rem] object-cover"
              alt=""
              src="/../public/assets/project_image.png"
              width = '400'
              height = '300'
            />


            <div className="absolute top-[16.5rem] left-[27.25rem] w-[22.38rem] h-[1.88rem]">
              <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`raised of  `}</div>
              </div>
              <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden" />
              <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden" />
            </div>


            <div className="absolute top-[16rem] left-[56.44rem] w-[13.81rem] h-[2.88rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[#8ab61e] absolute top-[0rem] left-[6.3rem] w-[7.5rem] h-[2.85rem] rounded-md">
                <div className="absolute top-[0rem] left-[0rem] bg-yellowgreen-200 w-[7.5rem] h-[2.85rem]" />
                <div className="absolute top-[0.36rem] left-[2rem] text-[0.75rem] tracking-[1.2px] leading-[1.95rem] uppercase font-roboto text-text-primary-white text-center inline-block w-[3.53rem]">
                  DONATE
                </div>
              </button>
            </div>


            <div className="absolute top-[8.32rem] left-[27.23rem] w-[45rem] h-[7rem] text-darkslategray-100">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[45rem] h-[7rem]">
              {/*Project Description */}   
              </div>
            </div>


            <div className="absolute top-[5.55rem] left-[27.23rem] w-[20.85rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                by
              </div>
              <div className="absolute top-[0rem] left-[1.58rem] w-[19.27rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[19.27rem]">
                  {/*Project Owner */}
                </div>
              </div>
            </div>


            <div className="absolute top-[3.08rem] left-[27.23rem] w-[39.75rem] h-[2.03rem] text-[1.73rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.99rem] inline-block w-[39.75rem] h-[2.03rem]">
             {  /*Project Title */ }
              </div>
            </div>
          </div>



          <div className="absolute top-[115rem] left-[0rem] bg-text-primary-white w-[75rem] h-[19rem]">
           
            <Image
              className="absolute top-[0.08rem] left-[0.08rem] w-[24.98rem] h-[18.23rem] object-cover"
              alt=""
              src="/../public/assets/project_image.png"
              width = '400'
              height = '300'
            />


            <div className="absolute top-[16.5rem] left-[27.25rem] w-[22.38rem] h-[1.88rem]">
              <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`raised of  `}</div>
              </div>
              <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden" />
              <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden" />
            </div>


            <div className="absolute top-[16rem] left-[56.44rem] w-[13.81rem] h-[2.88rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[#8ab61e] absolute top-[0rem] left-[6.3rem] w-[7.5rem] h-[2.85rem] rounded-md">
                <div className="absolute top-[0rem] left-[0rem] bg-yellowgreen-200 w-[7.5rem] h-[2.85rem]" />
                <div className="absolute top-[0.36rem] left-[2rem] text-[0.75rem] tracking-[1.2px] leading-[1.95rem] uppercase font-roboto text-text-primary-white text-center inline-block w-[3.53rem]">
                  DONATE
                </div>
              </button>
            </div>


            <div className="absolute top-[8.32rem] left-[27.23rem] w-[45rem] h-[7rem] text-darkslategray-100">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[45rem] h-[7rem]">
                {/*Project Description (100 words max) */}   
              </div>
            </div>


            <div className="absolute top-[5.55rem] left-[27.23rem] w-[20.85rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                by
              </div>
              <div className="absolute top-[0rem] left-[1.58rem] w-[19.27rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[19.27rem]">
                  {/*Project OWner */}
                </div>
              </div>
            </div>


            <div className="absolute top-[3.08rem] left-[27.23rem] w-[39.75rem] h-[2.03rem] text-[1.73rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.99rem] inline-block w-[39.75rem] h-[2.03rem]">
               { /*Project Title */ }
              </div>
            </div>
          </div>




          <div className="absolute top-[140rem] left-[0rem] bg-text-primary-white w-[75rem] h-[19rem]">
           
            <Image
              className="absolute top-[0.08rem] left-[0.08rem] w-[24.98rem] h-[18.23rem] object-cover"
              alt=""
              src="/../public/assets/project_image.png"
              width = '400'
              height = '300'
            />


            <div className="absolute top-[16.5rem] left-[27.25rem] w-[22.38rem] h-[1.88rem]">
              <div className="absolute top-[0.19rem] left-[10.25rem] w-[4.81rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[4.81rem] h-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`raised of  `}</div>
              </div>
              <div className="absolute top-[0rem] left-[1.31rem] w-[8.25rem] h-[1.69rem] overflow-hidden" />
              <div className="absolute top-[0.19rem] left-[14.94rem] w-[7.44rem] h-[1.5rem] overflow-hidden" />
            </div>


            <div className="absolute top-[16rem] left-[56.44rem] w-[13.81rem] h-[2.88rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[#8ab61e] absolute top-[0rem] left-[6.3rem] w-[7.5rem] h-[2.85rem] rounded-md">
                <div className="absolute top-[0rem] left-[0rem] bg-yellowgreen-200 w-[7.5rem] h-[2.85rem]" />
                <div className="absolute top-[0.36rem] left-[2rem] text-[0.75rem] tracking-[1.2px] leading-[1.95rem] uppercase font-roboto text-text-primary-white text-center inline-block w-[3.53rem]">
                  DONATE
                </div>
              </button>
            </div>


            <div className="absolute top-[8.32rem] left-[27.23rem] w-[45rem] h-[7rem] text-darkslategray-100">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[45rem] h-[7rem]">
               {/*Project description */}  
              </div>
            </div>


            <div className="absolute top-[5.55rem] left-[27.23rem] w-[20.85rem] h-[1.5rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[1.5rem] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                by
              </div>
              <div className="absolute top-[0rem] left-[1.58rem] w-[19.27rem] h-[1.5rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.17px] leading-[1.49rem] inline-block w-[19.27rem]">
                 {/*Project owner */}
                </div>
              </div>
            </div>


            <div className="absolute top-[3.08rem] left-[27.23rem] w-[39.75rem] h-[2.03rem] text-[1.73rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.99rem] inline-block w-[39.75rem] h-[2.03rem]">
               {/*Project Title */}
              </div>
            </div>
          </div>
     


      <Footer/>
     
    </div>
  )
}

export default Allprojects