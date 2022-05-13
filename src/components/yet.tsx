import React, { useState , useContext, useCallback} from 'react';
//global state↓↓
import { ListContext } from '../gobalComponents/listContent';
//model↓↓
import { dbModel } from '../model/DbModel';
//MUI↓↓
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export const Yet = () => {
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

  return (
    <div>
      <p>未完了リスト</p>
      <Box>
        {
          list.filter(function (database:dbModel) {
            database.status === "yet"
          }).map((yetText:any) => (
            yetText.text !== "" &&
            <p key={yetText.id} >
              {yetText.text}
              <Button variant="outlined" onClick={() => clickDone(yetText)}>done</Button>
              <Button variant="outlined" onClick={() => clickDelete(yetText)}>delete</Button>
            </p>
          ))
        }
      </Box>
    </div>
  );
};