import { ListItem } from "@mui/material"
import List from '@mui/material/List';
import { Box,Typography } from '@mui/material';
import SavedItem from "./SavedItem";
import { createTheme } from '@mui/material/styles';
import Navbar from "./Navbar";

export default function SavedLists({savedLists,remove}){

    if (!savedLists) {
        return null; // or you can return a loading indicator or an empty state message
      }
    return(
        <Box sx={{border:'2px solid blue',
        height:'400px',
            overflow: 'auto', 
           borderRadius:'10px'
            
        }}>
        {/* <ul >
            {savedLists.map(l=>{
                return <li>{l.name}</li>
            })}
        </ul> */}
        <Typography variant="h6" component="h4" sx={{ flexGrow: 1,textAlign:'center',m:3,fontWeight:600 }}>
            Your Lists
          </Typography>
        <List>
            {savedLists.map((l)=>{
               return <SavedItem key={l.id} list={l} remove={remove} />
            })}
            
        </List>
        </Box>
       
    )
}

// {savedLists.map((savedList, index) => (
//     <div key={index}>
//       <h3>Saved List {index + 1}</h3>
//       <ul>
//         {savedList.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   ))}




