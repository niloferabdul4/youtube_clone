import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({video:{id,snippet,statistics}}) => {
  return (
    <div>
      <Card  sx={{ width: { xs: '100%', sm: '358px', md: "340px", }, boxShadow: "none", borderRadius: 0,mr:5 }}>
            <Link to={ `/videos/${id.videoId}`} >
            <CardMedia sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
                            component="img"
                            alt={`${snippet?.title}`}
                            image={snippet?.thumbnails?.high?.url  } 
            />
            </Link>

            <CardContent sx={{height:180}}>
               <Link to={ `/videos/${id.videoId}`} >
                    <Typography variant='subHeading' component='div' >
                    {snippet?.title.slice(0,50)}...
                    </Typography>
                </Link>
                
                    <Typography variant="subtitle2" color="gray">
                      {snippet?.channelTitle}
                      <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
              
            </CardContent>
           
 </Card>
    </div>
  )
}

export default VideoCard
