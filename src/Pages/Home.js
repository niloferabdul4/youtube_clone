import React,{useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Stack,Box, Typography} from '@mui/material'
import Videos from '../Components/Videos'
import { fetchFromApi } from '../Utils/fetchFromApi'
import axios from 'axios'
import { db } from '../firebase'
import { addDoc,collection, onSnapshot} from '@firebase/firestore'
import Header from '../Components/Header'
const Home = () => {
  const {state:{selectedMenu},dispatch}=useContext(AppContext)
  
 
   useEffect(()=>{ 
                fetchFromApi(`search?part=snippet&q=${selectedMenu}`)              
               .then((data)=> dispatch({type:'LOAD_VIDEOS',payload:data.items}))                               
},[selectedMenu])
/*
useEffect(()=>{
 fetchFromApi(`search?part=snippet&q=${selectedMenu}`) 
 //.then((data)=>dispatch({type:'LOAD_VIDEOS',payload:data.items}))
 .then((data)=>{

  const res=addDoc(collection(db,'videos'),data)
  getDataFromFirestore(res)
 })
},[selectedMenu])

const getDataFromFirestore=(res)=>
{
  res.items.map(item=>dispatch({type:'LOAD_VIDEOS',payload:item}))
}
*/
  return (
    <div>
       <Header/>
       <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},p:{sm:0,sx:0,md:2}}}>
              <Sidebar/>
            </Box>
            <Box  sx={{height:{sx:'auto',md:'92vh'},p:{sx:2,sm:2,md:6}, overflowY:'auto',flex:'2'}}>
              <Typography variant='h6' fontWeight='bold' py={3}>
                  {selectedMenu} <span>videos</span>
              </Typography> 
              <Videos />             
            </Box>              
        </Stack>       
    </div>
  )
}

export default Home