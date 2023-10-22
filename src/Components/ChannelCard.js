import { Box,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { AppContext } from '../Context/AppContextProvider'
import { Link } from 'react-router-dom'
const ChannelCard = ({channel,marginTop}) => {
   //console.log(channel)

  return (
    <>
      <Box sx={{ boxShadow: 'none',                
                  color:'black',
                  width: { xs: '200px', md: '200px' },
                  height: '300px',
                  
                
  }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
              <CardContent>
            <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          sx={{ borderRadius: '50%', height: '140px', width: '130px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="subHeading1">
          {channel?.snippet?.title}{' '}
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
