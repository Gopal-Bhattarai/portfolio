import React, { useContext, useState } from "react";
import { AlertContext } from "../state/AlertContext";

const ProficiencyInfo = ({userId, setPage}) => {

    const {setAlertValue} = useContext(AlertContext)

    const [proficiency, setProficiency] = useState({
        item1: {
            key: '',
            value: '',
        },
        item2: {
            key: '',
            value: '',
        },
        item3: {
            key: '',
            value: '',
        },
        item4: {
            key: '',
            value: '',
        },
    })

    const handleNextClick = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`/api/editcandidate/${userId}`, {
            method: "POST",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({proficiency}),
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
      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>1. Proficiency Key</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item1.key"
          placeholder="Proficiency subject"
          value={proficiency.item1.key}
          onChange={(e)=>setProficiency(p=>({...p, item1: ({...p.item1, key: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>1. Proficiency Values</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item1.value"
          placeholder="Proficiency Value (0-100)"
          value={proficiency.item1.value}
          onChange={(e)=>setProficiency(p=>({...p, item1: ({...p.item1, value: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>2. Proficiency Key</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item2.key"
          placeholder="Proficiency subject"
          value={proficiency.item2.key}
          onChange={(e)=>setProficiency(p=>({...p, item2: ({...p.item2, key: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>2. Proficiency Values</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item2.value"
          placeholder="Proficiency Value (0-100)"
          value={proficiency.item2.value}
          onChange={(e)=>setProficiency(p=>({...p, item2: ({...p.item2, value: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>3. Proficiency Key</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item3.key"
          placeholder="Proficiency subject"
          value={proficiency.item3.key}
          onChange={(e)=>setProficiency(p=>({...p, item3: ({...p.item3, key: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>3. Proficiency Values</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item3.value"
          placeholder="Proficiency Value (0-100)"
          value={proficiency.item3.value}
          onChange={(e)=>setProficiency(p=>({...p, item3: ({...p.item3, value: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>4. Proficiency Key</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item4.key"
          placeholder="Proficiency subject"
          value={proficiency.item4.key}
          onChange={(e)=>setProficiency(p=>({...p, item4: ({...p.item4, key: e.target.value})}))}
        />
      </div>

      <div className={`flex w-2/3 justify-end items-center relative`}>
        <div className="w-48">
          <label>4. Proficiency Values</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="proficiency.item4.value"
          placeholder="Proficiency Value (0-100)"
          value={proficiency.item4.value}
          onChange={(e)=>setProficiency(p=>({...p, item4: ({...p.item4, value: e.target.value})}))}
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

export default ProficiencyInfo;
