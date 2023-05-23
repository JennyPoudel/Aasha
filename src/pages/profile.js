
import React from "react";
import Image from "next/image";
import Navbar from "../components/homepage/nav";
import RadioComponent from "../components/homepage/RadioComponent";
import Link from "next/link";
import FileUploadFormIndividual from "../components/homepage/FileUploadFormIndividual";
import DropdownForCategoryIndividual from "../components/homepage/DropdownForCategoryIndividual";

const IndividualForm = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-whitesmoke-200 w-full h-[156.19rem] overflow-hidden text-left text-[1.13rem] text-midnightblue font-noto-sans">
      
      <div className="absolute top-[0rem] left-[0rem] flex flex-col items-end justify-start text-[0.94rem] text-black">
        <header className=" box-border w-[90rem]  py-[1.25rem] pr-[0rem] pl-[1.25rem] items-center justify-start gap-[0.38rem] max-w-[87.5rem] border-[1px] border-solid border-whitesmoke-200 lg:w-[75rem] lg:max-w-[75rem] md:w-[60rem] md:pl-[1.25rem] md:pr-[20-] md:box-border md:max-w-[60rem]"/>
        
        <div className="relative w-[89.39rem] h-[148.06rem]">
          <div className="absolute top-[3.54rem] left-[0rem] w-[43.89rem] h-[140.99rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[43.89rem] h-[135.48rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[43.89rem] h-[43.51rem] text-[1rem] font-paragraph-ibm-plex-sans-medium">
                <div className="absolute top-[0rem] left-[0rem] w-[43.89rem] h-[18.01rem]">
                  <div className="absolute top-[0rem] left-[0rem] overflow-hidden flex flex-row py-[0rem] px-[0.06rem] items-start justify-start text-[1.38rem] text-midnightblue font-noto-sans">
                    <div className="relative leading-[0.98rem] font-medium h-[1rem]">
                      Personal Details
                    </div>
                  </div>
                  <div className="absolute top-[1.31rem] left-[0rem] flex flex-col p-[0.63rem] items-start justify-start text-[0.94rem]">
                    <div className="w-[42.56rem] h-[4.06rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                        Full Name
                      </div>
                      <input
                        className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[6.94rem] left-[0rem] flex flex-col p-[0.63rem] items-start justify-start">
                    <div className="w-[42.64rem] h-[4.13rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                        Email
                      </div>
                      <input
                        className="[border:none] font-paragraph-ibm-plex-sans-medium text-[1rem] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                        type="email"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[12.63rem] left-[0rem] flex flex-row items-center justify-start gap-[0.94rem]">
                    <div className="flex flex-col p-[0.63rem] items-start justify-start">
                      <div className="w-[12.5rem] h-[4.13rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                          National ID no
                        </div>
                        <input
                          className="[border:none] font-paragraph-ibm-plex-sans-medium text-[1rem] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                          type="number"
                          
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-[0.63rem] items-start justify-start">
                      <div className="w-[12.5rem] h-[4.13rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                          Issued Date
                        </div>
                        <input
                          className="[border:none] font-paragraph-ibm-plex-sans-medium text-[1rem] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                          type="Date"
                          placeholder="Date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[21.19rem] left-[0.26rem] w-[43.38rem] h-[22.32rem] text-[0.94rem]">
                  <div className="absolute top-[0rem] left-[0rem] flex flex-row items-end justify-start gap-[1.06rem]">
                    <div className="flex flex-col p-[0.63rem] items-start justify-start">
                      <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                          Country
                        </div>
                        <input
                          className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                          type="text"
                          placeholder="Nepal"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-[0.63rem] items-start justify-start">
                      <div className="w-[12.5rem] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                        <div className="self-stretch relative tracking-[0.01em] leading-[150%]">
                          District
                        </div>
                        <input
                          className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                          type="text"
                          placeholder="Kathmandu"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-[0.63rem] items-start justify-start">
                      <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                          State
                        </div>
                        <input
                          className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                          type="text"
                          placeholder="Bagmati"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[5.63rem] left-[0rem] flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start gap-[1.06rem]">
                      <div className="flex flex-col p-[0.63rem] items-start justify-start">
                        <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                            Municipality
                          </div>
                          <input
                            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                            type="text"
                            placeholder="Bagmati"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col p-[0.63rem] items-start justify-start">
                        <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                            Ward No
                          </div>
                          <input
                            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                            type="text"
                            placeholder="Bagmati"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col p-[0.63rem] items-start justify-start">
                        <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                            Street
                          </div>
                          <input
                            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                            type="text"
                            placeholder="Bagmati"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[42.06rem] h-[11.13rem]">
                      <div className="absolute top-[0rem] left-[0rem] flex flex-col p-[0.63rem] items-start justify-start">
                        <div className="w-[40.81rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                            Temporary Full Address (if any)
                          </div>
                          <input
                            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                            type="text"
                            placeholder="Bagmati"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[5.56rem] left-[0rem] flex flex-row items-center justify-start gap-[1.44rem]">
                        <div className="flex flex-col p-[0.63rem] items-start justify-start">
                          <div className="w-[12.5rem] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                            <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                              Contact 1
                            </div>
                            <input
                              className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                              type="number"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col p-[0.63rem] items-start justify-start">
                          <div className="w-[12.5rem] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                            <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                              Contact 2
                            </div>
                            <input
                              className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                              type="number"
                              placeholder="Phone2"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col p-[0.63rem] items-start justify-start">
                          <div className="w-[12.5rem] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                            <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                               Gender
                            </div>
                            <RadioComponent/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[45.13rem] left-[1.63rem] flex flex-col items-start justify-start gap-[0.94rem]">
                <div className="flex flex-col items-center justify-start gap-[0.81rem] text-[1.38rem] text-midnightblue">
                  <div className="relative w-[13.94rem] h-[2.28rem] overflow-hidden shrink-0 mt-[1rem]">
                    <div className="absolute top-[1rem] left-[-0.03rem] leading-[0.98rem] font-medium inline-block w-[13.85rem] h-[2.23rem]">
                      Setting Up Donation
                    </div>
                  </div>
                  <div className="w-[40.63rem] h-[7.18rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem] text-[0.94rem] text-black font-paragraph-ibm-plex-sans-medium">
                    <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                      Title
                    </div>
                    <input
                      className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[2.25rem]">
                  <div className="relative w-[16.54rem] h-[18.1rem]">
                    <input
                      className="absolute top-[2.13rem] left-[-0.04rem] rounded-[16.25px] bg-lavender box-border w-[16.62rem] h-[16.01rem] overflow-hidden border-[0.6px] border-solid border-whitesmoke-200 border-black"
                      type="file"
                      required
                    />
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem]">
                      Cover image
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[2.25rem] ml-[20rem] mt-[-19rem]">
                  <div className="relative w-[10rem] h-[18.1rem] ml-[3.5rem] mt-[1rem]">
                    <DropdownForCategoryIndividual/>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem] shrink-0">
                    Description
                  </div>
                  <textarea className="bg-whitesmoke-100 relative rounded-[16.25px] box-border w-[40.49rem] h-[16.01rem] overflow-hidden shrink-0 border-[0.6px] border-solid border-whitesmoke-200" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem] shrink-0">
                    Validation Document
                  </div>
                  <input
                    className="relative rounded-[16.25px] bg-lavender box-border w-[16.62rem] h-[16.01rem] overflow-hidden shrink-0 border-[0.6px] border-solid border-whitesmoke-200 border-black"
                    type="file"
                    required
                  />
                </div>
              </div>
              <div className="absolute top-[117.28rem] left-[1.64rem] w-[13.94rem] h-[2.28rem] overflow-hidden text-[1.38rem] text-midnightblue">
                <div className="absolute top-[0.08rem] left-[0.08rem] leading-[0.98rem] font-medium inline-block w-[13.85rem] h-[2.23rem]">
                  Banking Details
                </div>
              </div>
              <div className="absolute top-[120.21rem] left-[1.64rem] w-[40.19rem] h-[18.81rem] text-darkslateblue-200 font-inter">
                <div className="absolute top-[14rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
                  <input
                    className="[border:none] bg-ghostwhite absolute top-[1.31rem] left-[0.25rem] rounded-lg w-[39.94rem] h-[3.5rem]"
                    type="text"
                  />
                  <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[9.19rem]">
                    Amount to be raised
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
                  <div className="absolute top-[1.31rem] left-[0rem] rounded-lg bg-slateblue-200 box-border w-[40.19rem] h-[3.5rem] border-[1px] border-solid border-slateblue-100" />
                  <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[9.68rem]">
                    Card Number
                  </div>
                  <input
                    className="[border:none] bg-gainsboro-200 absolute top-[1.38rem] left-[0.06rem] w-[35.13rem] h-[3.44rem]"
                    type="text"
                  />
                </div>
                <div className="absolute top-[6.88rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
                  <input 
                    className="[border:none] bg-ghostwhite absolute top-[1.31rem] left-[0rem] rounded-lg w-[40.19rem] h-[3.5rem]"
                    type="text"
                    placeholder="Card holder name"
                  />
                  <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[8.68rem]">
                    Card Holder
                  </div>
                </div>
                <Image
                  className="absolute top-[2.13rem] left-[35.67rem] w-[3.6rem] h-[1.81rem] object-cover"
                  alt="/"
                  src="/../public/assets/image5.png"
                  width = '57'
                  height = '29'
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[#64abd3] absolute top-[144.8rem] left-[15.58rem] w-[10.75rem] h-[3.14rem] flex flex-col items-start justify-start rounded-md">
            <button className="cursor-pointer [border:none] py-[0.27rem] px-[1.07rem] bg-text-link self-stretch rounded-[6.41px] h-[3.21rem] overflow-hidden shrink-0 flex flex-col box-border items-center justify-center">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="self-stretch relative text-[1.2rem] font-medium font-paragraph-ibm-plex-sans-medium text-text-primary-white text-center flex items-center justify-center">
                  Submit
                </div>
              </div>
            </button>
          </button>
          <Image
            className="absolute top-[0rem] left-[45.08rem] w-[44.31rem] h-[148.06rem] object-cover"
            alt=""
            src="/../public/assets/image6.png"
            width = '709'
            height = '2369'
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default IndividualForm;
