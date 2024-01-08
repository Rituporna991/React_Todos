
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import SavedLists from './SavedLists';
import { useState } from 'react';
import TodoList from './TodoList';
import Alert from '@mui/material/Alert';

export default function Navbar() {
 const [clicked,setClicked]=useState(false);
 const handleclick=()=>{
  setClicked(!clicked);
 };
 const [showAlert, setShowAlert] = useState(false);

 
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          onClick={handleclick}
         
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      
       
      
    </Box>
  );
}