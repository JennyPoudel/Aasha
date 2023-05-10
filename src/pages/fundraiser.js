
import React from "react";
import Individual from "./api/hello";
import Image from "next/image";
import Navbar from "@/components/homepage/nav";
const IndividualForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  // const [dob, setDOB] = useState("");
  const [image, setImage] = useState(null);
  const [imageInput, setImageInput] = useState(null);
  const [imagee, setImagee] = useState(null);
  const [imageeInput, setImageeInput] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);
      setImage(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  const handleImagee = (e) => {
    const file = e.target.files[0];
    setImageeInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);
      setImagee(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  
  
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/individual", {
        email,
        firstName,
        middleName,
        lastName,
        contact1,
        contact2,
        state,
        municipality,
        country,
        district,
        image,
        imagee,

      });
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving your information.');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
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

      <div className="absolute h-[4.09%] w-[20.3%] top-[32.39%] right-[70.88%] bottom-[63.52%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Email
        </div>
        <input
          className="[border:none] font-paragraph-ibm-plex-sans-medium text-[0.72rem] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="absolute w-[14.24%] top-[calc(50%_-_321.5px)] right-[60.42%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          D.O.B
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="number"
          placeholder="Phone2"
        />
      </div>
      <div className="absolute w-[13.47%] top-[calc(50%_-_321.5px)] right-[78.13%] left-[8.4%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Phone No.
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="number"
          placeholder="Phone"
          required
          value={contact1}
          onChange={(e) => setContact1(e.target.value)}
        />
      </div>
      <div className="absolute h-[4.1%] w-[14.24%] top-[38.94%] right-[60.42%] bottom-[56.96%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          State
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Bagmati"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="absolute w-[18.26%] top-[calc(50%_-_58.68px)] right-[56.39%] left-[25.35%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          National I.D
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          required
          value={municipality}
          onChange={(e) => setMunicipality(e.target.value)}
        />
      </div>
      <div className="absolute h-[4.1%] w-[13.89%] top-[38.94%] right-[77.29%] bottom-[56.96%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Country
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Nepal"
          required
        />
      </div>
      <div className="absolute w-[13.89%] top-[calc(50%_-_60.68px)] right-[77.29%] left-[8.82%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[150%]">
          District
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          placeholder="Kathmandu"
          required
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="absolute top-[42.94rem] left-[7.94rem] w-[10.06rem] h-[1.75rem] overflow-hidden text-[0.75rem] font-noto-sans">
        <div className="absolute top-[0.06rem] left-[0.06rem] leading-[0.75rem] inline-block w-[10rem] h-[1.72rem]">
          Fundraising Objective
        </div>
      </div>
      <textarea
        className="bg-[transparent] absolute top-[45.23rem] left-[7.91rem] rounded-smi-5 shadow-[0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25),_0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25)] box-border w-[32.86rem] h-[5.16rem] border-[0.5px] border-solid border-dimgray-100"
        placeholder="Write the objective of your organization"
        required
      />
      <input
        className="absolute top-[54.47rem] left-[7.84rem] rounded-smi-5 box-border w-[12.78rem] h-[12.31rem] overflow-hidden border-[0.5px] border-solid border-black"
        type="file"
        required
      />
      <div className="absolute top-[52.06rem] left-[8.38rem] text-[0.75rem] leading-[0.75rem] font-noto-sans inline-block w-[12.19rem] h-[1.5rem]">
        PROFILE PICTURE
      </div>
      <div className="absolute top-[68.19rem] left-[6.44rem] w-[30.13rem] h-[4.81rem] overflow-hidden text-[0.75rem] font-noto-sans">
        <div className="absolute top-[1rem] left-[1.25rem] w-[32.13rem] h-[3.53rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[32.13rem] h-[2.59rem] flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative leading-[0.56rem]">
              SOCIAL MEDIA LINK
            </div>
            <input
              className="bg-text-primary-white self-stretch rounded flex flex-col p-[0.5rem] items-start justify-start border-[0.5px] border-solid border-lightgray-300"
              type="text"
              required
            />
            <div className="self-stretch relative text-[0.38rem] leading-[0.56rem] text-dimgray-100 hidden [text-shadow:0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25),_0px_1.999999761581421px_2px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:0.5px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
      </div>
      <input
        className="absolute top-[54.47rem] left-[25.72rem] rounded-smi-5 box-border w-[12.78rem] h-[12.31rem] overflow-hidden border-[0.5px] border-solid border-black"
        type="file"
        required
      />
      <div className="absolute top-[52.06rem] left-[26.25rem] text-[0.75rem] leading-[0.75rem] font-noto-sans inline-block w-[12.19rem] h-[1.5rem]">
        VALIDATION DOCUMENT
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[#64abd3] absolute top-[75.44rem] left-[18.56rem] w-[7.17rem] h-[2.09rem] flex flex-col items-start justify-start rounded-md">
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
          First Name
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="absolute h-[4.09%] w-[20.3%] top-[19.06%] right-[71.23%] bottom-[76.84%] left-[8.47%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Last Name
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      
      <div className="absolute h-[4.09%] w-[20.3%] top-[13.48%] right-[49.22%] bottom-[79.45%] left-[30.49%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Fundraiser Title
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="email"
        />
      </div>

      <div className="absolute h-[4.09%] w-[20.3%] top-[19%] right-[49.22%] bottom-[79.45%] left-[30.49%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[144%]">
          Middle Name
        </div>
        <input
          className="[border:none] bg-surface-light self-stretch rounded-[2.89px] flex flex-col p-[0.54rem] items-start justify-start"
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>

      <div className="absolute h-[6.3%] w-[20.3%] top-[19%] right-[49.22%] bottom-[79.45%] left-[30.49%] overflow-hidden flex flex-col items-start justify-start gap-[0.09rem]">
        <RadioComponent/>
      </div>
    </div>
   
    </>
    </form>
  );
};

export default IndividualForm;
