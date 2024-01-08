
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

import { Box} from '@mui/material';

export default function SavedItem({list,remove}){
  const [listvisible,setListvisible]=useState(false);
  const removelist=()=>{
    remove(list.name);
  };
  const togglelist=()=>{
    setListvisible(!listvisible);
   
  }
  
    return (
<List >
   
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={removelist} >
        <DeleteIcon />
      </IconButton>
    }
  >
    
    <ListItemAvatar>
      <Avatar onClick={togglelist} >
        <FolderIcon/>
      </Avatar>
    </ListItemAvatar>
    

    <ListItemText
      primary={list.name}
      
    />
  </ListItem>
  {listvisible && list && list.items && Array.isArray(list.items) && (
      <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',
        alignItems:'center' 
      }}>
        <p>{list.name}:</p>
        <ul >
          {list.items.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span> - <span>{item.completed?"✅":"❌"}</span>
            </li>
          ))}
        </ul>
      </Box>
    )}
</List>
    )
}