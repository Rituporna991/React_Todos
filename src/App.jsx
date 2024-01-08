import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import Box from "@mui/material/Box";
import TodoList from './TodoList'
import Navbar from "./Navbar"
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


function App() {
  const [count, setCount] = useState(0);
  const [start,setStart]=useState(false);
  const handleclick=()=>{
    setStart(!start);
  };
  const goback=()=>{
    setStart(false);
  }

  return (
    <>
      <CssBaseline/>
      <Navbar />
     
      {!start &&(
        <Box sx={{display:'flex',justifyContent:'center',m:5}}>
    <Card style={{ border: 'none', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/finalanim.gif"
          alt="green iguana"
        />
        <CardContent sx={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" onClick={handleclick}>Create a Todo List</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  )}
     
      {start && <TodoList goback={goback}/>}
    </>
  )
}

export default App
