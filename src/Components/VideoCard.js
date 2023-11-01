import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle } from '../Utils/Utils'
const VideoCard = ({video:{id,snippet}}) => {

  return (
    <div>
      <Card  sx={{ width: { xs: '368px', sm: '368px', md: "320px", }, boxShadow: "none" ,borderRadius:0}}>
            <Link to={id.videoId? ( `/videos/${id.videoId}`) : (`/videos/4-Yv4PzseHU?si=SAnN_yVqU8pItNyz`)} >
            <CardMedia sx={{ width: { xs: '368px', sm: '368px'}, height: 180 }} 
                            component="img"
                            alt={`${snippet?.title}`}                           
                            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl  } 
            />
            </Link>

            <CardContent sx={{height:120 ,display:'flex',flexDirection:'column',alignItems:'flex-start',px:0}}>
               <Link to={ id.videoId? (`/videos/${id.videoId}`): demoVideoUrl} >
                    <Typography variant='subTitle1' >
                    {snippet?.title.slice(0,70) || demoVideoTitle.slice(0,70)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? (`/channel/${snippet?.channelId}`):demoChannelUrl}>
                    <Typography variant="subTitle2" color="gray" alignItems='center'>
                      {snippet?.channelTitle}
                      <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                    </Typography>
                      
                 </Link>
            </CardContent>
           
 </Card>
    </div>
  )
}

export default VideoCard