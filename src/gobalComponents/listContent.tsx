import React, { createContext, useState } from "react"
//model↓↓
import { dbModel } from '../model/DbModel';

export const ListContext = createContext();

//Todo項目を格納する配列(初期値)。MySQLへ移行予定
let database:dbModel[] = [
  {
    id:0,
    text:"test0",
    status:"yet"
  },
  {
    id:1,
    text:"test1",
    status:"yet"
  },
  {
    id:2,
    text:"test2",
    status:"done"
  }
]

export const ListInformation = (props:any) => {
  const {children} = props;
  const [list, setList] = useState(database)
  return (
    <ListContext.Provider value={{list, setList}}>
      {children}
    </ListContext.Provider>
  )
}