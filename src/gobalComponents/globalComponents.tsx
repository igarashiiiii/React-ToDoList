import React, { createContext, useState } from "react";


export const Lists = createContext({});

export const ListsProvider = (props:any) => {
  const { children } = props;
  const [info, setInfo] = useState("aaaaaaaaaaaaaaaaaaa")
  return(
    <Lists.Provider value={{info, setInfo}}>
      {children}
    </Lists.Provider>
  )
}