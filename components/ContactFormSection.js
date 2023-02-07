import { useContext, useState } from "react";
import {Spinner} from "./Spinner";
import { AlertContext } from "./state/AlertContext";


const ContactFormSection = ({state, candidate}) => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
	const [isSending, setIsSending] = useState(false)

  const {setAlertValue} = useContext(AlertContext)

  const handleSend = async (e) => {
    e.preventDefault();
    setIsSending(true)

    if(!name || !email || !message) {
      setIsSending(false)
      return setAlertValue(e=>({...e, open: 'block', title: 'Sorry', message: 'Some fields are missing!', color:'text-red-600' }))
    }

			try {
				const response = await fetch('api/contact',{
					method: 'POST',
					headers: {
						'Content-Type' : 'application/json',
					},
					body: JSON.stringify({name, email, message})
				})
				const json = await response.json();
        setAlertValue(e=>({...e, open: 'block', title: 'SENT', message: 'Message Sent Successfully!', color:'text-purple-600' }))

				setMessage('')
				setIsSending(false);
			} catch (error) {
        setAlertValue(e=>({...e, open: 'block', title: 'Sorry', message: 'Internal error, please try again', color:'text-red-600' }))
				setIsSending(false);
			}


  }

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's a contact form
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          Please feel free to shout at me
        </p>
      </div>
      <form className="mx-auto w-full pt-10 sm:w-3/4">
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <input
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={handleSend} className={`mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20`} disabled={isSending}>
         {isSending &&  <><Spinner /> <span>sending...</span></> }
         {!isSending && <span>Send</span>}
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+977) {candidate.phone.primary.substring(0,4)} {candidate.phone.primary.substring(4,10)}
          </p>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+977) {candidate.phone.secondary.substring(0,4)} {candidate.phone.secondary.substring(4,10)}
          </p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            {candidate.email.primary}
          </p>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
          {candidate.email.secondary}
          </p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            {candidate.address.street}
          </p>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            {candidate.address.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
