import React, { useContext, useState } from "react";
import { AlertContext } from "../state/AlertContext";

const ContactInfo = ({userId, setPage}) => {

  const {setAlertValue} = useContext(AlertContext)
  const [showSecondEmail, setShowSecondEmail] = useState("hidden");
  const [showSecondPhone, setShowSecondPhone] = useState("hidden");
  const [primaryEmail, setPrimaryEmail] = useState('')
  const [secondaryEmail, setSecondaryEmail] = useState('')
  const [primaryPhone, setPrimaryPhone] = useState('')
  const [secondaryPhone, setSecondaryPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const [email, setEmail] =useState({
    primary: '',
    secondary: '',
  })
  const [phone, setPhone] = useState({
    primary: '',
    secondary: '',
  })
  const [address, setAddress] = useState({
    street: '',
    city: '',
  })
  const handleNextClick = async (e) => {
    e.preventDefault();

    // primaryEmail ? email.push(primaryEmail) : void 0
    // secondaryEmail ? email.push(secondaryEmail) : void 0
    // primaryPhone ? phone.push(primaryPhone) : void 0
    // secondaryPhone ? phone.push(secondaryPhone) : void 0
    // street ? address.push(street) : void 0
    // city ? address.push(city) : void 0

    try {
      const response = await fetch(`/api/editcandidate/${userId}`, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, phone, address}),
      });
      const json = await response.json();

      setPage();
      setAlertValue((e) => ({
        ...e,
        open: "block",
        title: "SENT",
        message: "Process Started",
        color: "text-purple-600",
      }));
    } catch (error) {
      setAlertValue((e) => ({
        ...e,
        open: "block",
        title: "Sorry",
        message: "Server Error !",
        color: "text-red-600",
      }));
    }
  };

  return (
    <div>
      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Primary Email</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="email.primary"
          placeholder="Primary Email"
          value={email.primary}
          onChange={(e)=>setEmail(o=>({...o, primary:e.target.value}))}
        />
        <p
          onClick={() =>
            setShowSecondEmail((v) => (v === "flex" ? "hidden" : "flex"))
          }
          src="/assets/img/AddAdditionalEmail.png"
          className="absolute mr-4 w-10 text-2xl font-extrabold cursor-pointer border-2 bg-purple-400 border-purple-500 text-white rounded-full flex justify-center "
          alt="Search Icon"
        >
          +
        </p>
      </div>
      <div
        className={`${showSecondEmail} w-2/3 justify-end items-center relative`}
      >
        <div className="w-48">
          <label>Secondary Email</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="email.secondary"
          placeholder="Secondary Email"
          value={email.secondary}
          onChange={(e)=>setEmail(o=>({...o, secondary:e.target.value}))}
        />
      </div>

      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Primary Phone</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="phone.primary"
          placeholder="Primary Phone"
          value={phone.primary}
          onChange={(e)=>setPhone(o=>({...o, primary:e.target.value}))}
        />
        <p
          onClick={() =>
            setShowSecondPhone((v) => (v === "flex" ? "hidden" : "flex"))
          }
          src="/assets/img/AddAdditionalPhone.png"
          className="absolute mr-4 w-10 text-2xl font-extrabold cursor-pointer  bg-purple-400 text-white rounded-full flex justify-center "
          alt="Search Icon"
        >
          +
        </p>
      </div>
      <div
        className={`${showSecondPhone} w-2/3 justify-end items-center relative`}
      >
        <div className="w-48">
          <label>Secondary Phone</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="phone.secondary"
          placeholder="Secondary Phone"
          value={phone.secondary}
          onChange={(e)=>setPhone(o=>({...o, secondary:e.target.value}))}
        />
      </div>

      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Street</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="address.street"
          placeholder="Street Address"
          value={address.street}
          onChange={(e)=>setAddress(o=>({...o, street:e.target.value}))}
        />
      </div>
      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>City</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="address.city"
          placeholder="City, Country"
          value={address.city}
          onChange={(e)=>setAddress(o=>({...o, city:e.target.value}))}
        />
      </div>
      <div className="w-2/3 flex justify-end items-center relative">
        <button
          onClick={handleNextClick}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 text-center inline-flex items-center hover:border-transparent rounded"
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
