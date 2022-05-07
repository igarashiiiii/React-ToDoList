import React, { useState , useContext} from 'react';
import { Lists } from '../gobalComponents/globalComponents';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';


export const FillIn = () => {
  
  //objの型定義any以外にしたい
  const obj:any = useContext(Lists);
  const [thing, setThing] = useState("");
  const [addthing, setAddThing] = useState("");
  const onClickText = () => {
    setAddThing(thing);
  }
  console.log(obj.info)
  return (
    <div>
      
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(event) => setThing(event.target.value)}/>
      <Button variant="outlined" onClick={onClickText}>Add</Button>
      <Box>
        <List>
          <ListItemText primary="Trash" />
          <DoneOutlineOutlinedIcon></DoneOutlineOutlinedIcon>
        </List>
      </Box>
      <p>{addthing}</p>
    </div>
  );
};
