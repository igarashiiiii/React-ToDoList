import React, { useState , useContext, useCallback} from 'react';
//global state↓↓
import { ListContext } from '../gobalComponents/listContent';
//model↓↓
import { dbModel } from '../model/DbModel';
//MUI↓↓
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

//createIdの生成
let createId:number = 3
export const FillIn = () => {
  //↓Todo項目を格納する配列(databaseは初期値)。MySQLへ移行予定
  let [list,setList] = useState(database)
  //↓ToDoを入力
  const [thing, setThing] = useState("");
  //objの型定義any以外にしたい↓  
  const obj:any= useContext(ListContext); 

  //addボタンをクリックしたときの挙動
  //databaseに新規のToDo項目を追加（useStateの更新setList）
  function onClickText(){
    createId += 1
    let addObject:dbModel= {
      id: createId,
      text: thing,
      status: "yet",
    }
    const newDataBase:dbModel[] = [...list,addObject]
    setList(newDataBase)
    setThing("")
  }

  //deleteボタン押したときの挙動
  function clickDelete(n:any){
    let tempo:any = []
    for(let i = 0; i < list.length; i++){
      if(list[i].id === n.id){
        continue
      }else{
        tempo.push(list[i])
      }
    }
    console.log(list)
    setList(tempo)
    console.log(list)
  }

  //doneボタン押したときの挙動 idで該当のオブジェクトを抽出し、statusをDoneにする
  function clickDone(n:any){
    let tempo:any = []
    for(let i = 0; i < list.length; i++){
      if(list[i].id === n.id){
        list[i].status = "done"
        tempo.push(list[i])
      }else{
        tempo.push(list[i])
      }
    }
    setList(tempo)
  }

//yetボタン押したときの挙動
//doneボタン押したときの挙動 idで該当のオブジェクトを抽出し、statusをyetにする
function clickYet(n:any){
  let tempo:any = []
  for(let i = 0; i < list.length; i++){
    if(list[i].id === n.id){
      list[i].status = "yet"
      tempo.push(list[i])
    }else{
      tempo.push(list[i])
    }
  }
  setList(tempo)
} 

  return (
    <div>
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(event) => setThing(event.target.value)} value={thing}/>
      <Button variant="outlined" onClick={onClickText}>Add</Button>
      <p>未完了リスト</p>
      <Box>
        {
          list.filter(database => database.status === "yet").map((yetText:any) => (
            yetText.text !== "" &&
            <p key={yetText.id} >
              {yetText.text}
              <Button variant="outlined" onClick={() => clickDone(yetText)}>done</Button>
              <Button variant="outlined" onClick={() => clickDelete(yetText)}>delete</Button>
            </p>
          ))
        }
      </Box>

      <p>完了リスト</p>
      <Box>
          {
            list.filter(database => database.status === "done").map((doneText:any) => 
            <p key={doneText.id}>
              {doneText.text}    
              <Button variant="outlined" onClick={() => clickYet(doneText)}>yet</Button>
              <Button variant="outlined" onClick={() => clickDelete(doneText)}>delete</Button>
          </p>
          )  
          }       
      </Box>
      {/* <p>{addthing}</p> */}
    </div>
  );
};
