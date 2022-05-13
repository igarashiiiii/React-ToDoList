import React, { useState , useContext, useCallback} from 'react';
//global state↓↓
import { ListContext } from '../gobalComponents/listContent';
//model↓↓
import { dbModel } from '../model/DbModel';
//MUI↓↓
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//↓画面遷移
import { Link } from 'react-router-dom';


//createIdの生成
let createId: number = 3

export const FillIn = () => {
  //↓グローバルstateからTodo項目を配列を取得。MySQLへ移行予定
  let { list, setList } = useContext(ListContext)
  //↓ToDoを入力
  const [thing, setThing] = useState("");

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
    console.log(list)
  }

  return (
    <div>
      <div>
        <TextField id="standard-basic" label="Standard" variant="standard" onChange={(event) => setThing(event.target.value)} value={thing}/>
        <Button variant="outlined" onClick={onClickText}>Add</Button>
      </div>
      <Link to="/">fillInページに移動</Link><br />
      <Link to="/yet">yetページに移動</Link><br />
      <Link to="/done">doneページに移動</Link>
    </div>
  );
};
