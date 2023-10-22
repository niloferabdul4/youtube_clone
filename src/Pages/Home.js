import React,{useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Stack,Box, Typography} from '@mui/material'
import Videos from '../Components/Videos'


const Home = () => {
  const {state:{selectedMenu},dispatch}=useContext(AppContext)
  
   useEffect(()=>{ 
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&tags&maxResults=15&q=${selectedMenu}%20&regionCode=IN&key=AIzaSyCc607gH3CuMyOE_8c7lPFGxPCzjL2dv9A`)
                .then(res=>res.json())
                .then(res=>{
                  dispatch({type:'LOAD_DATA',payload:res.items})  
                  
               
   })
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
