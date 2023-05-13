

import React from 'react'
import Image from 'next/image';
import Navbar from 'src/components/homepage/nav';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const provinces = [
  "Health",
  "Education",
  "Animals ",
  "Infrastructure"
];
const Orgform = () => {
  const [OrgName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [orgweb, setWebsite] = useState("");
  const [regno, setRegistrationNumber] = useState("");
  const [doe, setDOE] = useState("");
  const [profile, setProfile] = useState(null);
  const [profileInput, setProfileInput] = useState(null);
  const [valid, setValid] = useState(null);
  const [validInput, SetValidInput] = useState(null);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [coverInput, setCoverInput] = useState(null);
  // const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cardnum, setCardNumber] = useState("");
  const [cardholder, setCardHolder] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setProfileInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);
      setProfile(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  const handleImagee = (e) => {
    const file = e.target.files[0];
    SetValidInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);
      setValid(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  const handleImageee = (e) => {
    const file = e.target.files[0];
    setCoverInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);
      setCover(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  
  
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/orgform", {
        email,
        OrgName,
        contact1,
        contact2,
        state,
        country,
        district,
        orgweb,
        regno,
        doe,
        profile,
        valid,
        title,
        cover,
        description,
        cardnum,
        cardholder,
        amount,
        selectedProvince,

      });
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving your information.');
    }
  }
  return (

    <>
    <form onSubmit={handleSubmit}>
    <Navbar/>
    <div className="relative bg-whitesmoke-200 w-full h-[156.19rem] overflow-hidden text-left text-[0.94rem] text-black font-paragraph-ibm-plex-sans-medium">
      <Image
        className="absolute top-[15.63rem] left-[49.5rem] w-[40.5rem] h-[68.31rem] object-cover"
        alt=""
        src="/../public/assets/image6.png"
        width = '648'
        height = '1093'
      />
        
      <div className="absolute top-[9.56rem] left-[2rem] w-[41.88rem] h-[54.88rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[43.19rem] h-[29.38rem]">
          <div className="absolute top-[2.38rem] left-[-1.25rem] flex flex-col p-[0.63rem] items-start justify-start">
            <div className="w-[41.19rem] h-[4.06rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
              <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                Organization Name
              </div>
              <input
                className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                type="text"
                placeholder="Name"
                value={OrgName}
          onChange={(e) => setOrganizationName(e.target.value)}
              />
            </div>
          </div>
          <div className="absolute h-[14.04%] w-[98.73%] top-[28.3%] right-[2.72%] bottom-[57.66%] left-[-1.45%] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
            <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
              Email
            </div>
            <input
              className="[border:none] font-paragraph-ibm-plex-sans-medium text-[0.94rem] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
              type="email"
              placeholder="E-mail"
              value={email}
          onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="absolute top-[25.13rem] left-[-1.25rem] flex flex-col p-[0.63rem] items-start justify-start">
            <div className="w-[40.63rem] h-[4.13rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
              <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                Organization Website
              </div>
              <input
                className="[border:none] font-paragraph-ibm-plex-sans-medium text-[0.94rem] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                type="text"
                placeholder="Social handle/Website"
                value={orgweb}
          onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[-0.62rem] w-[26.25rem] h-[2.28rem] overflow-hidden text-[1.38rem] text-midnightblue font-noto-sans">
            <div className="absolute top-[0.08rem] left-[0.08rem] leading-[0.98rem] font-medium inline-block w-[14.29rem] h-[2.23rem]">
              Organization Details
            </div>
          </div>
        </div>
        <div className="absolute top-[31.69rem] left-[0.06rem] w-[38.44rem] h-[18.81rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[38.44rem] h-[18.81rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[26.25rem] h-[2.28rem] overflow-hidden" />
            <div className="absolute top-[5.25rem] left-[-0.69rem] w-[38.41rem] h-[18.47rem] font-noto-sans">
              <div className="absolute top-[1.88rem] left-[-0.04rem] rounded-[16.25px] border-black box-border w-[16.62rem] h-[16.01rem] overflow-hidden border-[0.6px] border-solid border-whitesmoke-200">
              {profile && <img src={profile} style={{ width: "400px" }} />}
<input
        type="file"
                onChange={handleImage}

      />
                </div>
              <div className="absolute top-[0rem] left-[0rem] leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem]">
                Profile Picture
              </div>
              <div
                className="absolute top-[1.88rem] left-[21.83rem] rounded-[16.25px] border-black box-border w-[16.62rem] h-[16.01rem] overflow-hidden border-[0.6px] border-solid border-whitesmoke-200">
                {valid && <img src={valid} style={{ width: "400px" }} />}
<input
        type="file"
                onChange={handleImagee}

      />
                </div>
              <div className="absolute top-[0rem] left-[21.88rem] leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem">
                Validation Document
              </div>
            </div>
            <div className="absolute top-[-18rem] left-[-0.69rem] flex flex-row py-[0.19rem] px-[0rem] items-end justify-start gap-[2.31rem]">
              <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                  Country
                </div>
                <input
                  className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                  type="text"
                  placeholder="Nepal"
                  value={country}
          onChange={(e) => setCountry(e.target.value)}

                />
              </div>
              <div className="w-[12.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                <div className="self-stretch relative tracking-[0.01em] leading-[150%]">
                  District
                </div>
                <input
                  className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                  type="text"
                  placeholder="Kathmandu"
                  value={district}
          onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="w-[12.5rem] h-[4.31rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
                <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                  State
                </div>
                <input
                  className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                  type="text"
                  placeholder="Bagmati"
                  value={state}
          onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
            <div className="absolute top-[-0.56rem] left-[-0.69rem] w-[27.7rem] h-[4.56rem]">
              <div className="absolute w-[45.13%] top-[calc(50%_-_38.57px)] right-[0%] left-[54.87%] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                  Date of Establishment
                </div>
                <input
                  className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                  type="date"
                  value={doe}
                  onChange={(e) => setDOE(e.target.value)}                />
              </div>
              <div className="absolute w-[45.13%] top-[calc(50%_-_34.57px)] right-[54.87%] left-[0%] overflow-hidden flex flex-col items-start justify-start gap-[0.12rem]">
                <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
                  Registration No
                </div>
                <input
                  className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
                  type="number"
                  value={regno}
                  onChange={(e) => setRegistrationNumber(e.target.value)}                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[29.5rem] left-[1.38rem] flex flex-row items-center justify-start gap-[2.69rem]">
        <div className="w-[12.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
            Contact 1
          </div>
          <input
            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
            type="number"
            placeholder="Phone"
            value={contact1}
          onChange={(e) => setContact1(e.target.value)}
          />
        </div>
        <div className="w-[12.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
          <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
            Contact 2
          </div>
          <input
            className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
            type="number"
            placeholder="Phone2"
            value={contact2}
          onChange={(e) => setContact2(e.target.value)}
          />
        </div>
        
      </div>
      <div className="absolute top-[67.63rem] left-[1.56rem] w-[40.69rem] h-[47.72rem] font-noto-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[13.94rem] h-[2.28rem] overflow-hidden text-[1.38rem] text-midnightblue">
          <div className="absolute top-[0.08rem] left-[0.08rem] leading-[0.98rem] font-medium inline-block w-[13.85rem] h-[2.23rem]">
            Setting Up Donation
          </div>
        </div>
        <div className="absolute top-[10.25rem] left-[0rem] w-[16.54rem] h-[18.1rem]">
          <div
            className="absolute top-[2.13rem] left-[-0.04rem] rounded-[16.25px] border-black box-border w-[16.62rem] h-[16.01rem] overflow-hidden border-[0.6px] border-solid border-whitesmoke-200">
            {cover && <img src={cover} style={{ width: "400px" }} />}
<input
        type="file"
                onChange={handleImageee}

      />
         </div>
          <div className="absolute top-[0rem] left-[0rem] leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem]">
            Cover image
          </div>
        </div>
        <div className="absolute top-[29.87rem] left-[0rem] w-[40.41rem] h-[17.84rem]">
          <textarea className="bg-whitesmoke-100 absolute top-[1.88rem] left-[-0.04rem] rounded-[16.25px] box-border w-[40.49rem] h-[16.01rem] overflow-hidden border-[0.6px] border-solid border-whitesmoke-200" 
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
          <div className="absolute top-[0rem] left-[0rem] leading-[0.98rem] inline-block w-[15.84rem] h-[1.95rem]">
            Description
          </div>
        </div>
        <div className="absolute top-[2.44rem] left-[-0.56rem] flex flex-col p-[0.63rem] items-start justify-start font-paragraph-ibm-plex-sans-medium">
          <div className="w-[40.63rem] h-[7.18rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.12rem]">
            <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
              Title
            </div>
            <input
              className="[border:none] bg-surface-light self-stretch rounded-[3.76px] flex flex-col p-[0.71rem] items-start justify-start"
              type="text"
              placeholder="Title for your page"
              value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
            
          </div>
        </div>

{/* Yo  chai category */}
        <div className="relative inline-block text-left top-[13.8rem] left-[25.2rem]">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {selectedProvince ? selectedProvince : "Category"}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-5-5 1.41-1.42L10 9.17l3.59-3.59L15 7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div
          className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {provinces.map((province) => (
              <a
                key={province}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleProvinceSelect(province)}
              >
                {province}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
      </div>

      {/* category yetti samma ho */}
      <div className="absolute top-[118.31rem] left-[1.56rem] w-[13.94rem] h-[2.28rem] overflow-hidden text-[1.38rem] text-midnightblue font-noto-sans">
        <div className="absolute top-[0.08rem] left-[0.08rem] leading-[0.98rem] font-medium inline-block w-[13.85rem] h-[2.23rem]">
          Banking Details
        </div>
      </div>
      <div className="absolute top-[121.25rem] left-[1.56rem] w-[40.19rem] h-[18.81rem] text-darkslateblue-200 font-inter">
        <div className="absolute top-[14rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
          <div className="absolute top-[1.31rem] left-[0.25rem] rounded-lg bg-ghostwhite w-[39.94rem] h-[3.5rem]" />
          <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[9.19rem]">
            Amount to be raised
          </div>
          <input
            className="[border:none] bg-[transparent] absolute top-[1.63rem] left-[0.69rem] w-[17.06rem] h-[3.19rem] overflow-hidden"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
          <div className="absolute top-[1.31rem] left-[0rem] rounded-lg bg-slateblue-200 box-border w-[40.19rem] h-[3.5rem] border-[1px] border-solid border-slateblue-100" />
          <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[9.68rem]">
            Card Number
          </div>
          <input
                    className="[border:none] bg-gainsboro-200 absolute top-[1.38rem] left-[0.06rem] w-[35.13rem] h-[3.44rem]"
                    type="number"
            placeholder="*******************"
            value={cardnum}
          onChange={(e) => setCardNumber(e.target.value)}
      
          />
        </div>
        <div className="absolute top-[6.88rem] left-[0rem] w-[40.19rem] h-[4.81rem]">
          <input
            className="[border:none] bg-ghostwhite absolute top-[1.31rem] left-[0rem] rounded-lg w-[40.19rem] h-[3.5rem]"
            type="text"
            placeholder="Card holder name"
            value={cardholder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
          <div className="absolute top-[0rem] left-[0rem] leading-[124.5%] inline-block w-[8.68rem]">
            Card Holder
          </div>
        </div>
        <Image
          className="absolute top-[2.13rem] left-[35.67rem] w-[3.6rem] h-[1.81rem] object-cover"
          alt=""
          src="/../public/assets/image5.png"
          width = '57'
          height= '29'
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[#64abd3] absolute top-[142.56rem] left-[15rem] w-[10.75rem] h-[3.14rem] flex flex-col items-start justify-start rounded-md">
        <div className="self-stretch rounded-[6.41px] bg-text-link h-[3.21rem] overflow-hidden shrink-0 flex flex-col py-[0.27rem] px-[1.07rem] box-border items-center justify-center">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="self-stretch relative text-[0.8rem] font-medium font-paragraph-ibm-plex-sans-medium text-text-primary-white text-center flex items-center justify-center">
              Next
            </div>
          </div>
        </div>
      </button>
    </div>
    </form>
    </>
  );
}

export default Orgform;