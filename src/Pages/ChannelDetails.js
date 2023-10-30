import React, { useContext, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import { Box } from '@mui/material'
import ChannelCard from '../Components/ChannelCard'
import VideoCard from '../Components/VideoCard'
import { fetchFromApi } from '../Utils/fetchFromApi'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'


const ChannelDetails = () => {
    const {state:{channelDetails,channelVideos},dispatch}=useContext(AppContext)
   // console.log(data)
   const {id}=useParams()
   /*
   
   channel details:
   //https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCBVjMGOIkavEAhyqpxJ73Dw

   channel videos:
   //https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50

   */

   useEffect(()=>{
    fetchFromApi(`channels?part=snippet%2Cstatistics&id=${id}`)
    .then((data)=>dispatch({type:'LOAD_CHANNEL_DETAILS',payload:data.items[0]}))

    fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`)
    .then((data)=>dispatch({type:'LOAD_CHANNEL_VIDEOS',payload:data.items}))
   },[id])

  return (
    <div>
       <Header/>
        <Box minHeight="95vh" gap={2.5} >           
              <Box>  
                  <div style={{
                  height:'250px',
                  background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                  zIndex: 10,
                }} />                
                  <ChannelCard channel={channelDetails} marginTop='-125px' />
              </Box>
              <Box pl={{sx:0,md:8}}>             
                  <Box sx={{display:'flex', flexWrap:'wrap',flexDirection:'row',gap:'20px',height:{sx:'auto',md:'92vh'}}} >
                      {channelVideos?.map(video=>{return <>                  
                        <VideoCard video={video} />
                    
                    </>})}
                  </Box>
              </Box>
             </Box>
    </div>
  
  )
}

export default ChannelDetails
