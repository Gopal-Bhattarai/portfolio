import { useContext, useEffect } from "react";
import { AlertContext } from "./state/AlertContext";

const Alert = () => {

    const {alertValue, setAlertValue} = useContext(AlertContext)

    useEffect(()=>{
        setTimeout(()=>{
          setAlertValue((e)=>({...e, open: 'hidden'}))
        },alertValue.timeout)
        //react-hooks/exhaustive-deps
    },[alertValue.open])

  return (
    <div className={`flex justify-center ${alertValue.open}`}>
      <div
        className={`fixed bottom-0 z-50 w-full bg-purple-100 border-t-4 ${alertValue.color} rounded-b text-${alertValue.color}-900 px-4 py-3 shadow-md`}
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className={`fill-current h-6 w-6 text-${alertValue.color}-500 mr-4`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className={`font-bold ${alertValue.color}`}>{alertValue.title} </p>
            <p className="text-sm">
              {alertValue.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
