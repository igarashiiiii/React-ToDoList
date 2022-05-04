import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

export const FillIn = () => {
  return (
    <>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="outlined">Add</Button>
      <Box>
        <List>
          <ListItemText primary="Trash" />
          <DoneOutlineOutlinedIcon></DoneOutlineOutlinedIcon>
        </List>
      </Box>
    </>
  );
};
