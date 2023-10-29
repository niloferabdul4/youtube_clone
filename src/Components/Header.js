import React,{useContext} from 'react'
import { Box, IconButton, Paper, Stack,Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';
import { AppContext } from '../Context/AppContextProvider';
import { fetchFromApi } from '../Utils/fetchFromApi';


const Header = () => {
  const {state:{searchText},dispatch}=useContext(AppContext)

  const handleSubmit=(event)=>{
    event.preventDefault();
    fetchFromApi(`search?part=snippet&q=${searchText}`) 
   .then((data)=>dispatch({type:'LOAD_FILTERED_VIDEOS',payload:data.items}))
  
  
  }


  return (
    <>
 

  <Stack direction='row' alignItems='center' sx={{position:'sticky',px:4,py:2,top:0,justifyContent:'space-between',zIndex:'100',backgroundColor:'whitesmoke'}} >
       <Box sx={{flexDirection:'row'}}>
           <Avatar src='/assets/logo1.png' alt=''height={40} />
             
       </Box>
       <Box >
           <Paper component='form' 
                  onSubmit={handleSubmit}
                  sx={{
                  boxShadow:'none',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  pl:2,
                  border:'1px solid #e3e3e3',
                  borderRadius:20}}>
                 <input type='text' placeholder='Search...'  className='search-bar' alt='' onChange={(event)=>{dispatch({type:'SEARCH_TEXT',payload:event.target.value})}} />
                 <IconButton type='submit' sx={{p:{m:'10px',sm:'2px',xs:'1px'}}}>
                       <Search />
                 </IconButton>
                
           </Paper>
        </Box>
  </Stack>
  </>
  )
}

export default Header
