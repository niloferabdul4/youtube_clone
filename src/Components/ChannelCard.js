import { Box,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { AppContext } from '../Context/AppContextProvider'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({channel,marginTop}) => {
   //console.log(channel)

  return (
    <>
      <Box sx={{  boxShadow: 'none',   
                  borderRadius:'20px',
                  color:'black',
                  height: '256px',
                  margin:'auto',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  width:{xs:'180px',sm:'200px',md:'300px'},
                  marginTop,
                  mb:2
                
  }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
              <CardContent sx={{display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                textAlign:'center'}}>
                    <CardMedia
                              image={channel?.snippet?.thumbnails?.default?.url}
                              alt={channel?.snippet?.title}
                              sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 1, border: '1px solid #e3e3e3' }}
                      />
                      <Typography variant="h6">
                        {channel?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
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
