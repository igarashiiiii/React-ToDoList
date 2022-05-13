import React, { useState , useContext, useCallback} from 'react';
//global state↓↓
import { ListContext } from '../gobalComponents/listContent';
//model↓↓
import { dbModel } from '../model/DbModel';
//MUI↓↓
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//↓画面遷移
import { Link } from 'react-router-dom';


export const Done = () => {
 //↓グローバルsytateからTodo項目を配列を取得。MySQLへ移行予定
  let { list, setList } = useContext(ListContext)

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

  //yetボタン押したときの挙動 idで該当のオブジェクトを抽出し、statusをyetにする
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
      <p>完了リスト</p>
      <Box>
         {
          list.filter((value: any) => value.status === "done").map(
            (mapValue: any) =>
              <p key={mapValue.id}>
                {mapValue.text}
                <Button variant="outlined" onClick={() => clickYet(mapValue)}>yet</Button>
                <Button variant="outlined" onClick={() => clickDelete(mapValue)}>delete</Button>
              </p>
          )
        }   
      </Box>
      <Link to="/">fillInページに移動</Link><br />
      <Link to="/yet">yetページに移動</Link><br />
      <Link to="/done">doneページに移動</Link>
    </div>
  );
};