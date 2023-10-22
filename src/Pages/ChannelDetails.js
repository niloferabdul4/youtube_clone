import React, { useContext, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import { Stack,Box, CardMedia,Card,CardContent,Typography } from '@mui/material'
import ChannelCard from '../Components/ChannelCard'
import VideoCard from '../Components/VideoCard'


const ChannelDetails = () => {
    const {state:{data}}=useContext(AppContext)
    console.log(data)
   
  return (
    <div>
        
        <Stack >
          
              <Box>
                  <div style={{background: 'linear-gradient(#e66465, #9198e5)',height:'300px'}}/>
                  <ChannelCard channel={data[0]}  />
              </Box>
            
                
                         {data.filter(item=>item.id.videoId).map(filteredItem=>{return <>
                          <Box p={2} display="flex">
    
                             <VideoCard video={filteredItem}/>
               
                       </Box>
                         
                         </>})}
   
             </Stack>
    </div>
  
  )
}

export default ChannelDetails
