import React, { useContext, useEffect } from 'react'
import { Card,CardMedia,CardContent,Stack,Typography } from '@mui/material'
import { AppContext } from '../Context/AppContextProvider'
import { fetchFromApi } from '../Utils/fetchFromApi'
import { Link } from 'react-router-dom'
const RelatedVideos = ({id}) => {
    const {state:{relatedVideos},dispatch}=useContext(AppContext)

   // https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50

   
   /*
    <CardMedia sx={{height:140, width:200,mr:3,mt:3}}image={item?.snippet?.thumbnails.default.url} alt='' />
                    <CardContent sx={{height:140, width:400,g:10}} >
                      <Typography variant='subHeading2'>
                        {item?.snippet?.title.slice(0,50)}
                      </Typography>
                      <Typography variant='body1'>
                        {item?.snippet?.channelTitle}
                      </Typography>
                     
                    </CardContent>
                    */
    useEffect(()=>{
        
        fetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=10`)
        .then((data)=>dispatch({type:'LOAD_RELATED_VIDEOS',payload:data.items}))
    },[id])
    console.log(relatedVideos)
  return (
    <div>   
             
                {relatedVideos?.map(item=>{return <> 
                            
                         <Link to={`/videos/${item.id.videoId}`}>
                         <Stack direction='row' pl={4}>    
                          <CardMedia sx={{height:140, width:200,mr:3,mt:3}} image={item?.snippet?.thumbnails.default.url} alt='' />                          
                            <CardContent sx={{height:140, width:400,gap:10}} >
                                    <Typography variant='subHeading2'>
                                        {item?.snippet?.title?.slice(0,50)}
                                    </Typography>
                                    <Link to={`/channel/${item.snippet?.channelId}`}>
                                        <Typography variant='body1'>
                                            {item?.snippet?.channelTitle}
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
