import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{
 const [menu, setMenu] = useState(false)
 const [active, setActive] = useState(false)

 return (
   <AppContext.Provider value={{ menu, setMenu, active, setActive }}>
     {children}
   </AppContext.Provider>
 )
}

export const useGlobalContext = ()=>{
 return useContext(AppContext);
}