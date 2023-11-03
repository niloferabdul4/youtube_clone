import { Stack,Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import {Box} from '@mui/material'
import VideoCard from '../Components/VideoCard'
import ChannelCard from '../Components/ChannelCard'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const FilteredVideos = () => {
    const {state:{filteredVideos,searchText}}=useContext(AppContext)
 //console.log(data)
  return (
    <div>
       
       <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},p:{sm:0,sx:0,md:2}}}>
              <Sidebar/>
            </Box>
            <Box  sx={{height:{sx:'auto',md:'92vh'},p:{sx:3,sm:3,md:6}, overflowY:'auto',flex:'2'}}>
              <Typography variant='h6' fontWeight='bold' py={3} px={2}>
                  {searchText && searchText.toUpperCase() }<span>Videos</span>
              </Typography> 
              <Stack direction='row' flexWrap='wrap'  alignItems="start" gap={2.5} sx={{justifyContent:{md:'start',xs:'center',sm:'center'}}}>
            {
            filteredVideos.length>0 &&  filteredVideos?.map((item,index)=>{return <>
                <Box key={index} >
                     {item.id.videoId &&<VideoCard video={item} />}
                     {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            
            </>})
}
</Stack>
</Box>
        </Stack>
        
    </div>
  )
}

export default FilteredVideos