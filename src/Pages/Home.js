import React,{useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Stack,Box, Typography} from '@mui/material'
import Videos from '../Components/Videos'
import { BorderRight } from '@mui/icons-material'

const Home = () => {
  const {state:{data},dispatch}=useContext(AppContext)
  
   useEffect(()=>{ 
            fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&tags&maxResults=15&q=entertainment%20&regionCode=IN&key=AIzaSyDDMNEirsf8WtNERsYvDMYL6XsF7dnRxlQ')
                .then(res=>res.json())
                .then(res=>{
                  dispatch({type:'LOAD_DATA',payload:res.items})  
                  
               
   })
},[])

  return (
    <>
       <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},p:{sx:0,md:2}}}>
              <Sidebar/>
            </Box>
            <Box p={2} sx={{height:{sx:'auto',md:'92vh'},overflowY:'auto',flex:'2'}}>
              <Typography variant='h5' fontWeight='bold'>
                  New <span>videos</span>
              </Typography> 
              <Videos />             
            </Box>              
        </Stack>       
    </>
  )
}

export default Home
