import { useState,useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SavedLists from "./SavedLists"
import { createTheme } from '@mui/material/styles';




const getInitialdata=()=>{
    const data=JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    else return data;
};
const getInitiallist=()=>{
    const data=JSON.parse(localStorage.getItem("savedLists"));
    if(!data) return [];
    else return data;
}

export default function TodoList({goback}){
    const [todos,setTodos]=useState(getInitialdata);
    const [savedLists, setSavedLists] = useState(getInitiallist);
    const [listname,setListname]=useState("");

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
    useEffect(()=>{
        localStorage.setItem("savedLists",JSON.stringify(savedLists));
    },[savedLists]);

    // useEffect(() => {
    //     const storedLists = localStorage.getItem('savedLists');
    //     if (storedLists) {
    //       setSavedLists(JSON.parse(storedLists));
    //     }
    //   }, []);

      const saveList = () => {
        if (todos.length > 0 && listname.trim() !== '') {
          // Copy the current list and add it to savedLists with the given name
          const newSavedLists = [...savedLists, { name: listname, items: [...todos] }];
          setSavedLists(newSavedLists);
    
          // Clear the current list and list name
          setTodos([]);
          setListname('');
    
          // Save to local storage
          localStorage.setItem('savedLists', JSON.stringify(newSavedLists));
        }
      };
    const removeTodo=(id)=>{
        setTodos((todos)=>{
            return todos.filter(t=> t.id!==id);
        })
    };
    const removeList=(name)=>{
        setSavedLists((list)=>{
            return list.filter(n=>n.name!==name)
        })
    }
    const toggleTodo=(id)=>{
        setTodos(prevtodos=>{
            return prevtodos.map(t =>{
                if(t.id===id){
                    return {...t,completed:!t.completed}
                }else{
                    return t;
                }
            })
        })
    };
    const addTodo=(text)=>{
        setTodos(prevTodos=>{
            return [...prevTodos,{text:text,id:crypto.randomUUID(),completed:false}]
        })
    };
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-evenly',
            flexDirection:'row',
            alignItems:'center',
            m:5,
            flexWrap:'wrap',
           
        }}>
       
        
       
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            m:5,
            

        }}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
          <input type="text" placeholder='list name' value={listname}
          onChange={(e)=>{setListname(e.target.value)}}
           />
        <List>
            {todos.map((todo)=>{
               return <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggle={()=> toggleTodo(todo.id)}/>
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
        <Button variant="contained" color="secondary" onClick={saveList}>Save</Button>
        <Button style={{margin:'10px'}} variant="contained" onClick={goback}>Go back</Button>
        </Box>
        <SavedLists savedLists={savedLists} remove={removeList}/>
      
        </Box>
    )
}


// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={todo.id}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined}  dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={todo.completed}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${todo.text}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }