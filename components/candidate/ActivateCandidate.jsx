import React, { useContext } from 'react'
import { AlertContext } from '../state/AlertContext';

const ActivateCandidate = ({userId, setPage}) => {

    const {setAlertValue} = useContext(AlertContext)

    const handleNextClick = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`/api/editcandidate/${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ active: true }),
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
    <div className="flex justify-center items-center  ">
      <div>
        <div className="flex justify-center items-center relative border-b-2 mb-4 pb-3 border-stone-400 ">
          <p className="text-3xl"> Submit and Activate your profile</p>
        </div>
        <button
          className="bg-purple-500 hover:bg-purple-300 hover:text-white py-3 px-4 border-2 border-purple-500 rounded"
          onClick={handleNextClick}
        >
          Submit & view 
        </button>
      </div>
    </div>
  )
}

export default ActivateCandidate
