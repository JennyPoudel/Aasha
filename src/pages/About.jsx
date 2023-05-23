import React from "react";
import Image from 'next/image'
import FooterForAboutPage from 'src/components/homepage/FooterForAboutPage'
import Navbar from 'src/components/homepage/nav'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-whitesmoke w-full h-[171.13rem] overflow-hidden text-center text-[1.25rem] text-darkslategray-400 font-open-sans">
      <div className="absolute top-[43.19rem] left-[22.5rem] w-[45rem] h-[31.94rem] text-left">
        <div className="absolute top-[0rem] left-[18rem] w-[9rem] h-[2.31rem] text-center text-[2rem] text-darkslategray-100">
          <div className="absolute top-[0rem] left-[0rem] leading-[2.3rem] inline-block w-[9rem]">
            Our Story
          </div>
        </div>
        <div className="absolute top-[5.06rem] left-[0rem] w-[45rem] h-[13.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem] inline-block w-[45rem]">
            By 1997, Mari Kuraishi and Dennis Whittle were convinced many key
            innovations in global development weren’t getting the attention they
            deserved. Believing there had to be a better way to do aid, they
            started an experiment. In February 2000, they invited any social
            entrepreneur to pitch his or her earth-changing idea at the World
            Bank. The 300+ participants ranged from a group of NASA scientists
            to a woman who’d never before left her Ugandan village.
          </div>
        </div>
        <div className="absolute top-[20.69rem] left-[0rem] w-[44.75rem] h-[11.25rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem] inline-block w-[44.75rem]">
            The event was a success, and Mari and Dennis realized good ideas can
            come from anyone, anywhere, at any time. They also realized there
            were many others who wanted to support good ideas. So they left the
            Bank to launch the world’s first crowdfunding community in 2002.
            Today, people in 175+ countries can easily share their ideas, and
            individual donors and companies can easily support vetted nonprofits
            through GlobalGiving.
          </div>
        </div>
      </div>
      <div className="absolute top-[82rem] left-[-0.06rem] box-border w-[90.13rem] h-[20.75rem] text-[1rem] text-gray-500 border-[1px] border-solid border-silver-400">
        <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[20.63rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-gainsboro-300 w-[90rem] h-[20.63rem]" />
        </div>
        <div className="absolute top-[4.44rem] left-[10.88rem] w-[70.25rem] h-[12.13rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[16.75rem] h-[8.31rem]">
            <div className="absolute top-[0rem] left-[5.88rem] tracking-[1.6px] leading-[1.15rem] uppercase inline-block w-[5rem]">
              Mission
            </div>
            <div className="absolute top-[2.5rem] left-[0rem] text-[1.38rem] tracking-[0.16px] leading-[1.93rem] font-aleo text-olive inline-block w-[16.75rem]">
              To transform aid and philanthropy to accelerate community-led
              change.
            </div>
          </div>
          <div className="absolute top-[0rem] left-[23.81rem] w-[20.56rem] h-[6.38rem]">
            <div className="absolute top-[0rem] left-[8.31rem] tracking-[1.6px] leading-[1.15rem] uppercase inline-block w-[4.06rem]">
              Vision
            </div>
            <div className="absolute top-[2.5rem] left-[0rem] text-[1.38rem] tracking-[0.16px] leading-[1.93rem] font-aleo text-chocolate inline-block w-[20.56rem]">
              Unleashed potential of people to make positive change happen.
            </div>
          </div>
          <div className="absolute top-[0rem] left-[49.44rem] w-[20.81rem] h-[12.13rem]">
            <div className="absolute top-[0rem] left-[6.31rem] tracking-[1.6px] leading-[1.15rem] uppercase inline-block w-[8.31rem]">
              Commitment
            </div>
            <div className="absolute top-[2.5rem] left-[0rem] text-[1.38rem] tracking-[0.16px] leading-[1.93rem] font-aleo text-slategray-200 inline-block w-[20.81rem]">
              Use our privilege, influence, and access to share power,
              delivering equitable and inclusive services so everyone in our
              community feels safe, valued, and supported.
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[8.13rem] left-[0rem] w-[90rem] h-[28.63rem] text-[1.88rem] text-whitesmoke">
        <div className="absolute top-[0rem] left-[0rem] bg-lightskyblue box-border w-[90.88rem] h-[28.63rem] border-[1px] border-solid border-lightskyblue">
          <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[24rem]" />
          
        </div>
        <Image
          className="absolute top-[-2rem] left-[0rem] w-[90.01rem] h-[30rem] object-cover"
          alt="/"
          src="/../public/assets/Aboutheader.png"
          width = '1440'
          height = '458'
        />
      </div>
      <div className="absolute top-[109.78rem] left-[8.38rem] w-[72.5rem] h-[28.97rem] text-[1.5rem] text-darkslategray-100 font-aleo">
        <div className="absolute top-[0rem] left-[0rem] w-[72.5rem] h-[16.62rem]">
          <div className="absolute top-[0rem] left-[31.25rem] w-[10rem] h-[16.59rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[16.59rem]">
              <Image
                className="absolute top-[0rem] left-[0.12rem] w-[9.76rem] h-[13rem] object-cover"
                alt="/"
                src="/../public/assets/bish.png"
                width = '156'
                height = '207'
              />
              <div className="absolute top-[14.28rem] left-[0rem] w-[10rem] h-[2.31rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[10rem]">
                  Rupak
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0.03rem] left-[62.5rem] w-[10rem] h-[16.59rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[16.59rem]">
              <div className="absolute top-[14.25rem] left-[0rem] w-[10rem] h-[2.31rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[10rem]">
                  Bishal
                </div>
              </div>
              <div className="absolute top-[-0.75rem] left-[0.25rem] w-[9.75rem] h-[14.54rem]" />
            </div>
            <Image
              className="absolute top-[0rem] left-[-0.31rem] rounded-6xl w-[10.53rem] h-[13.5rem] object-cover"
              alt="/"
              src="/../public/assets/bish.png"
              width = '156'
              height = '207'
            />
          </div>
          <div className="absolute top-[0.03rem] left-[0rem] w-[10rem] h-[16.59rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[16.59rem]">
              <Image
                className="absolute top-[0rem] left-[0.12rem] w-[9.76rem] h-[13rem] object-cover"
                alt="/"
                src="/../public/assets/bish.png"
                width = '156'
                height = '207'
              />
              <div className="absolute top-[14.25rem] left-[-0.62rem] w-[10.63rem] h-[2.31rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[10.63rem]">
                  Samip
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0.03rem] left-[46.88rem] w-[10rem] h-[16.59rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[16.59rem]">
              <Image
                className="absolute top-[0rem] left-[0.13rem] w-[9.76rem] h-[13rem] object-cover"
                alt="/"
                src="/../public/assets/bish.png"
                width = '156'
                height = '207'
              />
              <div className="absolute top-[14.28rem] left-[0rem] w-[10rem] h-[2.31rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[10rem]">
                  Rishikesh
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0.03rem] left-[15.63rem] w-[10rem] h-[16.59rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[16.59rem]">
              <Image
                className="absolute top-[0rem] left-[0.12rem] w-[9.76rem] h-[13rem] object-cover"
                alt="/"
                src="/../public/assets/bish.png"
                width = '156'
                height = '207'
              />
              <div className="absolute top-[14.28rem] left-[0rem] w-[10rem] h-[2.31rem]">
                <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[10rem]">
                  Jenny
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[20.41rem] left-[14.69rem] w-[43.75rem] h-[8.56rem] text-[1.94rem]">
          <div className="absolute top-[0rem] left-[10.94rem] w-[21.88rem] h-[2.31rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[0.8px] leading-[2.3rem] inline-block w-[21.88rem]">
              The Aasha Team
            </div>
          </div>
          <div className="absolute top-[4.81rem] left-[0rem] w-[43.75rem] h-[3.75rem] text-[1.25rem] text-black font-open-sans">
            <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem] inline-block w-[43.75rem]">
              We’re curious, passionate, and committed to helping nonprofits and
              individuals in aid to crisis. Oh, and we are CS students on the
              side.
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterForAboutPage/>
    </>
  );
};

export default About;
