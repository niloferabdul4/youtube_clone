import React, { useContext, useEffect } from 'react'
import { Card,CardMedia,CardContent,Stack,Typography } from '@mui/material'
import { AppContext } from '../Context/AppContextProvider'
import { fetchFromApi } from '../Utils/fetchFromApi'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const RelatedVideos = ({id}) => {
    const {state:{relatedVideos},dispatch}=useContext(AppContext)
    useEffect(()=>{
        
        fetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=10`)
        .then((items)=>dispatch({type:'LOAD_RELATED_VIDEOS',payload:items}))
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    },[id])
    
  return (
    <div>   
             
                {relatedVideos?.map(item=>{return <> 
                            
                         <Link to={`/videos/${item.id.videoId}`}>
                         <Stack direction='row' sx={{px:{sm:2,xs:2},py:{sm:1.5,xs:1.5}}}>    
                          <CardMedia sx={{height:140, width:300,mr:3,mt:3}} image={item?.snippet?.thumbnails.default.url} alt='' />                          
                            <CardContent sx={{height:140, width:300,gap:10}} >
                                    <Typography variant='subHeading2' >
                                        {item?.snippet?.title?.slice(0,30)}...
                                    </Typography>
                                    <Link to={`/channel/${item.snippet?.channelId}`}>
                                        <Typography variant='body2'>
                                            {item?.snippet?.channelTitle}
                                            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                        </Typography> 
                                    </Link>
                            </CardContent> 
                            </Stack>                      
                          </Link>
            
                  </>})}
               
    </div>
  )
}

export default RelatedVideos
