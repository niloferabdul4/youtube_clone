import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import {Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
//import ChannelCard from './ChannelCard'

const Videos = () => {
    const {state:{videos}}=useContext(AppContext)
 //console.log(data)
  return (
    <div>
        <Stack direction='row' flexWrap='wrap'  alignItems="start" gap={2} sx={{justifyContent:{md:'start',xs:'center',sm:'center'}}}>
         
            {videos?.map((item,index)=>{return <>
                <Box key={index} >
                     {item.id.videoId &&<VideoCard video={item} />}
                     {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            
            </>})}
        </Stack>
    </div>
  )
}

export default Videos