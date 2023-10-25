import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle } from '../Utils/Utils'
const VideoCard = ({video:{id,snippet}}) => {
 
  return (
    <div>
      <Card  sx={{ width: { xs: '358px', sm: '368px', md: "320px", }, boxShadow: "none" }}>
            <Link to={id.videoId? ( `/videos/${id.videoId}`) : (`/videos/4-Yv4PzseHU?si=SAnN_yVqU8pItNyz`)} >
            <CardMedia sx={{ width: { xs: '358px', sm: '368px'}, height: 200,borderRadius:'20px' }} 
                            component="img"
                            alt={`${snippet?.title}`}
                           
                            image={id.videoId? (snippet?.thumbnails?.high?.url) : demoThumbnailUrl  } 
            />
            </Link>

            <CardContent sx={{height:180}}>
               <Link to={ id.videoId? (`/videos/${id.videoId}`): demoVideoUrl} >
                    <Typography variant='subHeading' component='div' >
                    {snippet?.title.slice(0,50) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? (`/channel/${snippet?.channelId}`):demoChannelUrl}>
                    <Typography variant="subTitle4" color="#808080">
                      {snippet?.channelTitle}
                      <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                 </Link>
            </CardContent>
           
 </Card>
    </div>
  )
}

export default VideoCard
