import React, { createContext, useState } from "react"


export const ListContext = createContext({});

export const ListInformation = (props:any) => {
  const {children} = props;
  const [lineInfo, setLineInfo] = useState(null)
  return (
    <ListContext.Provider value={{lineInfo, setLineInfo}}>
      {children}
    </ListContext.Provider>
  )
}