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
    <div className='container1'>
    <Image
         // className="absolute  left-[0rem] w-[90.01rem] h-[30rem] object-cover"
          alt="/"
          src="/../public/assets/certificate.jpg"
          width = '900'
          height = '300'
        />
        </div>
       
    </>
  );
};

export default About;
//top-[-2rem]