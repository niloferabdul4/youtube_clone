import React, { useContext, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import { Stack,Box, CardMedia,Card,CardContent,Typography } from '@mui/material'
import ChannelCard from '../Components/ChannelCard'
import VideoCard from '../Components/VideoCard'


const ChannelDetails = () => {
    const {state:{data,channelVideos},dispatch}=useContext(AppContext)
   // console.log(data)
   const {id}=useParams()
    useEffect(()=>{ 
      fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCc607gH3CuMyOE_8c7lPFGxPCzjL2dv9A`)
          .then(res=>res.json())
          .then(res=>{
            dispatch({type:'LOAD_CHANNEL_VIDEOS',payload:res.items})  
            
         
})
},[id])
console.log(channelVideos)
  return (
    <div>
        
        <Stack pl={20}>          
              <Box >                  
                  <ChannelCard channel={channelVideos[0]} />
              </Box>
              <Box sx={{display:'flex', flexWrap:'wrap',flexDirection:'row',gap:'10',height:{sx:'auto',md:'92vh'}}} >
                  {data.filter(item=>item.id?.videoId).map(filteredItem=>{return <>                  
                    <VideoCard video={filteredItem} />
                
                </>})}
              </Box>
                
                        
   
             </Stack>
    </div>
  
  )
}

export default ChannelDetails
