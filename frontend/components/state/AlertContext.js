import { createContext, useState } from "react";

export const AlertContext = createContext();


const AlertState = ({ children }) => {

    const [alertValue, setAlertValue] = useState({
        open: 'hidden',
        title: 'Success',
        message: 'Task Completed',
        color: 'text-purple-600',
        timeout: 3000,
    })

    return (
        <AlertContext.Provider value={{ alertValue, setAlertValue }}>
                {children}
        </AlertContext.Provider>
      );

}

export default AlertState
