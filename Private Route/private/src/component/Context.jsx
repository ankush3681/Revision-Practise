import React, { createContext, useState } from 'react';

export const Authcontext = createContext();

export const Context = ({children}) => {
    const [isauth,setIsauth] = useState(false);
    const authLogin = ()=>{
        setIsauth(true);
    }
  return ( 
    <div>
      
      <Authcontext.Provider value={{isauth,authLogin}}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}


