import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle } from '../Utils/Utils'
const VideoCard = ({video:{id,snippet,statistics}}) => {

  return (
    <div>
      <Card  sx={{ width: { xs: '340px', sm: '378px', md: "320px", }, boxShadow: "none" , flexWrap:'wrap'}}>
            <Link to={id.videoId? ( `/videos/${id.videoId}`) : (`/videos/4-Yv4PzseHU?si=SAnN_yVqU8pItNyz`)} >
            <CardMedia sx={{ width: { xs: '340px', sm: '358px'}, height: 200 }} 
                            component="img"
                            alt={`${snippet?.title}`}                           
                            image={id.videoId? (snippet?.thumbnails?.high?.url) : demoThumbnailUrl  } 
            />
            </Link>

            <CardContent sx={{height:130}}>
               <Link to={ id.videoId? (`/videos/${id.videoId}`): demoVideoUrl} >
                    <Typography variant='subHeading' component='div' >
                    {String(snippet?.title.slice(0,80)) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? (`/channel/${snippet?.channelId}`):demoChannelUrl}>
                    <Typography variant="subTitle1" color="#808080" alignItems='center'>
                      {snippet?.channelTitle}
                      <CheckCircle sx={{ fontSize: "18px", color: "gray", ml: "5px" }} />
                    </Typography>
                      
                 </Link>
            </CardContent>
           
 </Card>
    </div>
  )
}

export default VideoCard