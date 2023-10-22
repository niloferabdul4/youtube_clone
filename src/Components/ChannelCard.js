import { Box,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { AppContext } from '../Context/AppContextProvider'
import { Link } from 'react-router-dom'
const ChannelCard = ({channel,marginTop}) => {
   console.log(channel)

  return (
    <>
      <Box sx={{ boxShadow: 'none',
                  borderRadius: '20px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'black',
                  width: { xs: '356px', md: '320px' },
                  height: '200px',
                
                
  }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
              <CardContent>
            <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channel?.snippet?.title}{' '}
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
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
