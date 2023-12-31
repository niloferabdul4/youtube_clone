import React,{useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Stack,Box, Typography} from '@mui/material'
import Videos from '../Components/Videos'
import { fetchFromApi } from '../Utils/fetchFromApi'
import Header from '../Components/Header'
import { collection,addDoc, getDocs, where } from '@firebase/firestore'
import { db } from '../firebase'


const Home = () => {
  const {state:{selectedMenu},dispatch}=useContext(AppContext)  
 
   useEffect(()=>{ 
                fetchFromApi(`search?part=snippet&q=${selectedMenu}`)              
               .then((items)=> dispatch({type:'LOAD_VIDEOS',payload:items}))                               
},[selectedMenu])



  return (
    <div>
    
       <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},px:{sm:0,sx:0,md:2}}}>
              <Sidebar/>
            </Box>
            <Box  sx={{height:{sx:'auto',md:'92vh'},p:{sx:3,sm:3,md:6}, overflowY:'auto',flex:'2'}}>
              <Typography variant='h6'  py={3} px={1}>
               {selectedMenu.toUpperCase()} <span>Videos</span>
              </Typography> 
              <Videos />             
            </Box>              
        </Stack>       
    </div>
  )
}

export default Home