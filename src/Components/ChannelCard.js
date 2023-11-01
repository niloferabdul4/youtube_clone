import { Box,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { AppContext } from '../Context/AppContextProvider'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../Utils/Utils'
const ChannelCard = ({channel,marginTop}) => {
   //console.log(channel)

  return (
    <>
      <Box sx={{  boxShadow: 'none',   
                  borderRadius:'20px',
                  color:'black',
                  height: '200px',
                  margin:'auto',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  width:{xs:'200px',sm:'250px',md:'320px'},
                  marginTop,
                  
                
  }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
              <CardContent sx={{display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                textAlign:'center'}}>
                    <CardMedia
                              image={channel?.snippet?.thumbnails?.default?.url || demoProfilePicture}
                              alt={channel?.snippet?.title}
                              sx={{ borderRadius: '50%', height: '160px', width: '160px', mb: 2, border: '1px solid #e3e3e3' }}
                      />
                      <Typography variant="h6">
                        {channel?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                      </Typography>
                      {channel?.statistics?.subscriberCount && (
                        <Typography variant='body2' sx={{ fontSize: '15px', fontWeight: 500, color: 'black' }}>
                          {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                      )}
              </CardContent>
           </Link>
      </Box>
      
    </>
  )
}

export default ChannelCard
