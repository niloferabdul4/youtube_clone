import React,{useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Stack,Box, Typography} from '@mui/material'
import Videos from '../Components/Videos'
import { fetchFromApi } from '../Utils/fetchFromApi'
import axios from 'axios'
const Home = () => {
  const {state:{selectedMenu},dispatch}=useContext(AppContext)
  
 /*
   useEffect(()=>{ 
                fetchFromApi(`search?part=snippet&q=${selectedMenu}`)
               .then(response=>response.json())
               .then(response=> dispatch({type:'LOAD_DATA',payload:response.items}))
                
                
                  
},[selectedMenu])
*/
useEffect(()=>{
 fetchFromApi(`search?part=snippet&q=${selectedMenu}`) 
 .then((data)=>dispatch({type:'LOAD_DATA',payload:data.items}))
},[selectedMenu])

  return (
    <>
       <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},p:{sx:0,md:2}}}>
              <Sidebar/>
            </Box>
            <Box p={4} sx={{height:{sx:'auto',md:'92vh'},overflowY:'auto',flex:'2'}}>
              <Typography variant='h5' fontWeight='bold' p={2}>
                  {selectedMenu} <span>videos</span>
              </Typography> 
              <Videos />             
            </Box>              
        </Stack>       
    </>
  )
}

export default Home
